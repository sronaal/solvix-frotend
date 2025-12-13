import React from 'react'

export const DataTickets = () => {
  return (
    <div className='flex p-8 gap-6'>
      <div className='w-[55%] h-64 bg-white shadow rounded-md p-6'>
        <span>Tickets por estado</span>
      </div>

       <div className='w-[45%] h-64 bg-white shadow rounded-md p-6'>
        Tickets por categoría
      </div>

    </div>
  )
}
