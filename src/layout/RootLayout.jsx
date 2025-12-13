import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import AdminLayout from "./AdminLayout";
import UserLayout from "./UserLayout";
import TecnicoLayout from "./TecnicoLayout";

import AuthLayout from "./AuthLayout";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";


import { useNavigate } from 'react-router-dom'

export default function RootLayout() {
  const { user, loading } = useAuth();

  const navigate = useNavigate()
  if (loading) return <div>Cargando...</div>;

  if (user == null) navigate('/auth/')


  switch (user.role) {
    case "admin":
      return <AdminLayout />

    case "usuario":
      return <UserLayout />;

    case "technician":
      return <TecnicoLayout />;
    default:
      return <Navigate to="/auth/login" replace />;
  }
}
