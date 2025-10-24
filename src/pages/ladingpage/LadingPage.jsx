import { useState } from "react";
import { SolvixLogo } from "../../components/SolvixLogo";
import { Link } from "react-router-dom";

const LandingPage = () => {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Características", href: "#" },
        { name: "Beneficios", href: "#" },
        { name: "Testimonios", href: "#" },
        { name: "Precio", href: "#" },
    ];

    return (
        <>
            {/* NAVBAR */}
            <nav className="bg-[#FDFEFF] flex flex-col md:flex-row items-start md:items-center text-gray-500 px-8 py-4 shadow-md fixed w-full z-50">
                <div className="flex justify-between items-center w-full">
                    <SolvixLogo />

                    {/* Botón menú móvil */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden focus:outline-none cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 32 32"
                        >
                            <path
                                fill="none"
                                stroke="#2563EB"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 8h22M5 16h22M5 24h22"
                            />
                        </svg>
                    </button>

                    {/* Links escritorio */}
                    <ul className="hidden md:flex items-center space-x-8 ml-auto">
                        {links.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="hover:text-(--color-primary-2) transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <Link
                            to="/auth"
                            className="bg-(--color-primary) hover:bg-(--color-primary-2) text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                            >
                                <path
                                    fill="#ffffff"
                                    d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z"
                                />
                            </svg>
                            Comenzar
                        </Link>
                    </ul>
                </div>

                {/* Menú móvil */}
                {open && (
                    <ul className="md:hidden mt-4 space-y-3 w-full animate-fadeIn">
                        {links.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="block hover:text-(--color-primary-2) transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <Link
                            to="/auth"
                            className="block text-center bg-(--color-primary) text-white py-2 rounded-md w-full transition-colors hover:opacity-90"
                        >
                            Comenzar
                        </Link>
                    </ul>
                )}
            </nav>

            {/* HERO SECTION */}
            <section className="bg-(--bg-principal) min-h-screen flex flex-col md:flex-row  justify-between items-center  pt-30 py-20 px-20">
                <div className="h-82 w-fit flex flex-col items-start gap-5 mr-10">
                    <span className="bg-(--color-primary-3) text-(--color-primary-2) p-2 rounded-md w-fit mb-4">Sistema de Tickets para IT</span>
                    <h2 className="text-xl mb-4">Gestiona el soporte técnico de tu empresa de manera eficiente</h2>
                    <p className="text-2xl font- text-(--color-text-2) mb-5">Solvix centraliza todas las incidencias, automatiza el flujo de trabajo y mejora la satisfacción de tus usuarios con una plataforma intuitiva y poderosa.</p>
                    <div className="flex items-center gap-5">
                        <Link to='/auth' className="bg-(--color-primary) text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                            >
                                <path
                                    fill="#ffffff"
                                    d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z"
                                />
                            </svg>
                            Comenzar ahora</Link>
                            <Link className="border border-gray-600 px-4 py-2 rounded-md ">Ver demo</Link>
                    </div>
                </div>
                <div>
                    <img className="w-full h-full rounded-3xl shadow-2xl" src="/src/assets/img/foto-banner.jpeg" alt="" />
|                </div>

            </section>

            <section className="bg-(--bg-secundario) min-h-screen text-center p-20">
                <span className="bg-(--color-primary-3) px-2 py-1 rounded-md text-(--color-primary)">Caracteristicas</span>
            </section>
        </>
    );
};

export default LandingPage;
