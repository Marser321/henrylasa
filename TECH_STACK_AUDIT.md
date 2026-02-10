# 🔍 TECH STACK AUDIT — Henry Kitchen & Closet

> Fecha: 2026-02-10 | Fase: Phase 1 — Planning & Architecture

---

## 📦 Estado Actual de Dependencias

### ✅ Instaladas y Correctas

| Paquete | Versión | Propósito | Estado |
|---|---|---|---|
| `next` | 16.1.6 | Framework principal (App Router) | ✅ Actualizado |
| `react` / `react-dom` | 19.2.3 | UI Runtime | ✅ Actualizado |
| `tailwindcss` | ^4 | Styling system | ✅ v4 (nueva API) |
| `@tailwindcss/postcss` | ^4 | PostCSS integration | ✅ |
| `framer-motion` | ^12.34.0 | Animaciones actuales del scroll | ⚠️ Ver nota abajo |
| `@supabase/ssr` | ^0.8.0 | Auth helpers SSR | ✅ |
| `@supabase/supabase-js` | ^2.95.3 | Cliente Supabase | ✅ |
| `clsx` | ^2.1.1 | Utilidad de clases | ✅ |
| `tailwind-merge` | ^3.4.0 | Merge de clases Tailwind | ✅ |
| `class-variance-authority` | ^0.7.1 | Variantes de componentes | ✅ |
| `zod` | ^4.3.6 | Validación de esquemas | ✅ |
| `lucide-react` | ^0.563.0 | Iconos | ✅ |
| `radix-ui` | ^1.4.3 | Primitivos accesibles | ✅ |
| `shadcn` | ^3.8.4 (dev) | CLI shadcn/ui | ✅ |
| `tw-animate-css` | ^1.4.0 (dev) | Animaciones CSS | ✅ |

### ❌ Faltantes — OBLIGATORIO Instalar

| Paquete | Propósito | Prioridad |
|---|---|---|
| `gsap` | Motor de animación profesional — ScrollTrigger, timelines | 🔴 CRÍTICO |
| `@gsap/react` | Hook `useGSAP()` — manejo seguro de animaciones en React | 🔴 CRÍTICO |
| `lenis` | Smooth scroll nativo — OBLIGATORIO para sitios de lujo | 🔴 CRÍTICO |
| `zustand` | Estado global liviano (progreso de scroll, UI state) | 🟡 ALTO |

### 🟡 Recomendadas (Phase 2+)

| Paquete | Propósito | Prioridad |
|---|---|---|
| `@google/generative-ai` | API Gemini Vision para "Henry Vision" AI module | 🟡 Phase 2 |
| `@google/model-viewer` | Visor 3D AR para muebles (web component) | 🟢 Phase 3 |
| `sharp` | Optimización de imágenes server-side (PNG→WebP) | 🟡 ALTO |

---

## ⚠️ Nota sobre Framer Motion vs GSAP

El componente `ScrollSequence` actual usa `useScroll` + `useTransform` de **Framer Motion**.  
Para el nivel "Apple/Awwwards" necesitamos migrar a **GSAP ScrollTrigger** porque:

1. **ScrollTrigger** ofrece `scrub` con curvas de ease personalizables (Framer Motion no)
2. **Pin** nativo sin hacks CSS de `sticky` positioning
3. **Timeline** anidadas para orquestar secuencias multi-sección
4. **Performance**: GSAP es ~3x más rápido en canvas redraws pesados
5. **Ecosistema**: ScrollSmoother + Lenis = integración perfecta

> [!IMPORTANT]
> **No eliminaremos Framer Motion**. Se usará para micro-animaciones de UI (hover, entrada de cards, transiciones de página). GSAP se usará exclusivamente para scroll-driven animations.

---

## 📂 Problemas de Estructura Detectados

### 1. `Imagenes Kitchern and Closet/` (raíz del proyecto)
- Contiene **52 archivos** de resource fork de macOS (`._*.jpg`) — **NO son imágenes reales**
- **Acción**: Verificar si existen las imágenes reales. Si no, solicitar al usuario los JPG originales.

### 2. `/public/scroll/` — Frames de Secuencia
- **sequence-1**: 240 frames PNG, ~625KB–850KB cada uno (**~165MB total para UNA sola secuencia**)
- Las secuencias 2–7 deben verificarse si tienen frames o están vacías
- **Acción CRÍTICA**: Convertir PNG → WebP (reducción ~60-70% de tamaño). Una secuencia de 240 frames PNG no es viable en producción.

### 3. `/public/images/projects/`
- Directorio referenciado por `ProjectGallery` pero NO verificado si tiene las imágenes reales

### 4. `/src/hooks/` — Vacío
- No hay hooks custom. Se necesitarán: `useLenis`, `useScrollProgress`, `usePrefersReducedMotion`

### 5. Fuentes
- Usa **Geist / Geist_Mono** (fuentes genéricas de Vercel)
- Para un sitio de carpintería de lujo necesitamos: **Cinzel** (títulos) + **Inter/Satoshi** (cuerpo)

---

## 🛠️ Comando de Instalación

```bash
# Dependencias de producción (Phase 1 — Cinematic Scroll System)
npm install gsap @gsap/react lenis zustand

# Dependencias futuras (Phase 2 — Henry Vision AI)
# npm install @google/generative-ai
# npm install @google/model-viewer
```

---

## 📊 Resumen del Riesgo

| Área | Nivel | Detalle |
|---|---|---|
| Performance (frames PNG) | 🔴 Alto | 165MB por secuencia × 7 = ~1.15GB de assets |
| Fuentes genéricas | 🟡 Medio | No comunican lujo/carpintería |
| Scroll sin Lenis | 🟡 Medio | Chrome nativo es "jumpy", no apto para luxury feel |
| Sin GSAP timeline | 🟡 Medio | Las animaciones carecen de orquestación cinematográfica |
| Imágenes de galería | 🟡 Medio | Posiblemente faltan los JPG reales del portafolio |
