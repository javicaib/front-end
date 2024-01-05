import AuthContex from "@/providers/auth.providers";
import { useContext } from "react";
export type AuthContextType = {
  state: string;
};
const useAuth = (): AuthContextType => {
  return useContext(AuthContex);
};

export default useAuth;
