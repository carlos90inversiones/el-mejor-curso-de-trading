import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "El Mejor Curso de Trading del Mundo | De Cero a Experto",
  description: "Curso interactivo GRATUITO de trading en espanol. 57 lecciones, 216 quizzes, simulador con datos reales, Smart Money Concepts, ICT, prop firms, Python. De principiante absoluto a trader profesional.",
  keywords: ["trading", "curso trading", "forex", "trading en espanol", "smart money", "ICT", "prop firms", "cuentas fondeadas", "analisis tecnico", "curso gratuito trading"],
  authors: [{ name: "El Mejor Curso de Trading" }],
  openGraph: {
    title: "El Mejor Curso de Trading del Mundo",
    description: "57 lecciones interactivas, 216 quizzes, simulador, herramientas profesionales. GRATIS.",
    type: "website",
    locale: "es_ES",
    siteName: "El Mejor Curso de Trading del Mundo",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Mejor Curso de Trading del Mundo",
    description: "De cero a trader experto. 57 lecciones, simulador, gamificacion. GRATIS.",
  },
  manifest: "/manifest.json",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Trading Course",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
