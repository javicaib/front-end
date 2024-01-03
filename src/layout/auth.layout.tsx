import { Outlet } from "react-router-dom";
function AuthLayout() {
  return (
    <main className=" h-screen flex items-center justify-center bg-slate-50">
      <Outlet />
    </main>
  );
}
export default AuthLayout;
