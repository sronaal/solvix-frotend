import React from 'react'

const Header = ({ title, subtitle, onToggleSidebar }) => {
  return (
    <header className='sticky top-0 z-30 flex justify-between items-center bg-white/80 backdrop-blur-md px-8 py-5 border-b border-gray-100 transition-all duration-300'>

      <div className='flex items-center gap-4'>
        <button onClick={onToggleSidebar} className='lg:hidden p-2 rounded-lg hover:bg-gray-100 text-(--color-primary) transition-colors'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>

        <div>
          <h1 className='text-2xl font-bold text-gray-800 tracking-tight'>{title}</h1>
          <p className='text-sm text-gray-500 font-medium'>{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 text-white font-bold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105">
          RS
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
        </button>
      </div>

    </header>
  )
}

export default Header