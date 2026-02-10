"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

/**
 * Header v3 — Luxury Auto-Hide con smooth scroll via Lenis
 * - Se oculta al scrollear hacia abajo
 * - Aparece al scrollear hacia arriba
 * - Backdrop blur dinámico
 * - Menú mobile hamburguesa animado
 * - Navegación por anchors funcional con scroll suave
 */
export function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lastScrollY = useRef(0);
    const threshold = 100; // px antes de ocultar

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            // ¿Hemos scrolleado lo suficiente para mostrar fondo?
            setIsScrolled(currentY > 50);

            // Auto-hide lógica
            if (currentY > threshold) {
                if (currentY > lastScrollY.current + 5) {
                    // Scrolleando hacia abajo → ocultar
                    setIsVisible(false);
                    setIsMobileMenuOpen(false);
                } else if (currentY < lastScrollY.current - 5) {
                    // Scrolleando hacia arriba → mostrar
                    setIsVisible(true);
                }
            } else {
                // Estamos arriba del todo → siempre visible
                setIsVisible(true);
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /**
     * scrollToSection — Implementación de scroll suave compatible con Lenis
     * Usa scrollIntoView nativo como fallback si Lenis no está activo
     */
    const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const targetEl = document.getElementById(targetId);

        if (!targetEl) return;

        // Cerrar menú mobile si está abierto
        setIsMobileMenuOpen(false);

        // Offset para el header fijo
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }, []);

    const navLinks = [
        { href: "#kitchens", label: "Kitchens" },
        { href: "#closets", label: "Closets" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 z-50 w-full transition-all duration-500",
                    "ease-[var(--ease-luxury)]",
                    isVisible
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-full opacity-0",
                    isScrolled
                        ? "border-b border-white/10 bg-black/60 backdrop-blur-xl"
                        : "bg-transparent"
                )}
            >
                <div className="container mx-auto flex h-20 items-center justify-between px-6">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 transition-opacity hover:opacity-80"
                    >
                        <Logo className="h-14 w-auto" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={cn(
                                    "text-xs font-medium tracking-[0.15em] uppercase cursor-pointer",
                                    "text-white/60 hover:text-white transition-colors duration-300"
                                )}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, "#contact")}
                            className={cn(
                                "px-6 py-2.5 text-xs font-medium tracking-[0.1em] uppercase cursor-pointer",
                                "border border-white/20 rounded-sm",
                                "text-white/80 hover:text-black hover:bg-white",
                                "transition-all duration-300 ease-[var(--ease-luxury)]"
                            )}
                        >
                            Get a Quote
                        </a>
                    </div>

                    {/* Mobile Menu Button — Animated hamburger lines */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-white/60 hover:text-white relative w-8 h-8"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={cn(
                                "absolute left-1 w-6 h-px bg-current transition-all duration-300",
                                isMobileMenuOpen
                                    ? "top-1/2 rotate-45"
                                    : "top-[10px]"
                            )}
                        />
                        <span
                            className={cn(
                                "absolute left-1 top-1/2 w-6 h-px bg-current transition-all duration-300",
                                isMobileMenuOpen ? "opacity-0" : "opacity-100"
                            )}
                        />
                        <span
                            className={cn(
                                "absolute left-1 w-6 h-px bg-current transition-all duration-300",
                                isMobileMenuOpen
                                    ? "top-1/2 -rotate-45"
                                    : "bottom-[10px]"
                            )}
                        />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8",
                    "transition-all duration-500 ease-[var(--ease-dramatic)] md:hidden",
                    isMobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
            >
                {navLinks.map((link, i) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className={cn(
                            "text-2xl font-light tracking-[0.2em] uppercase text-white/80 hover:text-white cursor-pointer",
                            "transition-all duration-300",
                            isMobileMenuOpen
                                ? "translate-y-0 opacity-100"
                                : "translate-y-4 opacity-0"
                        )}
                        style={{
                            transitionDelay: isMobileMenuOpen ? `${i * 80}ms` : "0ms",
                        }}
                    >
                        {link.label}
                    </a>
                ))}

                <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, "#contact")}
                    className={cn(
                        "mt-4 px-8 py-3 border border-white/30 text-sm tracking-[0.15em] uppercase cursor-pointer",
                        "text-white hover:bg-white hover:text-black transition-all duration-300"
                    )}
                >
                    Get a Quote
                </a>
            </div>
        </>
    );
}
