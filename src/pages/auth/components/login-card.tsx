import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

function LoginCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Acceder</CardTitle>
      </CardHeader>
      <form>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Correo Electronico</Label>
            <Input
              id="email"
              type="email"
              placeholder="Escriba su correo electronico"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Contrasena</Label>
            <Input
              id="password"
              type="password"
              placeholder="Escriba su contrasena"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>Iniciar Sesion</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
export default LoginCard;
