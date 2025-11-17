import React from 'react'

const Header = ({ title, subtitle, onToggleSidebar }) => {
  return (
    <div className='flex justify-between bg-white w-full p-8'>



      <div className='flex items-center gap-5'>
        <button onClick={onToggleSidebar} className='lg:hidden cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32"><path fill="none" stroke="#2563EB" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h22M5 16h22M5 24h22" /></svg>
        </button>
        <span>
          <h1 className='text-2xl text-[#2563EB]'>{title}</h1>
          <p className='text-sm text-gray-500'>{subtitle}</p>
        </span>
      </div>
      <div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2563EB] text-white font-semibold hover:cursor-pointer">
          RS
        </button>


      </div>


    </div>
  )
}

export default Header