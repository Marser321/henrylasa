import React from "react";

/**
 * Logo SVG de Henry Kitchen & Closet
 * Versión clara para fondo oscuro — blanco con acentos dorados
 */
export const Logo = ({ className = "h-12 w-auto" }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 500 635"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Henry Kitchen and Closet"
        >
            {/* Main Structure — Blanco/Dorado para visibilidad sobre fondo oscuro */}
            <path
                d="M93.5 93.5 L93.5 393.5 L250 237 L406.5 393.5 L406.5 93.5 L250 250 L93.5 93.5 Z"
                fill="rgba(255,255,255,0.9)"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="35"
                strokeLinejoin="round"
            />

            {/* Roof/Chevron — Acento dorado */}
            <path
                d="M93.5 250 L250 93.5 L406.5 250"
                stroke="oklch(0.75 0.12 75)"
                strokeWidth="35"
                strokeLinecap="square"
                fill="none"
            />

            {/* Window pane — Tonos blancos y dorados */}
            <rect x="210" y="270" width="80" height="80" fill="rgba(255,255,255,0.85)" />
            <rect x="210" y="270" width="35" height="35" fill="oklch(0.75 0.12 75)" />
            <rect x="255" y="270" width="35" height="35" fill="rgba(255,255,255,0.7)" />
            <rect x="210" y="315" width="35" height="35" fill="rgba(255,255,255,0.7)" />
            <rect x="255" y="315" width="35" height="35" fill="rgba(255,255,255,0.5)" />

            {/* Text: HENRY (cambiado de LASA) */}
            <text
                x="250"
                y="500"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontWeight="bold"
                fontSize="120"
                fill="#ffffff"
                letterSpacing="8"
            >
                HENRY
            </text>

            {/* Subtext Background — Dorado */}
            <rect x="40" y="530" width="420" height="50" fill="oklch(0.75 0.12 75)" rx="2" />

            {/* Subtext: KITCHEN & CLOSET */}
            <text
                x="250"
                y="565"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontWeight="bold"
                fontSize="32"
                fill="#0a0a0a"
                letterSpacing="2"
            >
                KITCHEN &amp; CLOSET
            </text>
        </svg>
    );
};
