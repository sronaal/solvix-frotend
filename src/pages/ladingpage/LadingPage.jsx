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
            <section className="bg-(--bg-principal) h-[80%] flex  flex-col lg:flex-row items-center  py-30 px-8">
                <div className="h-82 w-fit flex flex-col items-start gap-5">
                    <span className="bg-(--color-primary-3) text-(--color-primary-2) p-2 rounded-md w-fit mb-4">Sistema de Tickets para IT</span>
                    <h2 className="text-sm lg:text-xl md:text-xl mb-4">Gestiona el soporte técnico de tu empresa de manera eficiente</h2>
                    <p className="text-sm md:text-xl font- text-(--color-text-2) mb-5">Solvix centraliza todas las incidencias, automatiza el flujo de trabajo y mejora la satisfacción de tus usuarios con una plataforma intuitiva y poderosa.</p>
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
                <div className="mt-15">
                    <img className="w-full h-full rounded-3xl shadow-2xl" src="/src/assets/img/foto-banner.jpeg" alt="" />
                </div>

            </section>

            <section className="flex flex-col items-center gap-4 bg-(--bg-secundario) min-h-screen text-center p-20">
                <span className="bg-(--color-primary-3) px-2 py-1 rounded-md text-(--color-primary) w-fit mb-5">Caracteristicas</span>
                <h2 className="text-md lg:text-xl  text-(--color-text) w-full border ">Todo lo que necesitas para gestionar soporte IT</h2>
                <p className="text-xl lg:text-2xl  w-90 md:w-9/12 lg:w-8/12  text-(--color-text-2)">Una plataforma completa diseñada para optimizar cada aspecto de tu departamento de soporte</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    <div className="flex flex-col gap-6 items-start border border-gray-300 p-8 w-full rounded-2xl shadow-xl bg-white">
                        <span className="bg-(--color-primary-3) p-3 rounded-xl flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm12 1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1a1 1 0 0 1 0 2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1a1 1 0 0 1 0-2Zm-1-1.82a3 3 0 0 0 0 5.64V17H10a1 1 0 0 0-2 0H4v-2.18a3 3 0 0 0 0-5.64V7h4a1 1 0 0 0 2 0h10Z" />
                            </svg>
                        </span>
                        <h2 className="text-xl font-semibold text-gray-800">Gestión Centralizada</h2>
                        <p className="text-start text-xl text-gray-600">
                            Todos tus tickets de soporte en un solo lugar, organizados y accesibles.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 items-start border border-gray-300 p-8 w-full rounded-2xl shadow-xl bg-white">
                        <span className="bg-(--color-primary-3) p-3 rounded-xl flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24">
                                <path
                                    fill="none"
                                    stroke="#2563EB"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="m5.226 11.33l6.998-8.983c.547-.703 1.573-.266 1.573.67V9.97c0 .56.402 1.015.899 1.015H18.1c.773 0 1.185 1.03.674 1.686l-6.998 8.983c-.547.702-1.573.265-1.573-.671V14.03c0-.56-.403-1.015-.899-1.015H5.9c-.773 0-1.185-1.03-.674-1.686"
                                />
                            </svg>
                        </span>
                        <h2 className="text-xl font-semibold text-gray-800">Respuesta Rápida</h2>
                        <p className="text-start text-xl text-gray-600">
                            Sistema de asignación inteligente para resolver incidencias más rápido.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 items-start border border-gray-300 p-8 w-full rounded-2xl shadow-xl bg-white">
                        <span className="bg-(--color-primary-3) p-3 rounded-xl flex items-center justify-center">
                            <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
                                <path
                                    fill="#2563EB"
                                    d="M5 8.9c1.44 0 2.68.252 3.575.855C9.502 10.38 10 11.343 10 12.6a.501.501 0 0 1-1 0c0-.958-.358-1.596-.983-2.017C7.359 10.141 6.35 9.9 5 9.9s-2.36.241-3.017.684C1.358 11.005 1 11.643 1 12.601a.501.501 0 0 1-1 0c0-1.258.497-2.221 1.424-2.846C2.319 9.152 3.56 8.9 5 8.9m4.975 0c1.439 0 2.68.252 3.575.855c.927.625 1.425 1.588 1.425 2.846a.5.5 0 0 1-1 0c0-.958-.358-1.596-.984-2.017c-.518-.349-1.253-.57-2.202-.65a4.5 4.5 0 0 0-.87-1.033zM5 1.85a3.151 3.151 0 0 1 0 6.3a3.15 3.15 0 1 1 0-6.3m4.975 0a3.15 3.15 0 0 1 0 6.3c-.524 0-1.016-.13-1.45-.356a4.5 4.5 0 0 0 .534-.852a2.15 2.15 0 1 0 0-3.887a4.5 4.5 0 0 0-.535-.85a3.1 3.1 0 0 1 1.45-.355M5 2.85a2.151 2.151 0 0 0 0 4.3a2.15 2.15 0 0 0 0-4.3"
                                />
                            </svg>
                        </span>
                        <h2 className="text-xl font-semibold text-gray-800">Gestión Colaborativa</h2>
                        <p className="text-start text-xl text-gray-600">
                            Facilita la comunicación entre usuarios, técnicos y administradores.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 items-start border border-gray-300 p-8 w-full rounded-2xl shadow-xl bg-white">
                        <span className="bg-(--color-primary-3) p-3 rounded-xl flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 16 16">
                                <path
                                    fill="#2563EB"
                                    fillRule="evenodd"
                                    d="M1.5 14H15v-1H2V0H1v13.5l.5.5zM3 11.5v-8l.5-.5h2l.5.5v8l-.5.5h-2l-.5-.5zm2-.5V4H4v7h1zm6-9.5v10l.5.5h2l.5-.5v-10l-.5-.5h-2l-.5.5zm2 .5v9h-1V2h1zm-6 9.5v-6l.5-.5h2l.5.5v6l-.5.5h-2l-.5-.5zm2-.5V6H8v5h1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <h2 className="text-xl font-semibold text-gray-800">Reportes avanzados</h2>
                        <p className="text-start text-xl text-gray-600">
                            Análisis detallados y métricas de rendimiento en tiempo real.
                        </p>
                    </div>

                     <div className="flex flex-col gap-6 items-start border border-gray-300 p-8 w-full rounded-2xl shadow-xl bg-white">
                        <span className="bg-(--color-primary-3) p-3 rounded-xl flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 256 256" fill="#2563EB"><g id="galaSecure0" fill="none" stroke="#2563EB" stroke-dasharray="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke-opacity="1" stroke-width="16"><path id="galaSecure1" d="m 127.99999,239.96468 c 0,0 95.98506,-31.99503 95.98506,-111.98257"/><path id="galaSecure2" d="M 223.98505,127.98211 V 31.997059 c 0,0 -31.99502,-15.997511 -95.98506,-15.997511"/><path id="galaSecure3" d="m 128,239.96468 c 0,0 -95.985056,-31.99503 -95.985056,-111.98257"/><path id="galaSecure4" d="M 32.014944,127.98211 V 31.997059 c 0,0 31.995019,-15.997509 95.985056,-15.997509"/><path id="galaSecure5" d="M 191.99003,63.99208 C 128,111.9846 112.00249,175.97464 112.00249,175.97464 c 0,0 -15.997511,-19.0946 -31.995019,-31.99502"/></g></svg>
                        </span>
                        <h2 className="text-xl font-semibold text-gray-800">Seguro y confiable</h2>
                        <p className="text-start text-xl text-gray-600">
                            Protección de datos empresariales con los más altos estándares.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 items-start border border-gray-300 p-8 w-full rounded-2xl shadow-xl bg-white">
                        <span className="bg-(--color-primary-3) p-3 rounded-xl flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 432 432"><path fill="#2563EB" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3zm0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50zM224 109v112l96 57l-16 27l-112-68V109h32z"/></svg>
                        </span>
                        <h2 className="text-xl font-semibold text-gray-800">Seguimiento en Real</h2>
                        <p className="text-start text-xl text-gray-600">
                            Monitorea el estado de cada ticket al instante desde cualquier dispositivo
                        </p>
                    </div>
                </div>


            </section>
        </>
    );
};

export default LandingPage;
