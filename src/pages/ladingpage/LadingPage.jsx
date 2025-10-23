import { useState } from "react"
import { SolvixLogo } from "../../components/SolvixLogo"
import { Link } from "react-router-dom"


const LadingPage = () => {

    const [open, setOpen] = useState(false)

    const links = [
        { name: "Caracteristicas", href: "#" },
        { name: "Beneficios", href: "#" },
        { name: "Testimonios", href: "#" },
        { name: "Precio", href: "#" },
    ]

    return (
        <>
            <nav className="bg-[#FDFEFF] text-gray-500 px-8 py-4 shadow-md fixed w-full">
                <div className="flex justify-between items-center">
                    <SolvixLogo />

                    { /* Solo movil */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden focus:outline-none cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32"><path fill="none" stroke="#2563EB" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h22M5 16h22M5 24h22" /></svg>
                    </button>

                    <ul className="hidden md:flex items-center space-x-8 ml-auto ">
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
                        <Link to="/auth" className="bg-(--color-primary)  hover:bg-(--color-primary-2) text-white px-4 py-2 rounded-md transition-colors flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="#ffffff" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z"/></svg>
                            Comenzar</Link>
                    </ul>
                </div>
                
                {/* Menu movil */}
                {
                    open && (
                        <ul className="md:hidden mt-4 space-y-3">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="block hover:text-(--color-primary-2) transition-colors">{link.name}</a>
                                </li>
                            ))}
                            <Link className="block text-center bg-(--color-primary) text-white py-2 rounded-md w-full transition-colors hover:opacity-90">Comenzar</Link>
                        </ul>
                    )
                }
            </nav>

            <section className="bg-(--bg-principal) h-screen">

            </section>
        </>
    )
}

export default LadingPage