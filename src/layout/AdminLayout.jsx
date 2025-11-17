import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import { useState } from "react";

export default function AdminLayout() {

  const [open, setOpen] = useState(false)

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Contenido principal */}
      <div className="h-screen w-screen">
        <Header
          title="Panel Principal"
          subtitle='Panel de Administración'
          onToggleSidebar={() => setOpen(!open)}
        />
        <div className="bg-amber-400 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
