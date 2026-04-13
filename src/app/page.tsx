"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal, AnimatedCounter, Float } from "@/components/Animations";

export default function LandingPage() {
  const [buyLoading, setBuyLoading] = useState(false);

  const handleBuy = async () => {
    setBuyLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else alert("Error al crear la sesión de pago");
    } catch {
      alert("Error al procesar el pago. Inténtalo de nuevo.");
    }
    setBuyLoading(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-purple-900/10" />
        <div className="max-w-5xl mx-auto px-4 pt-20 pb-24 text-center relative">
          <Float amplitude={6} duration={4}>
            <div className="text-6xl mb-6">📈</div>
          </Float>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
            Trading Pro
          </h1>
          <p className="text-xl md:text-2xl text-[#a0a0b8] max-w-2xl mx-auto mb-4 leading-relaxed">
            De cero absoluto a trader profesional.
            <br className="hidden sm:block" />
            <strong className="text-white">El curso de trading más completo del mundo.</strong>
          </p>
          <p className="text-sm text-[#555] mb-10">88 lecciones | 9 fases | Simulador | Preparación CMT | Prop Firms | Python</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#comprar" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-10 py-4 rounded-xl hover:opacity-90 transition font-bold shadow-lg shadow-blue-500/25 hover-lift">
              Comprar Curso — 149€ →
            </Link>
            <Link href="#contenido" className="bg-[#1a1a2e] border border-[#2a2a40] text-white text-lg px-10 py-4 rounded-xl hover:bg-[#222240] transition font-medium">
              Ver Contenido ↓
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-[#2a2a40] bg-[#0a0c16]">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
            {[
              { value: 88, label: "Lecciones" },
              { value: 319, label: "Quizzes" },
              { value: 9, label: "Fases" },
              { value: 98, label: "Diagramas" },
              { value: 15, label: "Herramientas" },
              { value: 50, label: "Examen Final" },
            ].map(s => (
              <div key={s.label}>
                <div className="text-xl md:text-2xl font-bold text-white"><AnimatedCounter value={s.value} /></div>
                <div className="text-[10px] md:text-xs text-[#a0a0b8]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAS 9 FASES - El corazón de la venta */}
      <section id="contenido" className="max-w-5xl mx-auto px-4 py-20">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
            Contenido Completo del Curso
          </h2>
          <p className="text-[#a0a0b8] text-center mb-12 text-sm">9 fases progresivas. Desde &quot;¿qué es el trading?&quot; hasta trading algorítmico con Python.</p>
        </ScrollReveal>

        <div className="space-y-4">
          {[
            { num: 1, title: "Fundamentos del Trading", color: "#3b82f6", lessons: 10, topics: "Qué es el trading, mercados (Forex, acciones, crypto), velas japonesas, TradingView, tipos de órdenes, sesiones del mercado, pares de divisas" },
            { num: 2, title: "Análisis Técnico Completo", color: "#8b5cf6", lessons: 12, topics: "Soportes/resistencias, tendencias, Fibonacci, RSI, MACD, Bollinger, patrones de velas, patrones chartistas, volumen, opciones, futuros" },
            { num: 3, title: "Gestión de Riesgo y Capital", color: "#10b981", lessons: 10, topics: "Stop Loss, R:R, position sizing, drawdown, regla del 1-2%, correlación, backtesting manual, plan de trading, estilos (scalping, swing, day trading)" },
            { num: 4, title: "Smart Money Concepts (SMC) + ICT", color: "#f59e0b", lessons: 14, topics: "Order Blocks, Fair Value Gap, liquidez, BOS, CHoCH, Power of 3, Killzones, Premium/Discount, Wyckoff, VSA, tape reading, Market Profile" },
            { num: 5, title: "Prop Firms y Cuentas Fondeadas", color: "#ec4899", lessons: 10, topics: "FTMO, MyFundedFX, challenges, reglas de drawdown, estrategias para pasar, scaling, múltiples cuentas, trade copier, diario avanzado" },
            { num: 6, title: "Trading Algorítmico con Python", color: "#06b6d4", lessons: 10, topics: "Python desde cero, pandas, backtesting, yfinance, APIs de datos, Pine Script para TradingView, bots de trading, machine learning básico" },
            { num: 7, title: "Psicología y Plan de Carrera", color: "#a855f7", lessons: 8, topics: "FOMO, revenge trading, sesgo de confirmación, tilt emocional, disciplina, rutina del trader, herramientas esenciales, plan de carrera profesional" },
            { num: 8, title: "Opciones, Futuros y Market Profile", color: "#ef4444", lessons: 8, topics: "Calls/Puts, griegas (Delta, Theta, Gamma, Vega), spreads, iron condor, futuros E-mini, Market Profile, POC, Value Area, tape reading avanzado" },
            { num: 9, title: "Estacionalidad, Mean Reversion y CMT", color: "#14b8a6", lessons: 6, topics: "Patrones estacionales, Sell in May, Santa Rally, Z-Score, reversión a la media, análisis intermarket, DXY, bonos, preparación CMT Nivel 1" },
          ].map((phase, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-5 hover:border-blue-500/20 transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shrink-0" style={{ background: phase.color }}>
                    {phase.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-bold">{phase.title}</h3>
                      <span className="text-[10px] text-[#555] bg-[#0d0d15] px-2 py-0.5 rounded-full">{phase.lessons} lecciones</span>
                    </div>
                    <p className="text-[#a0a0b8] text-xs leading-relaxed">{phase.topics}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* QUE INCLUYE ADEMÁS */}
      <section className="bg-[#0a0c16] border-y border-[#2a2a40]">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
              Lo que incluye tu acceso
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📊", title: "98 Diagramas SVG", desc: "Gráficos profesionales dentro de cada lección" },
              { icon: "📈", title: "Simulador de Trading", desc: "Datos reales + modo Challenge de prop firm" },
              { icon: "🎬", title: "10 Video-Lecciones", desc: "Gráficos animados con narración paso a paso" },
              { icon: "🏆", title: "Gamificación", desc: "XP, 10 niveles, 15 badges, certificados por fase" },
              { icon: "🧮", title: "Calculadora de Posición", desc: "Calcula el tamaño exacto de cada operación" },
              { icon: "📓", title: "Diario de Trading", desc: "Registra y analiza cada operación" },
              { icon: "🕯️", title: "Práctica de Velas", desc: "25 patrones de velas para identificar" },
              { icon: "🃏", title: "72 Flashcards", desc: "Repaso rápido de conceptos clave" },
              { icon: "📖", title: "Glosario (102 términos)", desc: "Diccionario completo de trading" },
              { icon: "✅", title: "Checklist Diaria", desc: "15 pasos antes de operar cada día" },
              { icon: "📅", title: "Plan de Estudio", desc: "Elige tu ritmo: 30, 60 o 90 días" },
              { icon: "🏦", title: "Comparador de Brokers", desc: "12 brokers con filtros y pros/contras" },
              { icon: "📋", title: "4 Cheat Sheets", desc: "Resúmenes descargables en PNG" },
              { icon: "🎯", title: "7 Proyectos Prácticos", desc: "Aplica lo aprendido paso a paso" },
              { icon: "🎓", title: "Examen Final (50 preguntas)", desc: "Demuestra que dominas todo" },
              { icon: "⚡", title: "Repaso Rápido", desc: "Resumen clave de cada lección" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <div className="bg-[#12142a] rounded-xl p-4 text-center h-full">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="text-white font-bold text-xs mb-1">{item.title}</h3>
                  <p className="text-[10px] text-[#555]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-white text-center mb-10">¿Para quién es este curso?</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: "🔰", title: "Principiantes totales", desc: "No sabes nada de trading. Empezamos desde qué es un gráfico." },
            { icon: "📈", title: "Traders que pierden dinero", desc: "Llevas tiempo operando pero no eres rentable. Aquí arreglas los cimientos." },
            { icon: "🎯", title: "Quieres pasar un challenge", desc: "Preparación específica para prop firms: FTMO, MyFundedFX, etc." },
            { icon: "🐍", title: "Quieres automatizar", desc: "Fase completa de Python para crear bots y backtesting algorítmico." },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-5 flex gap-4 items-start">
                <div className="text-2xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-[#a0a0b8] text-xs">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* COMPARACIÓN CON OTROS CURSOS */}
      <section className="bg-[#0a0c16] border-y border-[#2a2a40]">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-white text-center mb-10">Trading Pro vs. Otros Cursos</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#2a2a40]">
                    <th className="text-left text-[#555] py-3 px-3 font-medium">Característica</th>
                    <th className="text-center text-white py-3 px-3 font-bold bg-blue-900/20 rounded-t-xl">Trading Pro</th>
                    <th className="text-center text-[#555] py-3 px-3 font-medium">Cursos típicos</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  {[
                    ["Precio", "149€ (pago único)", "500-2,000€"],
                    ["Lecciones", "88 lecciones completas", "20-40 lecciones"],
                    ["Quizzes", "319 preguntas", "Pocos o ninguno"],
                    ["Simulador integrado", "Sí, con datos reales", "No incluido"],
                    ["Gamificación", "XP, niveles, badges", "No"],
                    ["Prop Firms", "Fase completa dedicada", "Mención superficial"],
                    ["Python / Algorítmico", "Fase completa desde cero", "No incluido"],
                    ["Preparación CMT", "Sí (Nivel 1)", "No"],
                    ["Herramientas interactivas", "15 herramientas", "0-2"],
                    ["Acceso", "De por vida", "6-12 meses"],
                  ].map(([feat, pro, other], i) => (
                    <tr key={i} className="border-b border-[#2a2a40]/50">
                      <td className="py-2.5 px-3 text-[#a0a0b8]">{feat}</td>
                      <td className="py-2.5 px-3 text-center text-green-400 bg-blue-900/10 font-medium">{pro}</td>
                      <td className="py-2.5 px-3 text-center text-[#555]">{other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            Lo que dicen nuestros alumnos
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Carlos M.", text: "Después de probar 5 cursos de pago, este tiene MÁS contenido y mejor estructura que todos juntos." },
            { name: "Miguel R.", text: "Pasé mi primer challenge de FTMO gracias a la Fase 5. Las lecciones de prop firms son increíblemente detalladas." },
            { name: "Ana P.", text: "No sabía NADA de trading. Empecé desde cero y en 3 meses ya operaba en demo con resultados positivos." },
          ].map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-6">
                <div className="flex gap-0.5 mb-3 text-amber-400 text-sm">★★★★★</div>
                <p className="text-[#a0a0b8] text-sm mb-4 leading-relaxed italic">&quot;{t.text}&quot;</p>
                <p className="text-white font-bold text-sm">{t.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-white text-center mb-10">Preguntas Frecuentes</h2>
        </ScrollReveal>
        <div className="space-y-3">
          {[
            { q: "¿Qué incluye el curso por 149€?", a: "Acceso de por vida a 88 lecciones, 319 quizzes, simulador con datos reales, 15 herramientas interactivas, examen final de 50 preguntas, video-lecciones, gamificación completa y todas las actualizaciones futuras." },
            { q: "¿Necesito saber algo de trading o finanzas?", a: "No. El curso empieza desde CERO absoluto. La Fase 1 te explica qué es el trading, qué es una vela japonesa, y cómo abrir TradingView. No necesitas conocimientos previos." },
            { q: "¿Cuánto tiempo necesito para completarlo?", a: "Dedicando 1-2 horas al día, puedes completar las 88 lecciones en 6-8 semanas. Recomendamos 3-6 meses de práctica en demo antes de operar con dinero real." },
            { q: "¿Me prepara para pasar un challenge de prop firm?", a: "Sí. La Fase 5 está dedicada exclusivamente a prop firms: reglas de FTMO, estrategias para pasar el challenge, gestión de drawdown, scaling, y cómo operar cuentas fondeadas." },
            { q: "¿Incluye trading algorítmico?", a: "Sí. La Fase 6 te enseña Python desde cero, backtesting, creación de bots, APIs de datos (yfinance, OANDA, Binance), Pine Script para TradingView, y machine learning básico aplicado al trading." },
            { q: "¿Puedo vivir del trading?", a: "Sí, pero requiere educación, práctica (3-6 meses en demo) y disciplina. Con cuentas fondeadas de 100K+ al 3% mensual, puede ser un ingreso serio. Este curso te da la base completa." },
          ].map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <details className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl group">
                <summary className="p-4 cursor-pointer text-white font-medium flex items-center justify-between hover:bg-[#222240] rounded-xl transition text-sm">
                  {faq.q}
                  <span className="text-[#555] group-open:rotate-180 transition-transform ml-2">▼</span>
                </summary>
                <div className="px-4 pb-4 text-[#a0a0b8] text-sm leading-relaxed">{faq.a}</div>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA FINAL - Compra */}
      <section id="comprar" className="max-w-3xl mx-auto px-4 pb-20">
        <ScrollReveal>
          <div className="text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-2xl p-10">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold text-white mb-2">Empieza Tu Carrera de Trader Hoy</h2>
            <p className="text-[#a0a0b8] text-sm mb-4">88 lecciones + 319 quizzes + simulador + 15 herramientas + acceso de por vida</p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-4xl font-extrabold text-white">149€</span>
              <span className="text-[#555] text-sm line-through">299€</span>
              <span className="bg-green-900/50 text-green-400 text-xs px-2 py-1 rounded-full font-bold">-50%</span>
            </div>
            <button onClick={handleBuy} disabled={buyLoading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-12 py-4 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-50 shadow-lg shadow-blue-500/20 mb-4">
              {buyLoading ? "Redirigiendo a Stripe..." : "Comprar Ahora — 149€"}
            </button>
            <p className="text-[#555] text-xs">Pago seguro con tarjeta de crédito/débito vía Stripe</p>
            <Link href="/login" className="text-blue-400 text-xs hover:text-blue-300 transition mt-2 inline-block">
              ¿Ya tienes cuenta? Inicia sesión
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
