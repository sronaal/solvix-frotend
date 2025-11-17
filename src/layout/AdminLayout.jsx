import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

export default function AdminLayout() {
  return (
    <div className="min-h-screen grid grid-cols-6">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <div className="xl:col-span-5 bg-red-400">
        <Header />

        <div className="h-[90vh]">
          <div className="bg-white p-4 m-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="mt-2 text-gray-600">
              Bienvenido al panel de administrador.
            </p>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}
