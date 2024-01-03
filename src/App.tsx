import { Route, Routes } from "react-router-dom";
// Layouts
import AuthLayout from "./layout/auth.layout";
import MainLayout from "./layout/main.layout";

// Pages
import LoginPage from "./pages/auth/login.page";
import HomePage from "./pages/store/home.page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
