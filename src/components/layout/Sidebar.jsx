import { useState } from "react"
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { SolvixLogo } from "../SolvixLogo"
import {
    LayoutDashboard,
    TicketCheck,
    Users,
    LogOut,
    ChevronRight
} from "lucide-react";

export default function Sidebar({ open, setOpen }) {
    const navigate = useNavigate()
    const location = useLocation()

    const onLogout = () => {
        localStorage.removeItem("user")
        navigate('/auth')
    }

    const menuItems = [
        { name: 'Dashboard', path: '/solvix', icon: LayoutDashboard },
        { name: 'Asignación', path: '/solvix/asignar', icon: TicketCheck },
        { name: 'Usuarios', path: '/solvix/usuarios', icon: Users },
    ]

    const isActive = (path) => location.pathname === path

    return (
        <>
            {/* Mobile Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setOpen(false)}
                />
            )}

            <div className={`
                fixed flex flex-col left-0 z-50 top-0 
                h-screen w-72 bg-white 
                transform transition-all duration-300 ease-out
                ${open ? "translate-x-0" : "-translate-x-full"} 
                lg:translate-x-0 lg:fixed
                border-r border-slate-100 shadow-[20px_0_40px_-15px_rgba(0,0,0,0.03)]
            `}>

                <div className="h-24 flex items-center px-8 border-b border-slate-50">
                    <SolvixLogo className="scale-105" />
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar px-5 py-8 space-y-1.5">
                    <h2 className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Administración</h2>

                    {menuItems.map((item) => {
                        const active = isActive(item.path)
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`
                                    flex items-center justify-between group px-4 py-3 rounded-xl transition-all duration-300
                                    ${active
                                        ? 'bg-indigo-50 text-indigo-600 shadow-sm'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
                                `}
                            >
                                <div className="flex items-center gap-3.5">
                                    <item.icon className={`w-[18px] h-[18px] transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`} />
                                    <span className={`text-[13.5px] font-semibold tracking-tight ${active ? 'font-bold' : ''}`}>{item.name}</span>
                                </div>
                                {active && <div className="w-1 h-4 bg-indigo-600 rounded-full" />}
                            </Link>
                        )
                    })}
                </div>

                <div className="p-6 border-t border-slate-50">
                    <button
                        onClick={onLogout}
                        className="flex items-center w-full gap-3 px-4 py-3.5 text-[13px] font-bold text-red-500 bg-red-50/50 rounded-2xl hover:bg-red-50 hover:text-red-600 transition-all duration-300 group active:scale-95"
                    >
                        <LogOut className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                        Cerrar Sesión
                    </button>

                    <div className="mt-6 flex items-center justify-center gap-2">
                        <div className="h-px bg-slate-100 flex-1"></div>
                        <span className="text-[10px] font-bold text-slate-300 tracking-widest uppercase">Solvix v1.0</span>
                        <div className="h-px bg-slate-100 flex-1"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

