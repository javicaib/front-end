import { createContext, useState } from "react";
import { ReactNode } from 'react';

interface ComponentProps {
  children: ReactNode;
}
const AuthContex = createContext();
const AuthProvider: React.FC<ComponentProps> = ({ children }) => {
  const [state, setState] = useState("asdasd");
  return (
    <AuthContex.Provider value={{ state, setState }}>
      {children}
    </AuthContex.Provider>
  );
};

export { AuthProvider };
export default AuthContex;
