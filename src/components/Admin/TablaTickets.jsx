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



    const [sortConfig, setSortConfig] = useState({ key: 'numero', direction: 'desc' });
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const sortedTickets = useMemo(() => {
        let sortableTickets = [...tickets];
        if (sortConfig.key !== null) {
            sortableTickets.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableTickets;
    }, [tickets, sortConfig]);


    useEffect(() => {

        const fetchTickets = async () => {
            try {
                const response = await getTickets();
                setTickets(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchTickets();
    })

    const filteredTickets = useMemo(() => {
        return sortedTickets.filter(ticket =>
            ticket.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ticket.solicitante.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ticket.numero.toString().includes(searchTerm)
        );
    }, [sortedTickets, searchTerm]);

    const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);
    const paginatedTickets = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredTickets.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredTickets, currentPage]);

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const getSortIcon = (key) => {
        if (sortConfig.key !== key) return <ArrowUpDown size={14} className="ml-1 text-gray-400" />;
        return sortConfig.direction === 'asc'
            ? <ArrowUp size={14} className="ml-1 text-primary-500" />
            : <ArrowDown size={14} className="ml-1 text-primary-500" />;
    };

    const getStatusStyle = (estado) => {
        switch (estado) {
            case 'ACTIVO': return 'bg-green-100 text-green-700 border-green-200';
            case 'PENDIENTE': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            case 'CERRADO': return 'bg-gray-100 text-gray-700 border-gray-200';
            default: return 'bg-blue-100 text-blue-700 border-blue-200';
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return '-';
        return new Date(dateString).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
            {/* Header / Table Actions */}
            <div className="p-4 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gray-50/50">
                <h2 className="text-lg font-semibold text-gray-800">Listado de Tickets</h2>

                <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar por título, ID o solicitante..."
                        className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                </div>
            </div>

            {/* Table Container */}
            <div className="flex-1 overflow-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="sticky top-0 bg-white z-10">
                        <tr className="border-b border-gray-200">
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => requestSort('numero')}>
                                <div className="flex items-center">#{getSortIcon('numero')}</div>
                            </th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => requestSort('titulo')}>
                                <div className="flex items-center">Título {getSortIcon('titulo')}</div>
                            </th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => requestSort('solicitante')}>
                                <div className="flex items-center">Solicitante {getSortIcon('solicitante')}</div>
                            </th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => requestSort('tecnico')}>
                                <div className="flex items-center">Técnico {getSortIcon('tecnico')}</div>
                            </th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => requestSort('estado')}>
                                <div className="flex items-center">Estado {getSortIcon('estado')}</div>
                            </th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => requestSort('fecha_creado')}>
                                <div className="flex items-center">Fecha {getSortIcon('fecha_creado')}</div>
                            </th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {paginatedTickets.length > 0 ? (
                            paginatedTickets.map((ticket) => (
                                <tr key={ticket.id} className="hover:bg-gray-50/80 transition-colors group">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-600">{ticket.numero}</td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-semibold text-gray-800 line-clamp-1">{ticket.titulo}</div>
                                        <div className="text-xs text-gray-400 line-clamp-1">{ticket.descripcion}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{ticket.solicitante}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{ticket.tecnico || 'Sin asignar'}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getStatusStyle(ticket.estado)}`}>
                                            {ticket.estado}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{formatDate(ticket.fecha_creado)}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 hover:bg-gray-200 rounded-md text-gray-500 transition-colors" title="Ver detalles">
                                                <Eye size={18} />
                                            </button>
                                            <button className="p-1.5 hover:bg-gray-200 rounded-md text-gray-500 transition-colors" title="Editar">
                                                <Edit2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="px-6 py-12 text-center text-gray-400">
                                    No se encontraron tickets que coincidan con la búsqueda.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer */}
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/30 flex items-center justify-between">
                <div className="text-xs text-gray-500">
                    Mostrando <span className="font-semibold">{paginatedTickets.length}</span> de <span className="font-semibold">{filteredTickets.length}</span> tickets
                </div>

                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`p-1.5 rounded-md transition-all ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100 hover:text-primary-600'}`}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <div className="flex items-center px-2">
                        <span className="text-sm font-medium text-gray-700">{currentPage}</span>
                        <span className="text-sm text-gray-400 mx-1">/</span>
                        <span className="text-sm text-gray-400">{totalPages || 1}</span>
                    </div>

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages || totalPages === 0}
                        className={`p-1.5 rounded-md transition-all ${currentPage === totalPages || totalPages === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100 hover:text-primary-600'}`}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};
