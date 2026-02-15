import React, { useState, useMemo, useEffect } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    ArrowUpDown,
    ArrowUp,
    ArrowDown,
    Search,
    MoreVertical,
    Eye,
    Edit2
} from 'lucide-react';
import { getTickets } from '../../services/AdminApi'


export const TablaTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);

    const [sortConfig, setSortConfig] = useState({ key: 'numero', direction: 'desc' });
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        const fetchTickets = async () => {
            setLoading(true);
            try {
                const response = await getTickets();
                setTickets(response.data || []);
            } catch (error) {
                console.error("Error fetching tickets:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTickets();
    }, []); // Added dependency array to fix infinite loop

    const sortedTickets = useMemo(() => {
        let sortableTickets = [...tickets];
        if (sortConfig.key !== null) {
            sortableTickets.sort((a, b) => {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];

                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return sortableTickets;
    }, [tickets, sortConfig]);

    const filteredTickets = useMemo(() => {
        return sortedTickets.filter(ticket =>
            ticket.titulo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ticket.solicitante?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ticket.numero?.toString().includes(searchTerm)
        );
    }, [sortedTickets, searchTerm]);

    const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);

    // Safety check for current page if filters change the total pages
    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(totalPages);
        } else if (totalPages === 0) {
            setCurrentPage(1);
        }
    }, [filteredTickets.length, totalPages, currentPage]);

    const paginatedTickets = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredTickets.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredTickets, currentPage, itemsPerPage]);

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const getSortIcon = (key) => {
        if (sortConfig.key !== key) return <ArrowUpDown size={14} className="ml-1 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />;
        return sortConfig.direction === 'asc'
            ? <ArrowUp size={14} className="ml-1 text-blue-600" />
            : <ArrowDown size={14} className="ml-1 text-blue-600" />;
    };

    const getStatusStyle = (estado) => {
        switch (estado?.toUpperCase()) {
            case 'ACTIVO': return 'bg-emerald-50 text-emerald-700 border-emerald-100 shadow-sm';
            case 'PENDIENTE': return 'bg-amber-50 text-amber-700 border-amber-100 shadow-sm';
            case 'CERRADO': return 'bg-slate-50 text-slate-600 border-slate-100 shadow-sm';
            default: return 'bg-blue-50 text-blue-700 border-blue-100 shadow-sm';
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return '-';
        try {
            return new Date(dateString).toLocaleDateString('es-ES', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (e) {
            return dateString;
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col animate-in fade-in duration-500">
            {/* Header / Table Actions */}
            <div className="px-6 py-5 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/50 backdrop-blur-sm">
                <div>
                    <h2 className="text-xl font-bold text-slate-800">Panel de Tickets</h2>
                    <p className="text-sm text-slate-500 mt-0.5">Gestión y seguimiento de incidencias</p>
                </div>

                <div className="relative w-full md:w-80 group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="ID, título o solicitante..."
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all outline-none"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                </div>
            </div>

            {/* Table Container */}
            <div className="flex-1 overflow-x-auto overflow-y-auto custom-scrollbar">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead className="sticky top-0 bg-white/95 backdrop-blur-md z-10">
                        <tr className="border-b border-slate-200">
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-widest cursor-pointer hover:text-slate-800 transition-colors group select-none" onClick={() => requestSort('numero')}>
                                <div className="flex items-center">#{getSortIcon('numero')}</div>
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-widest cursor-pointer hover:text-slate-800 transition-colors group select-none" onClick={() => requestSort('titulo')}>
                                <div className="flex items-center">Detalle Ticket {getSortIcon('titulo')}</div>
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-widest cursor-pointer hover:text-slate-800 transition-colors group select-none" onClick={() => requestSort('solicitante')}>
                                <div className="flex items-center">Solicitante {getSortIcon('solicitante')}</div>
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-widest cursor-pointer hover:text-slate-800 transition-colors group select-none" onClick={() => requestSort('tecnico')}>
                                <div className="flex items-center">Técnico {getSortIcon('tecnico')}</div>
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-widest cursor-pointer hover:text-slate-800 transition-colors group select-none" onClick={() => requestSort('estado')}>
                                <div className="flex items-center">Estado {getSortIcon('estado')}</div>
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-widest cursor-pointer hover:text-slate-800 transition-colors group select-none" onClick={() => requestSort('fecha_creado')}>
                                <div className="flex items-center">Fecha {getSortIcon('fecha_creado')}</div>
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {loading ? (
                            Array.from({ length: 5 }).map((_, i) => (
                                <tr key={i} className="animate-pulse">
                                    <td colSpan="7" className="px-6 py-4"><div className="h-10 bg-slate-100 rounded-lg w-full"></div></td>
                                </tr>
                            ))
                        ) : paginatedTickets.length > 0 ? (
                            paginatedTickets.map((ticket) => (
                                <tr key={ticket.id} className="hover:bg-blue-50/30 transition-all duration-300 group">
                                    <td className="px-6 py-5 text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors">{ticket.numero}</td>
                                    <td className="px-6 py-5 max-w-xs">
                                        <div className="text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-blue-900 transition-colors">{ticket.titulo}</div>
                                        <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{ticket.descripcion}</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 border border-white">
                                                {ticket.solicitante?.charAt(0)}
                                            </div>
                                            <span className="text-sm font-medium text-slate-600">{ticket.solicitante}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-slate-600 font-medium">
                                        {ticket.tecnico ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                                {ticket.tecnico}
                                            </div>
                                        ) : (
                                            <span className="text-slate-300 italic text-xs font-normal">Sin asignar</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={`px-3 py-1 rounded-lg text-[10px] font-black tracking-widest border uppercase inline-block ${getStatusStyle(ticket.estado)}`}>
                                            {ticket.estado}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-[11px] font-medium text-slate-500 whitespace-nowrap">{formatDate(ticket.fecha_creado)}</td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-1.5">
                                            <button className="p-2 hover:bg-blue-100 hover:text-blue-600 rounded-xl text-slate-400 transition-all duration-300 transform active:scale-95" title="Ver detalles">
                                                <Eye size={16} />
                                            </button>
                                            <button className="p-2 hover:bg-slate-100 hover:text-slate-800 rounded-xl text-slate-400 transition-all duration-300 transform active:scale-95" title="Editar">
                                                <Edit2 size={15} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="px-6 py-20 text-center">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
                                            <Search className="text-slate-300" size={24} />
                                        </div>
                                        <p className="text-sm text-slate-400 font-medium">No se encontraron resultados para su búsqueda</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer */}
            <div className="px-6 py-5 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-500 font-medium">
                    Mostrando <span className="text-blue-600 font-bold">{paginatedTickets.length}</span> de <span className="text-slate-800 font-bold">{filteredTickets.length}</span> tickets
                </div>

                <div className="flex items-center gap-2 bg-white p-1 rounded-2xl border border-slate-200 shadow-sm">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1 || loading}
                        className={`p-2 rounded-xl transition-all duration-300 ${currentPage === 1 || loading ? 'text-slate-200 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600 active:scale-90'}`}
                        aria-label="Página anterior"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <div className="flex items-center gap-1">
                        {Array.from({ length: totalPages }).map((_, i) => {
                            const page = i + 1;
                            // Only show neighbors and edges if there are many pages
                            if (
                                totalPages <= 7 ||
                                page === 1 ||
                                page === totalPages ||
                                (page >= currentPage - 1 && page <= currentPage + 1)
                            ) {
                                return (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-8 h-8 rounded-xl text-xs font-bold transition-all duration-300 transform ${currentPage === page ? 'bg-blue-600 text-white shadow-md shadow-blue-200 scale-105' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800 active:scale-95'}`}
                                    >
                                        {page}
                                    </button>
                                );
                            } else if (
                                page === currentPage - 2 ||
                                page === currentPage + 2
                            ) {
                                return <span key={page} className="text-slate-300 px-1">...</span>;
                            }
                            return null;
                        })}
                    </div>

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages || totalPages === 0 || loading}
                        className={`p-2 rounded-xl transition-all duration-300 ${currentPage === totalPages || totalPages === 0 || loading ? 'text-slate-200 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600 active:scale-90'}`}
                        aria-label="Página siguiente"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};
