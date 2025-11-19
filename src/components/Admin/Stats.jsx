import React, { useState } from 'react'
import { LuTicket } from "react-icons/lu";
import { MdOutlineAccessTime } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

const Stats = () => {

  const [totalTickets, setTotalTicket] = useState(100)
  const [enProceso, setEnProceso] = useState(20)
  const [resueltos, setResueltos] = useState(70)
  const [pendientes, setPendientes] = useState(10)


  return (
    <div className='flex gap-5 flex-wrap justify-center m-2 p-2'>
      <div className='flex items-center justify-between gap-5 bg-white shadow w-52 p-5 rounded-xl'>
        <span>
          <h2 className='text-(--color-text-2)'>Ticket Totales</h2>
          <p className='font-semibold'>{totalTickets}</p>
        </span>
        <span className='bg-(--color-primary-5) p-2 rounded-md'>
          <LuTicket className='size-6 text-(--color-primary)' />
        </span>

      </div>

       <div className='flex items-center justify-between gap-5 bg-white shadow w-52 p-5 rounded-xl'>
        <span>
          <h2 className='text-(--color-text-2)'>En Proceso</h2>
          <p className='font-semibold'>{ enProceso }</p>
        </span>
        <span className='bg-[#FFF7ED] p-2 rounded-md'>
          <MdOutlineAccessTime className='size-6 text-[#F54C03]' />
        </span>
      </div>

       <div className='flex items-center justify-between gap-5 bg-white shadow w-52 p-5 rounded-xl'>
        <span>
          <h2 className='text-(--color-text-2)'>Resueltos</h2>
          <p className='font-semibold'>{ resueltos }</p>
        </span>
        <span className='bg-[#F8FAFC] p-2 rounded-md'>
          <GiConfirmed className='size-6 text-green-600' />
        </span>
      </div>

             <div className='flex items-center justify-between gap-5 bg-white shadow w-52 p-5 rounded-xl'>
        <span>
          <h2 className='text-(--color-text-2)'>Pendientes</h2>
          <p className='font-semibold'>{ pendientes }</p>
        </span>
        <span className='bg-[#FEF2F2] p-2 rounded-md'>
          <GiConfirmed className='size-6 text-red-600' />
        </span>
      </div>
     


      </div>


    
    )
    
  
  }

export default Stats