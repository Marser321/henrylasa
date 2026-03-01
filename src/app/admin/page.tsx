"use client";

import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
    return (
        <div className="p-4 md:p-8 space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-display font-medium text-white mb-2 tracking-tight">Bienvenido, Admin</h1>
                    <p className="text-white/50">Resumen general de Lasa Kitchens & Closets</p>
                </div>
                <Link href="/admin/consultations" className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-gold)] text-black font-semibold hover:scale-105 transition-transform w-full sm:w-auto justify-center">
                    <Plus className="w-5 h-5" /> Nueva Consulta
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard className="p-6 border-white/5">
                    <h3 className="text-white/40 uppercase tracking-widest text-xs mb-2">Proyectos Activos</h3>
                    <p className="text-4xl font-light text-white">0</p>
                </GlassCard>
                <GlassCard className="p-6 border-white/5">
                    <h3 className="text-white/40 uppercase tracking-widest text-xs mb-2">Facturado Mes</h3>
                    <p className="text-4xl font-light text-[var(--accent-gold)]">$0.00</p>
                </GlassCard>
                <GlassCard className="p-6 border-white/5">
                    <h3 className="text-white/40 uppercase tracking-widest text-xs mb-2">Clientes Recientes</h3>
                    <p className="text-4xl font-light text-white">0</p>
                </GlassCard>
            </div>

            <GlassCard className="p-8 border-white/5 min-h-[400px] flex items-center justify-center">
                <p className="text-white/30 text-center">Conectá la base de datos (InsForge) para ver los datos reales en esta vista.</p>
            </GlassCard>
        </div>
    );
}
