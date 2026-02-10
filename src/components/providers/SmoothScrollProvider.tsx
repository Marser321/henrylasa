"use client";

import { useEffect, useRef, createContext, useContext, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LENIS_CONFIG } from "@/lib/animations";

// Registramos ScrollTrigger una sola vez
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// ─── Context ──────────────────────────────────────────────────
const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
    return useContext(LenisContext);
}

// ─── Provider ─────────────────────────────────────────────────
interface SmoothScrollProviderProps {
    children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Respetar preferencias de accesibilidad
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        // Inicializar Lenis
        const lenis = new Lenis({
            ...LENIS_CONFIG,
        });

        lenisRef.current = lenis;

        // Sincronizar Lenis con GSAP ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);

        // Ticker de GSAP maneja el RAF loop
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Desactivar el RAF interno de Lenis (GSAP lo maneja)
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return (
        <LenisContext.Provider value={lenisRef.current}>
            {children}
        </LenisContext.Provider>
    );
}
