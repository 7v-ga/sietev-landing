import { motion } from "framer-motion";

export function ServiciosSieteV() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="z-10 mt-20 max-w-2xl w-full bg-white border border-gray-200 rounded-2xl p-8 shadow-sietev mx-auto"
    >
      <h2 className="text-2xl font-bold text-sietevBlue mb-4 text-center">
        Servicios de SieteV
      </h2>
      <p className="text-gray-700 text-base mb-6 text-center">
        En SieteV acompañamos a empresas, instituciones y equipos de todo el
        mundo a transformar información en impacto:
      </p>
      <ul className="space-y-4 text-gray-700">
        <li>
          <span className="font-semibold text-sietevGreen">
            Desarrollo web y plataformas:
          </span>{" "}
          <br />
          Creamos sitios institucionales, portales interactivos y soluciones
          digitales a medida para potenciar tu presencia y operación online.
        </li>
        <li>
          <span className="font-semibold text-sietevGreen">
            Visualización y análisis de datos:
          </span>{" "}
          <br />
          Convertimos datos complejos en reportes visuales claros y dashboards
          personalizados para apoyar la toma de decisiones estratégicas.
        </li>
        <li>
          <span className="font-semibold text-sietevGreen">
            Soluciones digitales personalizadas:
          </span>{" "}
          <br />
          Desarrollamos herramientas adaptadas a las necesidades de tu
          organización para optimizar procesos y facilitar la gestión.
        </li>
        <li>
          <span className="font-semibold text-sietevGreen">
            Comunicación digital y contenidos:
          </span>{" "}
          <br />
          Diseñamos campañas, narrativas y materiales multimedia para ampliar tu
          alcance, fortalecer tu reputación y conectar con nuevas audiencias.
        </li>
        <li>
          <span className="font-semibold text-sietevGreen">
            Capacitación y consultoría:
          </span>{" "}
          <br />
          Brindamos formación, talleres y asesoría para impulsar la adopción de
          tecnología y el uso inteligente de la información en tu equipo.
        </li>
      </ul>
      <div className="mt-8 text-center text-sietevBlue italic">
        SieteV combina análisis crítico, creatividad y tecnología para ofrecer
        soluciones confiables, adaptables y con impacto real.
      </div>
    </motion.section>
  );
}
