import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTopClient from "@/components/ScrollToTop";
import BackToTop from "@/components/BackToTop";
import KeyboardShortcuts from "@/components/KeyboardShortcuts";
import ThemeProvider from "@/components/ThemeProvider";
import AuthProvider from "@/components/AuthProvider";

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
  title: {
    default: "Trading Pro | El Mejor Curso de Trading del Mundo",
    template: "%s | Trading Pro",
  },
  description: "Trading Pro: El mejor curso de trading del mundo. 88 lecciones interactivas, 319 quizzes, simulador con datos reales, Smart Money Concepts, ICT, prop firms, Python, preparación CMT. De cero absoluto a trader profesional.",
  keywords: ["trading pro", "curso trading", "forex", "trading en español", "smart money", "ICT", "prop firms", "cuentas fondeadas", "análisis técnico", "curso trading", "el mejor curso de trading", "CMT"],
  authors: [{ name: "Trading Pro" }],
  openGraph: {
    title: "Trading Pro | El Mejor Curso de Trading del Mundo",
    description: "88 lecciones, 319 quizzes, simulador, 98 diagramas, video-lecciones, gamificación. 9 fases.",
    type: "website",
    locale: "es_ES",
    siteName: "Trading Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trading Pro | El Mejor Curso de Trading del Mundo",
    description: "De cero a trader experto. El curso de trading más completo del mundo.",
  },
  manifest: "/manifest.json",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Trading Pro",
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
      <body className="min-h-full flex flex-col" style={{ background: "var(--body-bg)", color: "var(--text-primary)" }}>
        <ThemeProvider>
        <AuthProvider>
        <ScrollToTopClient />
        {children}
        <BackToTop />
        <KeyboardShortcuts />
        <script dangerouslySetInnerHTML={{ __html: `if(window.speechSynthesis){window.speechSynthesis.getVoices();window.speechSynthesis.addEventListener('voiceschanged',function(){window.speechSynthesis.getVoices()})}` }} />
        </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
