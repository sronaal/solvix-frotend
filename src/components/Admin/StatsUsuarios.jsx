import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { getUsers } from '../../services/AdminApi';

export const StatsUsuarios = () => {

    const [totalUsuarios, setTotalUsuarios] = useState(0);
    const [totalAdministradores, setTotalAdministradores] = useState(0);
    const [totalTecnicos, setTotalTecnicos] = useState(0);
    const [usuariosFinales, setUsuariosFinales] = useState(0);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users_response = await getUsers();
                console.log(users_response.data.data.users);

                setTotalUsuarios(users_response.data.data.users.length)
                

                setTotalAdministradores(users_response.data.data.users.filter(user => user.role == 'admin').length)

                setTotalUsuarios(users_response.data.data.users.filter(user => user.role == 'user').length)

                setTotalTecnicos(users_response.data.data.users.filter(user => user.role == 'technician').length)
            } catch (error) {
                console.error("Error al obtener usuarios:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="flex gap-5 flex-wrap justify-center m-2 p-2">

            <div className="flex items-center h-24 justify-between gap-8 bg-white shadow p-5 rounded-xl">
                <span>
                    <h2 className="text-(--color-text)">Total de Usuarios</h2>
                    <p className="font-semibold">{totalUsuarios}</p>
                </span>
                <span className="bg-[#EFF6FF] p-2 rounded-md">
                    <FaRegUser className="size-6 text-(--color-primary)" />
                </span>
            </div>

            <div className="flex items-center h-24 justify-between gap-8 bg-white shadow p-5 rounded-xl">
                <span>
                    <h2 className="text-(--color-text)">Administradores</h2>
                    <p className="font-semibold">{totalAdministradores}</p>
                </span>
                <span className="bg-[#EFF6FF] p-2 rounded-md">
                    <MdSecurity className="size-6 text-[#9810FA]" />
                </span>
            </div>

            <div className="flex items-center h-24 justify-between gap-8 bg-white shadow p-5 rounded-xl">
                <span>
                    <h2 className="text-(--color-text)">Técnicos</h2>
                    <p className="font-semibold">{totalTecnicos}</p>
                </span>
                <span className="bg-[#EFF6FF] p-2 rounded-md">
                    <GiAutoRepair className="size-6 text-green-400" />
                </span>
            </div>

            <div className="flex items-center h-24 justify-between gap-8 bg-white shadow p-5 rounded-xl">
                <span>
                    <h2 className="text-(--color-text)">Usuarios Finales</h2>
                    <p className="font-semibold">{usuariosFinales}</p>
                </span>
                <span className="bg-[#EFF6FF] p-2 rounded-md">
                    <IoPeople className="size-6 text-[#9810FA]" />
                </span>
            </div>

        </div>
    );
};
