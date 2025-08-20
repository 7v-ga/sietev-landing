// src/app/page.tsx
"use client";

import { HeroSieteV } from "./components/HeroSieteV";
import { ServiciosSieteV } from "./components/ServiciosSieteV";
import { SevenVBigData } from "./components/7VBigData";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen flex flex-col items-center bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* HERO principal */}
      <HeroSieteV />

      {/* SERVICIOS */}
      <section id="servicios" className="w-full flex flex-col items-center">
        <ServiciosSieteV />
      </section>

      {/* SERVICIOS */}
      <section id="7v-bigdata" className="w-full flex flex-col items-center">
        <SevenVBigData
          title="¿Por qué SieteV?"
          intro="Siete dimensiones para entender y comunicar datos a escala."
          palette={["#3d3dfc","#22d3ee","#34d399","#f59e0b","#f472b6","#a78bfa","#a2d600"]}
          size={420}
          showCards
          hoverTint
        />
      </section>

      {/* FOOTER */}
      <footer className="w-full text-center py-8 mt-16 text-gray-600 text-sm border-t border-gray-200">
        contacto@sietev.cl<br />
        <span className="mt-1 block">
          &copy; {currentYear} SieteV Visualización Crítica. Marca registrada.
          Todos los derechos reservados.
        </span>
      </footer>
    </main>
  );
}
