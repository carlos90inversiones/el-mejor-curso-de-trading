"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CHANGELOG = [
  { date: "Abril 2026", version: "3.0", changes: [
    "Fase 9: Preparación CMT Nivel 1 (Teoría de Dow, ciclos, sentimiento, examen 20 preguntas)",
    "Fase 8: Plan de Práctica de 8 Semanas con guía diaria",
    "67 diagramas SVG inline en las lecciones",
    "6 capturas reales de TradingView (EUR/USD, BTC, SPX, Oro)",
    "10 video-lecciones animadas con TTS sincronizado",
    "Instructor presentador con foto y 5 clips narrados",
    "Landing page rediseñada: limpia y progresiva",
    "Multipágina con Next.js App Router (9 rutas)",
    "1,324 acentos/ñ corregidos en todo el contenido",
    "Voz TTS masculina forzada con pitch 0.9",
  ]},
  { date: "Abril 2026", version: "2.0", changes: [
    "Fases 5 y 6 expandidas a 10 lecciones cada una",
    "Fase 7 expandida con checklist final y recursos",
    "Buscador global en navbar de todas las páginas",
    "Menú hamburguesa para móvil",
    "Barra de progreso de lectura en lecciones",
    "Botones de compartir (Twitter, WhatsApp, Telegram)",
    "Breadcrumbs de navegación en lecciones",
    "6 testimonials y 8 FAQ en landing page",
    "Confetti al aprobar quizzes",
    "Botón 'Volver arriba' flotante",
  ]},
  { date: "Abril 2026", version: "1.0", changes: [
    "57 lecciones iniciales en 7 fases",
    "216 preguntas de quiz",
    "Simulador de trading con datos reales + modo Challenge",
    "Calculadora de position sizing",
    "Diario de trading interactivo",
    "Práctica de velas japonesas (12 patrónes)",
    "30 flashcards de memorización",
    "30 tips diarios rotativos",
    "Glosario con 102 términos",
    "4 cheat sheets descargables como PNG",
    "7 proyectos prácticos con checklists",
    "7 certificados descargables por fase",
    "Gamificación: 10 niveles, 15 badges, XP, streaks",
    "Audio TTS en cada lección (4 velocidades)",
    "PWA instalable como app",
    "SEO completo con sitemap.xml",
  ]},
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-white mb-2">Changelog</h1>
        <p className="text-[#a0a0b8] mb-10">Historial de actualizaciones de Trading Pro</p>
        <div className="space-y-8">
          {CHANGELOG.map((release, i) => (
            <div key={i} className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-bold">v{release.version}</span>
                <span className="text-[#a0a0b8] text-sm">{release.date}</span>
              </div>
              <ul className="space-y-2">
                {release.changes.map((change, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-[#a0a0b8]">
                    <span className="text-green-400 mt-0.5 shrink-0">+</span>
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
