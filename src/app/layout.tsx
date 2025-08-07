import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SieteV Visualización Crítica",
  description:
    "SieteV — Inteligencia visual, datos críticos y soluciones digitales. Transformamos datos en impacto y narrativa para empresas y organizaciones.",
  openGraph: {
    title: "SieteV Visualización Crítica",
    description:
      "Transformamos datos en impacto. Inteligencia visual, análisis, web y comunicación digital para empresas e instituciones.",
    url: "https://sietev.cl/",
    siteName: "SieteV Visualización Crítica",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SieteV Visualización Crítica",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SieteV Visualización Crítica",
    description:
      "Transformamos datos en impacto. Inteligencia visual, análisis y soluciones digitales.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
