import React, { useMemo, useId } from "react";

/**
 * SevenV (v4.9, TS) — Título + intro reubicados sobre la animación SVG (misma columna)
 *
 * Cambio principal: el bloque con `title` e `intro` ahora vive dentro de la PRIMERA columna del grid
 * (la de la animación), justo encima del SVG.
 *
 * En mobile (1 col): título/intro → animación → tarjetas.
 * En desktop (≥lg, 2 col): izquierda (título/intro + animación) / derecha (tarjetas).
 */

// ===================== Tipos exportados =====================
export type SevenVItem = { k: string; d: string };

export type SevenVBigDataProps = {
  items?: SevenVItem[];
  palette?: string[];
  size?: number;
  showCards?: boolean;
  className?: string;
  title?: string;
  intro?: string;
  hoverTint?: boolean;
  logoHref?: string;
  logoSize?: number;
};

// ===================== Internals =====================

type SolarSystemProps = {
  items: SevenVItem[];
  size?: number;
  palette: string[];
  logoHref?: string;
  logoSize?: number;
};

type PlanetOrbitProps = {
  label: string;
  cx: number;
  cy: number;
  orbitRadius: number;
  planetRadius: number;
  haloPadding: number;
  duration: number;
  color: string;
};

// Paleta por defecto usando variables globales definidas en globals.css (con fallback hex)
const DEFAULT_PALETTE: string[] = [
  "var(--sietev-green, #a2d600)",
  "var(--sietev-blue, #3d3dfc)",
  "var(--sietev-green-dark, #7aa500)",
  "var(--sietev-blue-dark, #2a2aa6)",
  "var(--sietev-green, #a2d600)",
  "var(--sietev-blue, #3d3dfc)",
  "var(--sietev-green-dark, #7aa500)",
];

// ===================== Textos =====================
const DEFAULT_ITEMS: SevenVItem[] = [
  {
    k: "Volumen",
    d: "El <strong>volumen</strong> de los datos representa la magnitud de la información que producimos cada día. Desde gigabytes hasta petabytes, obliga a pensar en cómo almacenar, procesar y dar sentido a enormes cantidades de información.",
  },
  {
    k: "Velocidad",
    d: "La <strong>velocidad</strong> refleja la rapidez con la que los datos nacen, viajan y se transforman en conocimiento. En un entorno en tiempo real, determina la capacidad de reaccionar con oportunidad.",
  },
  {
    k: "Variedad",
    d: "La <strong>variedad</strong> muestra la diversidad de los datos: hojas de cálculo, imágenes, textos, audios o sensores. Esta pluralidad evidencia que el Big Data es tan heterogéneo como la vida misma.",
  },
  {
    k: "Veracidad",
    d: "La <strong>veracidad</strong> señala el nivel de confianza en el dato. No todo lo que circula es cierto, por lo que resulta esencial validar la calidad, el linaje y la trazabilidad de la información.",
  },
  {
    k: "Valor",
    d: "El <strong>valor</strong> de los datos se mide en su capacidad para generar impacto. Más allá de acumular información, lo importante es convertirla en decisiones útiles y aprendizajes que abren oportunidades.",
  },
  {
    k: "Variabilidad",
    d: "La <strong>variabilidad</strong> expresa cómo los datos cambian con el tiempo. Factores sociales, económicos o ambientales transforman patrones y obligan a adaptarse a señales dinámicas.",
  },
  {
    k: "Visualización",
    d: "La <strong>visualización</strong> convierte datos complejos en narrativas comprensibles. Es la herramienta que traduce la abstracción en claridad, haciendo posible leer, comparar y actuar con evidencia a la vista.",
  }
];

// ===================== Componente exportable =====================

export function SevenVBigData({
  items,
  palette,
  size = 360,
  showCards = true,
  className =
    "relative w-full max-w-6xl px-4 md:px-8 py-20 md:py-28 overflow-hidden",
  title = "¿Qué son las 7V del Big Data?",
  intro =
    "Las 7V son siete lentes complementarios que nos ayudan a comprender el fenómeno del Big Data. Nacidas de las 3V originales (Volumen, Velocidad y Variedad), se amplían con Veracidad, Valor, Variabilidad y Visualización para abarcar no solo la cantidad, sino también la confianza, el cambio, la utilidad y la forma en que los datos se comunican.",
  hoverTint = true,
  logoHref,
  logoSize = 64,
}: SevenVBigDataProps) {
  const itemsMemo = useMemo(() => items ?? DEFAULT_ITEMS, [items]);
  const paletteMemo = useMemo(() => palette ?? DEFAULT_PALETTE, [palette]);

  return (
    <section id="seven-v" className={className}>
      <div
        className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
        style={{ opacity: 0.28, mixBlendMode: "overlay", filter: "blur(0.5px) brightness(1.03)" }}
      />

      <div className="relative z-10">
        <div
          className={`grid grid-cols-1 ${showCards ? "lg:grid-cols-2" : "lg:grid-cols-1"} gap-10 items-start`}
        >
          {/* Columna izquierda: Título/intro encima del SVG */}
          <div className="flex flex-col gap-6">
            <header className="mb-1">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-[color:var(--sietev-blue)]">{title}</h3>
              <p className="text-gray-700 max-w-3xl">{intro}</p>
              <p className="mt-2 text-sm text-gray-600 italic">Cada “V” es una lente para leer el Big Data.</p>
            </header>

            <div className="relative w-full aspect-square rounded-2xl border border-dashed border-gray-300 grid place-items-center bg-white/50">
              <SolarSystem
                items={itemsMemo}
                size={size}
                palette={paletteMemo}
                logoHref={logoHref}
                logoSize={logoSize}
              />
              <div className="absolute bottom-3 right-3 text-xs px-2 py-1 rounded bg-white/70 backdrop-blur">
                SVG — 7V en movimiento
              </div>
            </div>
          </div>

          {/* Columna derecha: tarjetas */}
          {showCards && (
            <ul className="grid grid-cols-1 gap-6">
              {itemsMemo.map((it, i) => {
                const color = paletteMemo[i % paletteMemo.length];
                return (
                  <li
                    key={it.k}
                    className="p-5 rounded-xl border shadow-sm bg-white/60 backdrop-blur transition-colors"
                    style={{ borderColor: "#e5e7eb" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = color;
                      if (hoverTint) e.currentTarget.style.backgroundColor = `${color}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#e5e7eb";
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.6)";
                    }}
                  >
                    <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: it.d }} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

// ===================== Subcomponentes =====================

function SolarSystem({ items, size = 360, palette, logoHref, logoSize = 64 }: SolarSystemProps) {
  const cx = size / 2;
  const cy = size / 2;
  const baseOrbitRadius = 40;
  const orbitGap = 20;
  const baseDuration = 8;
  const R = logoSize / 2;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-[88%] h-[88%]">
      <defs>
        <radialGradient id="sietev-sun-gradient" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="45%" stopColor="var(--sietev-green, #a2d600)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="var(--sietev-blue-dark, #2a2aa6)" stopOpacity="0.9" />
        </radialGradient>
        {logoHref && <clipPath id="logo-clip"><circle cx={cx} cy={cy} r={R} /></clipPath>}
      </defs>

      <g>
        {logoHref ? (
          <image
            href={logoHref}
            x={cx - R}
            y={cy - R}
            height={logoSize}
            width={logoSize}
            clipPath="url(#logo-clip)"
            preserveAspectRatio="xMidYMid meet"
          />
        ) : (
          <>
            <circle cx={cx} cy={cy} r={32} fill="url(#sietev-sun-gradient)" stroke="#0f172a" strokeOpacity={0.1} strokeWidth={4} />
            <text x={cx} y={cy + 4} textAnchor="middle" className="fill-white font-bold text-[11px] drop-shadow-md">7V</text>
          </>
        )}
      </g>

      {items.map((it, i) => (
        <PlanetOrbit
          key={it.k}
          label={it.k}
          cx={cx}
          cy={cy}
          orbitRadius={baseOrbitRadius + i * orbitGap}
          planetRadius={6}
          haloPadding={6}
          duration={baseDuration * ((baseOrbitRadius + i * orbitGap) / baseOrbitRadius)}
          color={palette[i % palette.length]}
        />
      ))}
    </svg>
  );
}

function PlanetOrbit({ label, cx, cy, orbitRadius, planetRadius, haloPadding, duration, color }: PlanetOrbitProps) {
  const idBase = (useId() as string).replace(/[:]/g, "_");
  const orbitId = `${idBase}-orbit`;
  const haloId = `${idBase}-halo`;
  const gradId = `${idBase}-grad`;
  const haloRadius = planetRadius + haloPadding;

  const orbitPath = `M ${cx + orbitRadius} ${cy} a ${orbitRadius} ${orbitRadius} 0 1 0 ${-2 * orbitRadius} 0 a ${orbitRadius} ${orbitRadius} 0 1 0 ${2 * orbitRadius} 0`;
  const haloPath = `M ${haloRadius} 0 a ${haloRadius} ${haloRadius} 0 1 0 ${-2 * haloRadius} 0 a ${haloRadius} ${haloRadius} 0 1 0 ${2 * haloRadius} 0`;

  return (
    <g>
      <circle cx={cx} cy={cy} r={orbitRadius} fill="none" stroke={color} strokeOpacity={0.5} strokeWidth={1.25} strokeDasharray="3 3" />

      <defs>
        <path id={orbitId} d={orbitPath} pathLength={360} />
        <path id={haloId} d={haloPath} pathLength={360} />
        <radialGradient id={gradId} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="45%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor="var(--sietev-green, #a2d600)" stopOpacity="1" />
        </radialGradient>
        <filter id={`${idBase}-soft`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0.6" stdDeviation="0.8" floodColor={color} floodOpacity="0.35" />
        </filter>
      </defs>

      <g filter={`url(#${idBase}-soft)`}>
        <circle r={haloRadius} fill={color} fillOpacity={0.18} />
        <circle r={planetRadius} fill={`url(#${gradId})`} stroke="rgba(0,0,0,0.25)" />
        <g>
          <circle r={2.2} className="fill-gray-900" />
          <text x={4} y={0} textAnchor="start" dominantBaseline="middle" className="fill-gray-900 text-[9px]">{label}</text>
          <animateMotion dur="8s" repeatCount="indefinite" rotate="0"><mpath href={`#${haloId}`} /></animateMotion>
        </g>
      </g>
      <animateMotion dur={`${duration}s`} repeatCount="indefinite" rotate="0"><mpath href={`#${orbitId}`} /></animateMotion>
    </g>
  );
}

// ===================== Test cases =====================
export function SevenVDemoGallery() {
  return (
    <div className="grid gap-8">
      {/* Caso 1: Fallback sin logo (no debería romper build) */}
      <SevenVBigData showCards={false} title="7V — Fallback sin logo" intro="Demostración sin logoHref (usa círculo + 7V)." />

      {/* Caso 2: Con logo usando ruta pública (asegúrate de tener el archivo en /public) */}
      <SevenVBigData showCards={false} title="7V — Con logo" intro="Demostración con logoHref: '/logo-sietev.svg' (requiere archivo en /public)." logoHref="/logo-sietev.svg" />

      {/* Caso 3: Con logo y tamaño personalizado */}
      <SevenVBigData showCards={false} title="7V — Logo grande" intro="Logo de 96px de diámetro." logoHref="/logo-sietev.svg" logoSize={96} />

      {/* Caso 4: Forzar paleta explícita en HEX (prueba de color incluso sin CSS vars) */}
      <SevenVBigData showCards={false} title="7V — Paleta HEX" intro="Usa una paleta pasada por props para asegurar color pleno." palette={["#a2d600", "#3d3dfc", "#7aa500", "#2a2aa6", "#a2d600", "#3d3dfc", "#7aa500"]} />
    </div>
  );
}

export default SevenVBigData;
