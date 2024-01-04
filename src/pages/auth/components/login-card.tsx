import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import axiosClient from "@/services/axios.services";
import { Label } from "@radix-ui/react-label";
import { Loader2 } from "lucide-react";
import { useState } from "react";

function LoginCard() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    // Get Inputs from Form event
    const { elements } = event.currentTarget;

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
    axiosClient
      .post("/auth/login", {
        password: password.value,
        email: email.value,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
      })
      .catch((error) =>
        toast({
          title: "Error al iniciar sesion",
          description: error.response.data.msg,
          variant: "default",
        })
      )
      .finally(() => setLoading(false));
  };
  return (
    <Card>
      <Toaster />
      <CardHeader>
        <CardTitle>Acceder</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Correo Electronico</Label>
            <Input
              id="email"
              type="email"
              placeholder="federico.valverde@rmadrid.com"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Contrasena</Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              autoComplete="current-passwor"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          {loading ? (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Iniciar Sesion
            </Button>
          ) : (
            <Button>Iniciando Sesion</Button>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
export default LoginCard;
