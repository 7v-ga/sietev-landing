// src/app/head.tsx

export default function Head() {
  return (
    <>
      {/* Título de la página */}
      <title>SieteV Visualización Crítica</title>
      <meta
        name="description"
        content="SieteV — Inteligencia visual, datos críticos y soluciones digitales. Transformamos datos en impacto y narrativa para empresas y organizaciones."
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="SieteV Visualización Crítica" />
      <meta
        property="og:description"
        content="Transformamos datos en impacto. Inteligencia visual, análisis, web y comunicación digital para empresas e instituciones."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sietev.cl/" />
      <meta property="og:image" content="/og-image.png" />

      {/* Twitter/X Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="SieteV Visualización Crítica" />
      <meta
        name="twitter:description"
        content="Transformamos datos en impacto. Inteligencia visual, análisis y soluciones digitales."
      />
      <meta name="twitter:image" content="/og-image.png" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://sietev.cl/" />

      {/* Extra: theme color para navegadores móviles */}
      <meta name="theme-color" content="#3d3dfc" />
    </>
  );
}
