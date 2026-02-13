import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { SolvixLogo } from "../SolvixLogo"
import { SlLogout } from "react-icons/sl";

import { Link } from "react-router-dom"

export default function Sidebar({ open, setOpen }) {

    const navigate = useNavigate()
    const onButton = () => {
        localStorage.removeItem("user")
        navigate('/auth')
    }

    return (
        <>
            {/* Overlay para móvil */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm transition-opacity"
                    onClick={() => setOpen(false)}
                />
            )}

            <div className={`
                fixed flex flex-col left-0 z-40 top-0 
                h-screen bg-white w-72 shadow-2xl 
                transform transition-transform duration-300 ease-in-out
                border-r border-gray-100
                ${open ? "translate-x-0" : "-translate-x-full"} 
                lg:translate-x-0 lg:fixed
                overflow-y-auto
            `}>

                <div className="p-8 flex items-center justify-center border-b border-gray-50">
                    <SolvixLogo className="scale-110" />
                </div>

                <nav className="flex-1 px-4 py-8 space-y-2 text-(--color-text)">
                    <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Menu Principal</p>

                    <Link
                        to='/solvix'
                        className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-600 hover:bg-(--color-primary-5) hover:text-(--color-primary) transition-all duration-200 group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:scale-110 transition-transform text-gray-400 group-hover:text-(--color-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        Panel Principal
                    </Link>

                    <Link
                        to='asignar'
                        className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-600 hover:bg-(--color-primary-5) hover:text-(--color-primary) transition-all duration-200 group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:scale-110 transition-transform text-gray-400 group-hover:text-(--color-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                        </svg>
                        Asignación de Ticket
                    </Link>

                    <Link
                        to='usuarios'
                        className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-600 hover:bg-(--color-primary-5) hover:text-(--color-primary) transition-all duration-200 group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:scale-110 transition-transform text-gray-400 group-hover:text-(--color-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        Usuarios
                    </Link>

                </nav>

                <div className="p-4 border-t border-gray-100">
                    <button onClick={onButton} className="flex items-center w-full gap-3 px-4 py-3 text-sm font-medium text-red-600 bg-red-50 rounded-xl hover:bg-red-100 transition-colors duration-200 group" >
                        <SlLogout className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </>
    )
}
