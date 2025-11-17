import { useState } from "react"
import { SolvixLogo } from "../SolvixLogo"
import { Link } from "react-router-dom"

export default function Sidebar({ open, setOpen }) {

    return (
        <>
            {/* Overlay para móvil */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            <div className={`
                fixed flex flex-col  gap-12 left-0 top-0 
                h-screen bg-white w-64 shadow-lg z-50
                transform transition-transform duration-300
                border-r border-gray-300
                ${open ? "translate-x-0" : "-translate-x-full"} 
                lg:translate-x-0 lg:static
                `}>
                <span className="pl-8 pt-8 pr-8">
                    <SolvixLogo />
                </span>
                <hr className="boder-b border-gray-200" />
                <nav>
                    <Link 
                    to='/solvix'
                    className="flex items-center  gap-4 font-semibold hover:bg-blue-100 p-2 rounded-md w-full mb-4 text-(--color-text) hover:text-(--color-primary-2)">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="25" height="25" viewBox="0 0 24 24"><path fill="#2563EB" d="M10 13H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Zm-1 7H4v-5h5ZM21 2h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 7h-5V4h5Zm1 4h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Zm-1 7h-5v-5h5ZM10 2H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM9 9H4V4h5Z" /></svg>
                        Panel Principal
                    </Link>

                    <Link
                        to='asignar'
                        className="flex items-center  gap-4 font-semibold hover:bg-blue-100 p-2 rounded-md w-full mb-4 text-(--color-text) hover:text-(--color-primary-2)">
                        <svg width="25" height="25" className="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="#2563EB" d="M5 8.9c1.44 0 2.68.252 3.575.855C9.502 10.38 10 11.343 10 12.6a.501.501 0 0 1-1 0c0-.958-.358-1.596-.983-2.017C7.359 10.141 6.35 9.9 5 9.9s-2.36.241-3.017.684C1.358 11.005 1 11.643 1 12.601a.501.501 0 0 1-1 0c0-1.258.497-2.221 1.424-2.846C2.319 9.152 3.56 8.9 5 8.9m4.975 0c1.439 0 2.68.252 3.575.855c.927.625 1.425 1.588 1.425 2.846a.5.5 0 0 1-1 0c0-.958-.358-1.596-.984-2.017c-.518-.349-1.253-.57-2.202-.65a4.5 4.5 0 0 0-.87-1.033zM5 1.85a3.151 3.151 0 0 1 0 6.3a3.15 3.15 0 1 1 0-6.3m4.975 0a3.15 3.15 0 0 1 0 6.3c-.524 0-1.016-.13-1.45-.356a4.5 4.5 0 0 0 .534-.852a2.15 2.15 0 1 0 0-3.887a4.5 4.5 0 0 0-.535-.85a3.1 3.1 0 0 1 1.45-.355M5 2.85a2.151 2.151 0 0 0 0 4.3a2.15 2.15 0 0 0 0-4.3" /></svg>
                        Asignación de Ticket
                    </Link>

                    <Link 
                    to='usuarios'
                    className="flex items-center  gap-4 font-semibold hover:bg-blue-100 p-2 rounded-md w-full mb-4 text-(--color-text) hover:text-(--color-primary-2)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="ml-2" viewBox="0 0 512 512"><path fill="#2563EB" d="m462.541 316.3l-64.344-42.1l24.774-45.418A79.124 79.124 0 0 0 432.093 192v-72a103.941 103.941 0 0 0-174.609-76.477L279.232 67a71.989 71.989 0 0 1 120.861 53v72a46.809 46.809 0 0 1-5.215 21.452L355.962 284.8l89.058 58.274a42.16 42.16 0 0 1 19.073 35.421V432h-72v32h104v-85.506a74.061 74.061 0 0 0-33.552-62.194Z" /><path fill="#2563EB" d="m318.541 348.3l-64.343-42.1l24.773-45.418A79.124 79.124 0 0 0 288.093 224v-72A104.212 104.212 0 0 0 184.04 47.866C126.723 47.866 80.093 94.581 80.093 152v72a78 78 0 0 0 9.015 36.775l24.908 45.664L50.047 348.3A74.022 74.022 0 0 0 16.5 410.4L16 496h336.093v-85.506a74.061 74.061 0 0 0-33.552-62.194Zm1.552 115.7H48.186l.31-53.506a42.158 42.158 0 0 1 19.073-35.421l88.682-58.029l-39.051-71.592A46.838 46.838 0 0 1 112.093 224v-72a72 72 0 1 1 144 0v72a46.809 46.809 0 0 1-5.215 21.452L211.962 316.8l89.058 58.274a42.16 42.16 0 0 1 19.073 35.421Z" /></svg>
                        Usuarios
                    </Link>



                </nav>
            </div>
        </>
    )
}
