import React, { useState } from 'react'
import { CiCircleAlert } from "react-icons/ci";
import { LuTicketCheck } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";


const TicketsStats = () => {

    const [sinAsignar, setSinAsignar] = useState(0);
    const [asignados, setAsignados] = useState(0); 
    const [enProgreso, setEnProgreso] = useState(0);
    const [tecnicosDisponibles, setTecnicosDisponibles] = useState(0);

    return (
        <div className='flex gap-5 flex-wrap justify-center m-2 p-2'>
            <div className='flex items-center h-24 justify-between gap-8 bg-white shadow p-5 rounded-xl'>
                <span>
                    <h2 className='text-(--color-text)'>Sin Asignar</h2>
                    <p className='font-semibold'>{sinAsignar}</p>
                </span>
                <span className='bg-[#FEF2F2] p-2 rounded-md'>
                    <CiCircleAlert className='size-8 text-[#E7000B]'/>
                </span>
            </div>
             <div className='flex items-center h-24 justify-between gap-8 bg-white shadow p-5 rounded-xl'>
                <span>
                    <h2 className='text-(--color-text)'>Asignados</h2>
                    <p className='font-semibold'>{asignados}</p>
                </span>
                <div className='bg-[#EFF4FF] p-2 rounded-md'>
                    <LuTicketCheck className='size-8 text-[#4E85FD]'/>
                </div>
            </div>
             <div className='flex items-center h-24 justify-between gap-8 bg-white shadow p-5 rounded-xl'>
                <span>
                    <h2 className='text-(--color-text)'>Técnicos Disponibles</h2>
                    <p className='font-semibold'>{tecnicosDisponibles}</p>
                </span>
                <span className='bg-[#EFF6FF] p-2 rounded-md'>
                    <LuUsers className='size-8 text-green-500'/>
                </span>
            </div>
             <div className='flex items-center h-24 justify-between gap-8 bg-white shadow p-5 rounded-xl'>
                <span>
                    <h2 className='text-(--color-text)'>En Proceso</h2>
                    <p className='font-semibold'>{enProgreso}</p>
                </span>
                <span className='bg-[#EFF6FF] p-2 rounded-md'>
                    <IoTimeOutline className='size-8 text-yellow-500'/>
                </span>
            </div>
        </div>
    )
}

export default TicketsStats
