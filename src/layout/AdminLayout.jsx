import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import { useState } from "react";

export default function RootLayout() {

  const [open, setOpen] = useState(false);
  const location = useLocation();

  const titles = {
    "/solvix": "Dashboard",
    "/solvix/asignar": "Asignación de Tickets",
    "/solvix/usuarios": "Gestión de Usuarios"
  };

  const currentTitle = titles[location.pathname] || "Solvix";

  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} />

      <div className={`flex flex-col flex-1 h-screen transition-all duration-300 
        ${open ? "ml-64" : "ml-0"} lg:ml-64
      `}>
        
        <Header
          title={currentTitle}
          subtitle="Panel de Administración"
          onToggleSidebar={() => setOpen(!open)}
        />

        <div className="p-4 overflow-auto h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

