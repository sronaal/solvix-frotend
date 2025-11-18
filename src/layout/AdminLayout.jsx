import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import { useState } from "react";

export default function RootLayout() {

  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Mapeamos rutas a títulos
  const titles = {
    "/solvix": "Dashboard",
    "/solvix/asignar": "Asignación de Tickets",
    "/solvix/usuarios": "Gestión de Usuarios"
  };

  // Toma el título según pathname, o uno por defecto
  const currentTitle = titles[location.pathname] || "Solvix";

  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="h-screen w-screen">
        <Header
          title={currentTitle}
          subtitle="Panel de Administración"
          onToggleSidebar={() => setOpen(!open)}
        />

        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
