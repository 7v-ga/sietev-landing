import { Mail } from "lucide-react";

export function HeroSieteV() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center py-22 px-4 md:px-0 text-center w-full overflow-hidden bg-sietev-textil">
      {/* LOGO */}
      <img
        src="/logo-sietev.svg"
        alt="SieteV Logo"
        className="w-38 mb-8 z-10"
        draggable={false}
      />

      {/* TÍTULO */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow z-10">
        Inteligencia visual
        <br />
        para un mundo de datos
      </h1>

      {/* DESCRIPCIÓN */}
      <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 z-10 text-gray-800">
        SieteV impulsa la transformación digital de empresas, equipos e
        instituciones, conectando información, tecnología y creatividad.
        <span className="font-medium block mt-4">
          Soluciones en desarrollo web, análisis de datos y comunicación
          digital.
          <br />
          Pronto en línea.
        </span>
      </p>

      {/* BOTONES */}
      <div className="flex flex-col md:flex-row gap-4 justify-center z-10">
        <a href="mailto:contacto@sietev.cl" className="btn-sietev">
          <Mail className="w-6 h-6" strokeWidth={2.5} />
          Contáctanos
        </a>
        <a href="#servicios" className="btn-sietev">
          Ver servicios
        </a>
      </div>
    </section>
  );
}
