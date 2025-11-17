import React from "react";

import { Link } from "react-router-dom";

import {
  RiBarChart2Line,
  RiEarthLine,
  RiMessage2Line,
  RiCalendarTodoLine,
  RiLogoutCircleLine
} from "react-icons/ri";

function Sidebar() {
  return (
    <div className="xl:h-screen overflow-y-scroll scroll-hidden  fixed xl:static w-full h-full -left-full top-0 bg-[#1E1F25] p-8 flex flex-col justify-between">
      <div>
        <h1 className="text-center text-2xl font-bold text-white mb-10">
          Admin <span className="text-[#C600EB] text-4xl">.</span>{" "}
        </h1>
        <nav>
          <Link className="flex items-center text-sm gap-4 py-2 px-4 rounded-lg hover:bg-[#131517] transition-colors">
            <RiBarChart2Line className="text-[#C600EB]" />
            Analitica
          </Link>

          <Link className="flex items-center gap-4 py-2 px-4 rounded-lg text-sm hover:bg-[#131517] transition-colors">
            <RiEarthLine className="text-[#C600EB]" />
            Redes Sociales
          </Link>

          <Link className="flex items-center gap-4 py-2 px-4 rounded-lg text-sm hover:bg-[#131517] transition-colors">
            <RiMessage2Line className="text-[#C600EB]" />
            Mensajes
          </Link>

          <Link className="flex items-center gap-4 py-2 px-4 rounded-lg text-sm hover:bg-[#131517] transition-colors">
            <RiCalendarTodoLine className="text-[#C600EB]" />
            Calendario
          </Link>
        </nav>
      </div>
      <nav>
        <Link className="flex items-center text-sm gap-4 py-2 px-4 rounded-lg hover:bg-[#131517] transition-colors">
          <RiLogoutCircleLine className="text-[#C600EB]" />
          Cerrar sesión
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;