import React from 'react'
import TicketsStats from '../components/Admin/TicketsStats'
import { AsignarTicket } from '../components/Admin/AsignarTicket'
import TecnicosDisponibles from '../components/Admin/TecnicosDisponibles'

export const AsignacionTicketPage = () => {
  return (
    <div className='py-2'>
      <TicketsStats />
      <div className='flex justify-center items-center gap-4 mt-4 flex-col md:flex-row'>
         <AsignarTicket/>
         <TecnicosDisponibles/>
      </div>


    </div>
  )
}


