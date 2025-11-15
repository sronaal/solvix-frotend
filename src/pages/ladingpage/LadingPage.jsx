import { useState } from "react"
import { SolvixLogo } from "../../components/SolvixLogo"
import { Link } from "react-router-dom"

const links = [
    { name: "Características", href: "#caracteristicas" },
    { name: "Funcionamiento", href: "#funcionamiento" },
    { name: "Contacto", href: "#" },
]

const LandingPage = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="min-h-screen flex flex-col bg-(--bg-principal)">
            <nav className="bg-[#FDFEFF] shadow-md fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    <SolvixLogo />
                    <div className="flex items-center">
                        <ul className="hidden md:flex items-center space-x-8">
                            {links.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-(--color-primary-2) transition-colors text-sm font-medium">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <Link to="/auth" className="bg-(--color-primary) hover:bg-(--color-primary-2) text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                    <path fill="#ffffff" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" />
                                </svg>
                                Comenzar
                            </Link>
                        </ul>
                        <button onClick={() => setOpen(!open)} className="md:hidden ml-2 p-2 rounded focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
                                <path fill="none" stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h22M5 16h22M5 24h22" />
                            </svg>
                        </button>
                    </div>
                </div>
                {open && (
                    <ul className="md:hidden bg-white shadow-lg px-4 py-4 space-y-3 animate-fadeIn">
                        {links.map(link => (
                            <li key={link.name}>
                                <a href={link.href} className="block py-2 text-gray-700 hover:text-(--color-primary-2) transition-colors">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <Link to="/auth" className="block text-center bg-(--color-primary) text-white py-2 rounded-md w-full transition-colors hover:opacity-90">
                            Comenzar
                        </Link>
                    </ul>
                )}
            </nav>
            <main className="flex-1 pt-20">
                <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 py-12 gap-8">
                    <div className="flex flex-col items-start gap-5 w-full lg:w-1/2">
                        <span className="bg-(--color-primary-3) text-(--color-primary-2) p-2 rounded-md w-fit mb-4 text-xs sm:text-sm">Sistema de Tickets para IT</span>
                        <h2 className="text-lg sm:text-xl lg:text-2xl mb-4 font-bold">Gestiona el soporte técnico de tu empresa de manera eficiente</h2>
                        <p className="text-sm sm:text-base lg:text-lg text-(--color-text-2) mb-5">Solvix centraliza todas las incidencias, automatiza el flujo de trabajo y mejora la satisfacción de tus usuarios con una plataforma intuitiva y poderosa.</p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                            <Link to='/auth' className="bg-(--color-primary) text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                    <path fill="#ffffff" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" />
                                </svg>
                                Comenzar ahora
                            </Link>
                            <Link className="border border-gray-600 px-4 py-2 rounded-md w-full sm:w-auto text-center">Ver demo</Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img className="w-full max-w-xs sm:max-w-md lg:max-w-xl rounded-3xl shadow-2xl object-cover" src="foto-banner.jpeg" alt="" />
                    </div>
                </section>
                <section id="caracteristicas" className="flex flex-col items-center gap-4 bg-(--bg-secundario) min-h-screen text-center px-4 sm:px-8 py-10">
                    <span className="bg-(--color-primary-3) px-2 py-1 rounded-md text-(--color-primary) w-fit mb-5 text-xs sm:text-sm">Características</span>
                    <h2 className="text-lg sm:text-xl lg:text-2xl text-(--color-text) w-full font-bold">Todo lo que necesitas para gestionar soporte IT</h2>
                    <p className="text-base sm:text-lg lg:text-xl w-full sm:w-9/12 lg:w-8/12 text-(--color-text-2)">Una plataforma completa diseñada para optimizar cada aspecto de tu departamento de soporte</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
                        {/* ...tarjetas de características... */}
                        {[
                            {
                                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M9 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm12 1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1a1 1 0 0 1 0 2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1a1 1 0 0 1 0-2Zm-1-1.82a3 3 0 0 0 0 5.64V17H10a1 1 0 0 0-2 0H4v-2.18a3 3 0 0 0 0-5.64V7h4a1 1 0 0 0 2 0h10Z" /></svg>,
                                title: "Gestión Centralizada",
                                desc: "Todos tus tickets de soporte en un solo lugar, organizados y accesibles."
                            },
                            {
                                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24"><path fill="none" stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5.226 11.33l6.998-8.983c.547-.703 1.573-.266 1.573.67V9.97c0 .56.402 1.015.899 1.015H18.1c.773 0 1.185 1.03.674 1.686l-6.998 8.983c-.547.702-1.573.265-1.573-.671V14.03c0-.56-.403-1.015-.899-1.015H5.9c-.773 0-1.185-1.03-.674-1.686" /></svg>,
                                title: "Respuesta Rápida",
                                desc: "Sistema de asignación inteligente para resolver incidencias más rápido."
                            },
                            {
                                icon: <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="#2563EB" d="M5 8.9c1.44 0 2.68.252 3.575.855C9.502 10.38 10 11.343 10 12.6a.501.501 0 0 1-1 0c0-.958-.358-1.596-.983-2.017C7.359 10.141 6.35 9.9 5 9.9s-2.36.241-3.017.684C1.358 11.005 1 11.643 1 12.601a.501.501 0 0 1-1 0c0-1.258.497-2.221 1.424-2.846C2.319 9.152 3.56 8.9 5 8.9m4.975 0c1.439 0 2.68.252 3.575.855c.927.625 1.425 1.588 1.425 2.846a.5.5 0 0 1-1 0c0-.958-.358-1.596-.984-2.017c-.518-.349-1.253-.57-2.202-.65a4.5 4.5 0 0 0-.87-1.033zM5 1.85a3.151 3.151 0 0 1 0 6.3a3.15 3.15 0 1 1 0-6.3m4.975 0a3.15 3.15 0 0 1 0 6.3c-.524 0-1.016-.13-1.45-.356a4.5 4.5 0 0 0 .534-.852a2.15 2.15 0 1 0 0-3.887a4.5 4.5 0 0 0-.535-.85a3.1 3.1 0 0 1 1.45-.355M5 2.85a2.151 2.151 0 0 0 0 4.3a2.15 2.15 0 0 0 0-4.3" /></svg>,
                                title: "Gestión Colaborativa",
                                desc: "Facilita la comunicación entre usuarios, técnicos y administradores."
                            },
                            {
                                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 16 16"><path fill="#2563EB" fillRule="evenodd" d="M1.5 14H15v-1H2V0H1v13.5l.5.5zM3 11.5v-8l.5-.5h2l.5.5v8l-.5.5h-2l-.5-.5zm2-.5V4H4v7h1zm6-9.5v10l.5.5h2l.5-.5v-10l-.5-.5h-2l-.5.5zm2 .5v9h-1V2h1zm-6 9.5v-6l.5-.5h2l.5.5v6l-.5.5h-2l-.5-.5zm2-.5V6H8v5h1z" clipRule="evenodd" /></svg>,
                                title: "Reportes avanzados",
                                desc: "Análisis detallados y métricas de rendimiento en tiempo real."
                            },
                            {
                                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 256 256" fill="#2563EB"><g id="galaSecure0" fill="none" stroke="#2563EB" strokeDasharray="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="4" strokeOpacity="1" strokeWidth="16"><path id="galaSecure1" d="m 127.99999,239.96468 c 0,0 95.98506,-31.99503 95.98506,-111.98257" /><path id="galaSecure2" d="M 223.98505,127.98211 V 31.997059 c 0,0 -31.99502,-15.997511 -95.98506,-15.997511" /><path id="galaSecure3" d="m 128,239.96468 c 0,0 -95.985056,-31.99503 -95.985056,-111.98257" /><path id="galaSecure4" d="M 32.014944,127.98211 V 31.997059 c 0,0 31.995019,-15.997509 95.985056,-15.997509" /><path id="galaSecure5" d="M 191.99003,63.99208 C 128,111.9846 112.00249,175.97464 112.00249,175.97464 c 0,0 -15.997511,-19.0946 -31.995019,-31.99502" /></g></svg>,
                                title: "Seguro y confiable",
                                desc: "Protección de datos empresariales con los más altos estándares."
                            },
                            {
                                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 432 432"><path fill="#2563EB" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3zm0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50zM224 109v112l96 57l-16 27l-112-68V109h32z" /></svg>,
                                title: "Seguimiento en Real",
                                desc: "Monitorea el estado de cada ticket al instante desde cualquier dispositivo"
                            }
                        ].map((card, i) => (
                            <div key={i} className="flex flex-col gap-4 items-start border border-gray-300 p-6 sm:p-8 w-full rounded-2xl shadow-xl bg-white">
                                <span className="bg-(--color-primary-3) p-3 rounded-xl flex items-center justify-center">
                                    {card.icon}
                                </span>
                                <h2 className="text-start text-base sm:text-lg font-semibold text-gray-800">{card.title}</h2>
                                <p className="text-start text-sm sm:text-base text-gray-600">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section id="funcionamiento" className="bg-(--bg-principal) flex flex-col md:flex-row gap-10 px-4 sm:px-8 py-10 items-center overflow-hidden">
                    <div className="flex flex-col gap-4 w-full md:w-1/2">
                        <span className="bg-(--color-primary-3) p-1 text-xs sm:text-sm rounded-md text-(--color-primary) w-fit">Como funciona</span>
                        <p className="text-lg sm:text-xl font-semibold">Simple, Rápido y Eficiente</p>
                        <ul className="space-y-6">
                            {[
                                { step: 1, title: "Usuario crea un ticket", desc: "Formulario intuitivo con categorías, prioridades y adjuntos" },
                                { step: 2, title: "Asignación automática", desc: "El sistema asigna el ticket al técnico más adecuado" },
                                { step: 3, title: "Seguimiento en tiempo real", desc: "Ambas partes pueden comunicarse y ver el progreso" },
                                { step: 4, title: "Resolución y cierre", desc: "El ticket se cierra una vez resuelto el problema" }
                            ].map((item, i) => (
                                <li key={i} className="flex flex-col">
                                    <div className="flex items-center gap-4">
                                        <span className="w-8 h-8 sm:w-10 sm:h-10 bg-(--color-primary) p-2 rounded-full flex justify-center items-center text-white font-bold">{item.step}</span>
                                        <h2 className="font-bold text-sm sm:text-base">{item.title}</h2>
                                    </div>
                                    <p className="ml-10 sm:ml-14 text-(--color-text) text-xs sm:text-sm">{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                        <img className="w-full max-w-xs sm:max-w-md md:max-w-xl rounded-3xl shadow-2xl object-contain" src="foto-2.jpeg" alt="Ejemplo funcionamiento" />
                    </div>
                </section>
                <section className="min-h-[40vh] flex flex-col justify-center items-center bg-(--color-primary) text-white py-10 px-4 sm:px-8 mt-10">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">¿Listo para transformar tu soporte IT?</h3>
                    <h2 className="text-base sm:text-xl lg:text-2xl max-w-2xl text-center mb-6">Únete a cientos de empresas que ya confían en Solvix para gestionar sus incidencias de manera eficiente.</h2>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
                        <Link to='/auth' className="bg-white text-(--color-primary) px-4 py-2 rounded-md transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">Comienza Gratis</Link>
                        <Link to='/demo' className="px-4 py-2 rounded-md border hover:bg-white hover:text-(--color-primary) w-full sm:w-auto text-center">Agendar Demo</Link>
                    </div>
                </section>
            </main>
            <footer className="bg-(--color-primary-4) text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
                    <div className="flex flex-col md:flex-row md:justify-between gap-8">
                        <div className="flex-1 mb-8 md:mb-0">
                            <div className="flex items-center gap-3">
                                <SolvixLogo size="md" />
                            </div>
                            <p className="mt-4 text-sm text-gray-300 max-w-xs">Sistema de gestión de tickets IT para empresas modernas.</p>
                        </div>
                        <div className="flex-1 flex flex-col sm:flex-row justify-between gap-8">
                            <div>
                                <h4 className="font-semibold mb-3">Producto</h4>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li><a href="#" className="hover:underline">Características</a></li>
                                    <li><a href="#" className="hover:underline">Precios</a></li>
                                    <li><a href="#" className="hover:underline">Integraciones</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">Empresa</h4>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li><a href="#" className="hover:underline">Sobre Nosotros</a></li>
                                    <li><a href="#" className="hover:underline">Blog</a></li>
                                    <li><a href="#" className="hover:underline">Contacto</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">Legal</h4>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li><a href="#" className="hover:underline">Privacidad</a></li>
                                    <li><a href="#" className="hover:underline">Términos</a></li>
                                    <li><a href="#" className="hover:underline">Seguridad</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Solvix. Todos los derechos reservados.</p>
                        <div className="text-sm text-gray-400">Hecho con ❤️ para empresas modernas</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage
