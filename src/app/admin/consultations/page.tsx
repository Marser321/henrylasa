import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Calendar as CalendarIcon, Clock, User, Hammer, Plus, Filter, MapPin } from "lucide-react";

export default function ConsultationsPage() {
    // Mock data for carpentry consultations (site visits)
    const consultations = [
        { id: 1, customer: "Juan Pérez", project: "Cocina Americana", time: "10:00 AM", expert: "Roberto Lasa", status: "Confirmada", location: "Punta Carretas" },
        { id: 2, customer: "Martín Gómez", project: "Vestidor Principal", time: "11:30 AM", expert: "Sebastián", status: "Pendiente", location: "Malvín" },
        { id: 3, customer: "Lucas Silva", project: "Revestimiento Living", time: "02:00 PM", expert: "Roberto Lasa", status: "Completada", location: "Carrasco" },
        { id: 4, customer: "Andrés Rodríguez", project: "Mueble de Baño", time: "04:15 PM", expert: "Sebastián", status: "Confirmada", location: "Centro" },
    ];

    return (
        <div className="space-y-6 pt-4 pb-20 md:py-8 max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-display font-medium text-white">Consultas y Visitas</h1>
                    <p className="text-white/60 text-sm mt-1">
                        Agenda de mediciones técnicas y consultas de diseño en obra.
                    </p>
                </div>
                <div className="flex w-full sm:w-auto gap-4">
                    <button className="flex items-center justify-center p-3 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10" title="Filtrar">
                        <Filter className="w-5 h-5" />
                    </button>
                    <button
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent-gold)] text-black rounded-lg hover:bg-[var(--accent-gold)]/90 transition-colors font-semibold shadow-[0_0_15px_rgba(209,164,88,0.2)]"
                    >
                        <Plus className="w-5 h-5" /> Nueva Visita
                    </button>
                </div>
            </div>

            <GlassCard className="p-0 overflow-hidden">
                <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
                    <h2 className="text-lg font-medium text-white">Agenda: Hoy, {new Date().toLocaleDateString('es-UY', { weekday: 'long', day: 'numeric', month: 'long' })}</h2>
                    <div className="flex items-center gap-2 text-sm text-[var(--accent-gold)] font-medium">
                        <CalendarIcon className="w-4 h-4" /> Seleccionar Fecha
                    </div>
                </div>

                <div className="divide-y divide-white/5">
                    {consultations.map((apt) => (
                        <div key={apt.id} className="p-4 md:p-6 hover:bg-white/5 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-start md:items-center gap-4">
                                <div className="w-16 text-center shrink-0">
                                    <p className="text-lg font-display text-white">{apt.time.split(' ')[0]}</p>
                                    <p className="text-xs text-[var(--accent-gold)] font-medium">{apt.time.split(' ')[1]}</p>
                                </div>
                                <div className="w-px h-12 bg-white/10 hidden md:block"></div>
                                <div className="pl-0 md:pl-2">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-lg font-medium text-white">{apt.customer}</h3>
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold ${apt.status === 'Confirmada' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                                            apt.status === 'Pendiente' ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30' :
                                                'bg-white/10 text-white/50 border border-white/20'
                                            }`}>
                                            {apt.status}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/60">
                                        <span className="flex items-center gap-1.5"><Hammer className="w-4 h-4 text-[var(--accent-gold)]" /> {apt.project}</span>
                                        <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> Experto: {apt.expert}</span>
                                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {apt.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex md:flex-col gap-2 w-full md:w-auto mt-2 md:mt-0">
                                <button className="flex-1 md:flex-none px-4 py-2 text-sm bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/5">
                                    Gestionar
                                </button>
                                {apt.status === 'Pendiente' && (
                                    <button className="flex-1 md:flex-none px-4 py-2 text-sm bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg transition-colors border border-green-500/20">
                                        Confirmar
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>

            <p className="text-center text-white/30 text-sm mt-6 mb-8">
                Pronto: Mapas de ruta para instaladores y sincronización con Google Calendar.
            </p>
        </div>
    );
}
