"use client";

import React, { useId } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    animate?: boolean;
}

export const Logo = ({ className = "h-12 w-auto", animate = true }: LogoProps) => {
    const id = useId();

    // Unique IDs for clipPaths to prevent conflicts when multiple logos are rendered
    const clip1 = `clippath-1-${id}`;
    const clip2 = `clippath-2-${id}`;
    const clip3 = `clippath-3-${id}`;
    const clip4 = `clippath-4-${id}`;
    const clip5 = `clippath-5-${id}`;
    const clip6 = `clippath-6-${id}`;
    const clip7 = `clippath-7-${id}`;

    // Animation variants
    const drawAnimation: Variants = {
        hidden: { pathLength: 0, strokeOpacity: 0, fillOpacity: 0 },
        visible: (custom: number) => ({
            pathLength: 1,
            strokeOpacity: 1,
            fillOpacity: 1,
            transition: {
                pathLength: { delay: custom * 0.1, type: "tween" as const, duration: 1.5, ease: "easeInOut" as const },
                fillOpacity: { delay: custom * 0.1 + 0.5, duration: 1 },
                strokeOpacity: { delay: custom * 0.1 + 1.5, duration: 0.5 }
            }
        })
    };

    const textFade: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.1 + 1, duration: 0.8, ease: "easeOut" as const }
        })
    };

    return (
        <svg
            id={`lasa-logo-${id}`}
            data-name="Lasa Logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 375 375"
            className={cn("overflow-visible", className)}
        >
            <defs>
                <clipPath id={clip1}>
                    <rect x="78.77" y="313.12" width="225.57" height="26.3" fill="none" />
                </clipPath>
                <clipPath id={clip2}>
                    <rect x="78.77" y="313.12" width="225.75" height="26.25" fill="none" />
                </clipPath>
                <clipPath id={clip3}>
                    <rect x="78.77" y="25.38" width="224.25" height="195.75" fill="none" />
                </clipPath>
                <clipPath id={clip4}>
                    <rect x="190.54" y="25.6" width="112.48" height="138.81" fill="none" />
                </clipPath>
                <clipPath id={clip5}>
                    <rect x="190.54" y="80.28" width="112.48" height="140.36" fill="none" />
                </clipPath>
                <clipPath id={clip6}>
                    <rect x="78.77" y="25.38" width="224.25" height="195.75" fill="none" />
                </clipPath>
                <clipPath id={clip7}>
                    <rect x="0" y="0" width="375" height="375" fill="none" />
                </clipPath>
                <style>
                    {`
                        .logo-text-large { font-family: 'Cinzel', serif; font-size: 89.19px; font-weight: 700; fill: #ffffff; }
                        .logo-text-small { font-family: 'Inter', sans-serif; font-size: 16.99px; font-weight: 700; fill: #000000; letter-spacing: 0.05em; }
                    `}
                </style>
            </defs>

            {/* Background Rect for Kitchen & Closet text */}
            <g clipPath={`url(#${clip1})`}>
                <motion.rect
                    x="78.77" y="313.12" width="225.58" height="26.3"
                    className="fill-[var(--accent-gold)]"
                    initial={animate ? { scaleX: 0, transformOrigin: "center" } : false}
                    animate={animate ? { scaleX: 1 } : false}
                    transition={{ delay: 1.5, duration: 0.8, ease: "circOut" }}
                />
            </g>

            {/* Subtext: Kitchen and Closet */}
            <g clipPath={`url(#${clip2})`}>
                <motion.text className="logo-text-small" transform="translate(83.23 331.87)" custom={5} initial={animate ? "hidden" : "visible"} animate="visible" variants={textFade}>
                    K I T C H E N   A N D   C L O S E T
                </motion.text>
            </g>

            {/* Window Center Logo Mark */}
            <g clipPath={`url(#${clip3})`}>
                {/* Cuadrante 1 */}
                <motion.polyline
                    className="fill-white stroke-white stroke-[1px]"
                    points="187.55 212.51 187.55 190.57 187.41 190.57 165.61 212.51 187.55 212.51"
                    custom={1} initial={animate ? "hidden" : "visible"} animate="visible" variants={drawAnimation}
                />
                <motion.polygon
                    className="fill-[var(--accent-gold)] stroke-[var(--accent-gold)] stroke-[1px]"
                    points="165.61 212.51 187.41 190.57 165.61 190.57 165.61 212.51"
                    custom={1} initial={animate ? "hidden" : "visible"} animate="visible" variants={drawAnimation}
                />
                {/* Cuadrante 2 */}
                <motion.polyline
                    className="fill-[var(--accent-gold)] stroke-[var(--accent-gold)] stroke-[1px]"
                    points="187.55 161.43 165.61 161.43 165.61 183.37 187.55 183.37 187.55 161.43"
                    custom={2} initial={animate ? "hidden" : "visible"} animate="visible" variants={drawAnimation}
                />
                {/* Cuadrante 3 */}
                <motion.polyline
                    className="fill-white stroke-white stroke-[1px]"
                    points="194.4 212.51 216.35 212.51 216.35 190.57 194.4 190.57 194.4 212.51"
                    custom={3} initial={animate ? "hidden" : "visible"} animate="visible" variants={drawAnimation}
                />
                <motion.polygon
                    className="fill-white stroke-white stroke-[1px]"
                    points="194.55 183.37 216.35 183.37 216.35 161.43 194.55 183.37"
                    custom={3} initial={animate ? "hidden" : "visible"} animate="visible" variants={drawAnimation}
                />
                <motion.polyline
                    className="fill-[var(--accent-gold)] stroke-[var(--accent-gold)] stroke-[1px]"
                    points="194.4 161.43 194.4 183.37 194.55 183.37 216.35 161.43 194.4 161.43"
                    custom={4} initial={animate ? "hidden" : "visible"} animate="visible" variants={drawAnimation}
                />
            </g>

            {/* Roof Part Right Top */}
            <g clipPath={`url(#${clip4})`}>
                <motion.polyline
                    className="fill-[var(--accent-gold)] stroke-[var(--accent-gold)] stroke-[2px]"
                    points="272.69 36.42 272.69 98.86 190.98 25.6 190.98 63.8 303.18 164.39 303.18 36.42 272.69 36.42"
                    custom={3} initial={animate ? "hidden" : "visible"} animate="visible" variants={drawAnimation}
                />
            </g>

            {/* Roof Part Right Bottom */}
            <g clipPath={`url(#${clip5})`}>
                <motion.polyline
                    className="fill-white stroke-white stroke-[2px]"
                    points="303.18 182.44 190.98 80.32 190.98 118.52 303.18 220.64 303.18 182.44"
                    custom={4} initial={animate ? "hidden" : "visible"} animate="visible" variants={drawAnimation}
                />
            </g>

            {/* Roof Part Left */}
            <g clipPath={`url(#${clip6})`}>
                <motion.polyline
                    className="fill-[var(--accent-gold)] stroke-[var(--accent-gold)] stroke-[2px]"
                    points="109.26 36.42 109.26 153.58 190.98 80.32 190.98 118.52 78.77 219.12 78.77 36.42 109.26 36.42"
                    custom={1} initial={animate ? "hidden" : "visible"} animate="visible" variants={drawAnimation}
                />
                <motion.polyline
                    className="fill-white stroke-white stroke-[2px]"
                    points="120.42 88.86 120.42 127.06 190.98 63.8 190.98 25.6 120.42 88.86"
                    custom={2} initial={animate ? "hidden" : "visible"} animate="visible" variants={drawAnimation}
                />
            </g>

            {/* Main Text: LASA */}
            <g clipPath={`url(#${clip7})`}>
                {["L", "A", "S", "A"].map((letter, i) => (
                    <motion.text
                        key={i}
                        className="logo-text-large"
                        transform={`translate(${81.5 + i * 53} 288.8)`}
                        custom={i + 2}
                        initial={animate ? "hidden" : "visible"}
                        animate="visible"
                        variants={textFade}
                    >
                        {letter}
                    </motion.text>
                ))}
            </g>
        </svg>
    );
};
