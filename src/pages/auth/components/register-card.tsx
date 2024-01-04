import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import axiosClient from "@/services/axios.services";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";

function RegisterCard() {
  const [boder, setBorder] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    // Get Inputs from Form event
    const { elements } = event.currentTarget;

    // Get Input Name
    const name = elements.namedItem("name");
    const isInputName = name instanceof HTMLInputElement;
    // Validate if is null
    if (!isInputName || name === null) return;

    // Get Input Last Name
    const lastName = elements.namedItem("lastName");
    const isInputLastName = lastName instanceof HTMLInputElement;
    // Validate if is null
    if (!isInputLastName || lastName === null) return;

    // Get Input Email
    const email = elements.namedItem("email");
    const isEmailInput = email instanceof HTMLInputElement;
    // Validate if is null
    if (!isEmailInput || email === null) return;

    // Get Input Password
    const password = elements.namedItem("password");
    const isPasswordInput = password instanceof HTMLInputElement;
    // Validate if is null
    if (!isPasswordInput || password === null) return;

    // Get Input Password2
    const password2 = elements.namedItem("password2");
    const isPasswordInput2 = password2 instanceof HTMLInputElement;
    // Validate if is null
    if (!isPasswordInput2 || password2 === null) return;
    if (password.value !== password2.value) {
      password.value = "";
      password2.value = "";
      setBorder("border-red-600");
      return;
    }
    try {
      axiosClient
        .post("/users/create", {
          name: name.value,
          lastName: lastName.value,
          password: password.value,
          password2: password2.value,
          email: email.value,
        })
        .then(() => {
          name.value = "";
          lastName.value = "";
          password.value = "";
          password2.value = "";
          email.value = "";
          toast({
            title: "Usuario creado correctamente",
            description: "Ahora puede iniciar sesion",
            variant: "default",
          });
        })
        .catch((error) => {
          toast({
            title: "Ha ocurrido un error",
            description: error.message,
            variant: "destructive",
          });
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnChange = () => {
    setBorder("");
  };

  return (
    <Card>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardDescription>Todos campos con (*) son requeridos</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Nombre (*)</Label>
            <Input id="name" type="text" placeholder="Federico" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="lastName">Apellidos</Label>
            <Input id="lastName" type="text" placeholder="Valverde Campos" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Correo Electronico (*)</Label>
            <Input
              id="email"
              type="email"
              placeholder="federico.valverde@rmadrid.com"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Contrasena (*)</Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              autoComplete="current-password"
              className={boder}
              onChange={handleOnChange}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password2">Confirmar Contrasena (*)</Label>
            <Input
              id="password2"
              type="password"
              placeholder="********"
              autoComplete="current-password"
              className={boder}
              onChange={handleOnChange}
            />
            {boder !== "" && (
              <pre className="text-3sm text-red-600 font-mono font-bold px-2">
                Las contrasenas deben coincidir
              </pre>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          {loading ? (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Registrando
            </Button>
          ) : (
            <Button>Registrase</Button>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
export default RegisterCard;
