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
import React from "react";

function RegisterCard() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
    console.log(
      name.value,
      lastName.value,
      email.value,
      password.value,
      password2.value
    );
  };

  return (
    <Card>
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
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password2">Confirmar Contrasena (*)</Label>
            <Input
              id="password2"
              type="password"
              placeholder="********"
              autoComplete="current-password"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>Registrarse</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
export default RegisterCard;
