import React from 'react'
import { PieChart, BarChart2, MoreVertical } from 'lucide-react'

export const DataTickets = () => {
  return (
    <div className='flex flex-col lg:flex-row p-1 gap-6 mt-6'>
      <div className='flex-1 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] rounded-[32px] p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 group'>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
              <PieChart size={20} />
            </div>
            <h3 className="text-lg font-black text-slate-800 tracking-tight">Tickets por Estado</h3>
          </div>
          <button className="text-slate-300 hover:text-slate-500 transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>

        <div className="h-64 flex flex-col items-center justify-center bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 group-hover:bg-white group-hover:border-indigo-100 transition-all">
          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-300 mb-3">
            <PieChart size={24} />
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Visualización de Datos</p>
        </div>
      </div>

      <div className='flex-1 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] rounded-[32px] p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 group'>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-violet-50 text-violet-600">
              <BarChart2 size={20} />
            </div>
            <h3 className="text-lg font-black text-slate-800 tracking-tight">Carga por Técnico</h3>
          </div>
          <button className="text-slate-300 hover:text-slate-500 transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>

        <div className="h-64 flex flex-col items-center justify-center bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 group-hover:bg-white group-hover:border-violet-100 transition-all font-bold">
          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-300 mb-3">
            <BarChart2 size={24} />
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Estadísticas por Categoría</p>
        </div>
      </div>

    </div>
  )
}

