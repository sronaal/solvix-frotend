import React from 'react'
import { Menu, Bell, Search, Settings } from 'lucide-react'

const Header = ({ title, subtitle, onToggleSidebar }) => {
  return (
    <header className='sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-slate-100/80 px-8 py-5 flex items-center justify-between'>

      <div className='flex items-center gap-6'>
        <button
          onClick={onToggleSidebar}
          className='lg:hidden p-2.5 rounded-xl bg-slate-50 text-indigo-600 hover:bg-indigo-50 transition-colors active:scale-90'
        >
          <Menu size={20} />
        </button>

        <div className="flex flex-col">
          <h1 className='text-xl lg:text-2xl font-extrabold text-slate-800 tracking-tight leading-none'>{title}</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
            <p className='text-[11px] font-bold text-slate-400 uppercase tracking-widest'>{subtitle}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden md:flex p-2.5 text-slate-400 hover:bg-slate-50 hover:text-slate-600 rounded-xl transition-all">
          <Search size={20} />
        </button>
        <button className="relative p-2.5 text-slate-400 hover:bg-slate-50 hover:text-slate-600 rounded-xl transition-all">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 border-2 border-white rounded-full"></span>
        </button>
        <div className="w-px h-6 bg-slate-100 mx-2 hidden sm:block"></div>

        <button className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-2xl hover:bg-slate-50 transition-all group">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-xs font-bold text-slate-700 leading-none">Ronal Solvix</span>
            <span className="text-[10px] font-bold text-indigo-500 mt-0.5">Admin</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 p-[2px]">
            <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center text-sm font-black text-indigo-600 tracking-tighter shadow-inner">
              RS
            </div>
          </div>
        </button>
      </div>

    </header>
  )
}

export default Header
