import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Save, MapPin, Phone, Mail, Globe, Store, Clock } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="space-y-6 pt-4 pb-20 md:py-8 max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-display font-medium text-white">Configuración del Estudio</h1>
                    <p className="text-white/60 text-sm mt-1">
                        Ajusta la información de la carpintería, horarios de taller y preferencias.
                    </p>
                </div>
                <button
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent-gold)] text-black rounded-lg hover:bg-[var(--accent-gold)]/90 transition-colors font-semibold shadow-[0_0_15px_rgba(209,164,88,0.2)] w-full sm:w-auto"
                >
                    <Save className="w-5 h-5" /> Guardar Cambios
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <GlassCard className="p-6">
                        <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
                            <Store className="w-5 h-5 text-[var(--accent-gold)]" /> Información del Negocio
                        </h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm text-white/60">Nombre del Estudio</label>
                                    <input type="text" defaultValue="Lasa Kitchens & Closets" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[var(--accent-gold)] focus:outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-white/60">RUT / Identificación Fiscal</label>
                                    <input type="text" defaultValue="211234560017" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[var(--accent-gold)] focus:outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-white/60">Teléfono Taller</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                                        <input type="tel" defaultValue="+598 99 123 456" className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white focus:border-[var(--accent-gold)] focus:outline-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-white/60">Email de Consultas</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                                        <input type="email" defaultValue="hola@lasakitchens.com" className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white focus:border-[var(--accent-gold)] focus:outline-none" />
                                    </div>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm text-white/60">Showroom / Taller</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                                        <input type="text" defaultValue="Av. Italia 1234, Montevideo, Uruguay" className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white focus:border-[var(--accent-gold)] focus:outline-none" />
                                    </div>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm text-white/60">Sitio Web</label>
                                    <div className="relative">
                                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                                        <input type="url" defaultValue="https://lasakitchens.com" className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white focus:border-[var(--accent-gold)] focus:outline-none" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </GlassCard>
                </div>

                <div className="space-y-6">
                    <GlassCard className="p-6">
                        <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-[var(--accent-gold)]" /> Horarios
                        </h2>
                        <div className="space-y-4">
                            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'].map((day) => (
                                <div key={day} className="flex items-center justify-between text-sm">
                                    <span className="text-white/80 w-24">{day}</span>
                                    <div className="flex items-center gap-2">
                                        <input type="time" defaultValue="10:00" className="bg-white/5 border border-white/10 rounded px-2 py-1 text-white/60" />
                                        <span className="text-white/40">-</span>
                                        <input type="time" defaultValue="20:00" className="bg-white/5 border border-white/10 rounded px-2 py-1 text-white/60" />
                                    </div>
                                </div>
                            ))}
                            <div className="flex items-center justify-between text-sm opacity-50">
                                <span className="text-white/80 w-24">Domingo</span>
                                <span className="text-red-400 font-medium px-4">Cerrado</span>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
}
