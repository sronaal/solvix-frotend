import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import AdminLayout from "./AdminLayout";
import UserLayout from "./UserLayout";
import TecnicoLayout from "./TecnicoLayout";

import AuthLayout from "./AuthLayout";

export default function RootLayout() {
  const { user, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;

  if (!user) return <AuthLayout />;


  switch (user.rol) {
    case "administrador":
      return <AdminLayout />;

    case "usuario":
      return <UserLayout />;

    case "tecnico":
        return <TecnicoLayout/>;
    default:
      return <Navigate to="/auth/login" replace />;
  }
}
