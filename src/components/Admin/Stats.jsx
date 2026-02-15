import React from 'react';
import {
  Users,
  Ticket,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  MoreHorizontal
} from 'lucide-react';

export const Stats = () => {
  const statsData = [
    {
      title: "Total Tickets",
      value: "1,248",
      change: "+12.5%",
      type: "positive",
      icon: Ticket,
      color: "indigo",
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      title: "Tickets Activos",
      value: "156",
      change: "-4.2%",
      type: "negative",
      icon: AlertCircle,
      color: "rose",
      gradient: "from-rose-500 to-orange-500"
    },
    {
      title: "Promedio Cierre",
      value: "2h 45m",
      change: "+8.1%",
      type: "positive",
      icon: Clock,
      color: "emerald",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Técnicos Online",
      value: "12",
      change: "0%",
      type: "neutral",
      icon: Users,
      color: "amber",
      gradient: "from-amber-500 to-orange-400"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-1">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
        >
          {/* Background Decorative Gradient */}
          <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-[0.03] rounded-bl-[80px] group-hover:opacity-[0.06] transition-opacity`} />

          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 group-hover:scale-110 transition-transform duration-300`}>
              <stat.icon size={22} />
            </div>
            <button className="text-slate-300 hover:text-slate-500 transition-colors p-1">
              <MoreHorizontal size={18} />
            </button>
          </div>

          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.title}</p>
            <div className="flex items-end gap-3">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
              <div className={`flex items-center gap-1 mb-1 px-1.5 py-0.5 rounded-lg text-[10px] font-black tracking-wider border ${stat.type === 'positive'
                  ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
                  : stat.type === 'negative'
                    ? 'bg-rose-50 text-rose-600 border-rose-100'
                    : 'bg-slate-50 text-slate-400 border-slate-100'
                }`}>
                <TrendingUp size={10} className={stat.type === 'negative' ? 'rotate-180' : ''} />
                {stat.change}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Stats