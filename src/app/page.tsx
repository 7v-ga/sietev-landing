// src/app/page.tsx
"use client";

import { HeroSieteV } from "./components/HeroSieteV";
import { ServiciosSieteV } from "./ServiciosSieteV";

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

      {/* FOOTER */}
      <footer className="w-full text-center py-8 mt-16 text-gray-600 text-sm border-t border-gray-200">
        contacto@sietev.cl &nbsp;|&nbsp; IG: @sietevdatos <br />
        <span className="mt-1 block">
          &copy; {currentYear} SieteV Visualización Crítica. Marca registrada.
          Todos los derechos reservados.
        </span>
      </footer>
    </main>
  );
}
