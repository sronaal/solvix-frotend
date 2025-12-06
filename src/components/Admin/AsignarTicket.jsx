import { CiSearch } from "react-icons/ci";

export const AsignarTicket = () => {

    return (
        <div className="bg-white shadow-md w-[55%] p-8">
            <h2 className="mb-6">Gestión de Asignaciones</h2>

            <form className="flex gap-4">
                <label className="relative block">
                    <CiSearch className="absolute left-2 top-2 text-gray-700 size-6" />
                    <input type="text" placeholder="Busca por id, usuario, titulo" className="w-80 p-2 border border-gray-200 rounded-md bg-[#F3F3F5] pl-10" />
                </label>

                <label>
                    <select name="" id="" className="w-50 p-2 border border-gray-200 rounded-md bg-[#F3F3F5]">
                        <option value="sin-asignar">Sin Asignar</option>
                        <option value="asignados">Asignados</option>
                        <option value="todos">Todos</option>
                    </select>
                </label>
            </form>
        </div>
    )
}