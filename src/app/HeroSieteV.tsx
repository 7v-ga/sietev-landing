// HeroSieteV.tsx
import { Mail } from "lucide-react";

export function HeroSieteV() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Gradiente linear horizontal, claro al centro */}
      <div
        className="absolute top-0 left-0 w-full h-full -z-20"
        style={{
          background: `linear-gradient(
            90deg,
            #22485f 1%,
            #425364 7%,
            #e6f6f7 41%,
            #e6f6f7 59%,
            #425364 93%,
            #22485f 99%
          )`,
        }}
      />

      {/* Fondo animado cinético fusionado */}
      <div
        className="absolute top-0 left-0 w-full h-full -z-10 bg-kinetico pointer-events-none"
        style={{
          opacity: 0.7,
          mixBlendMode: "overlay",
          filter: "blur(0.5px) brightness(1.05)",
        }}
      />

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4 md:px-0">
        <img
          src="/logo-sietev.svg"
          alt="SieteV Logo"
          className="w-48 mb-8"
          draggable={false}
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-xl">
          Inteligencia visual
          <br />
          para un mundo de datos
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-gray-800 drop-shadow">
          SieteV impulsa la transformación digital de empresas, equipos e
          instituciones, conectando información, tecnología y creatividad.
          <span className="font-medium block mt-4">
            Soluciones en desarrollo web, análisis de datos y comunicación
            digital.
            <br />
            Pronto en línea.
          </span>
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="mailto:contacto@sietev.cl" className="btn-sietev">
            <Mail className="w-6 h-6" strokeWidth={2.5} />
            Contáctanos
          </a>
          <a href="#servicios" className="btn-sietev">
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
