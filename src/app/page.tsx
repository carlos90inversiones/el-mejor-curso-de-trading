"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal, AnimatedCounter, Float } from "@/components/Animations";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO - Limpio, directo, sin saturar */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-purple-900/10" />
        <div className="max-w-5xl mx-auto px-4 pt-20 pb-24 text-center relative">
          <Float amplitude={6} duration={4}>
            <div className="text-6xl mb-6">📈</div>
          </Float>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
            Trading Pro
          </h1>
          <p className="text-xl md:text-2xl text-[#a0a0b8] max-w-2xl mx-auto mb-10 leading-relaxed">
            Aprende trading desde cero hasta nivel profesional.
            <br className="hidden sm:block" />
            <strong className="text-white">Gratis. Para siempre.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/curso" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-10 py-4 rounded-xl hover:opacity-90 transition font-bold shadow-lg shadow-blue-500/25 hover-lift">
              Empezar Ahora →
            </Link>
            <Link href="/herramientas" className="bg-[#1a1a2e] border border-[#2a2a40] text-white text-lg px-10 py-4 rounded-xl hover:bg-[#222240] transition font-medium">
              Ver Herramientas
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR - números rápidos sin saturar */}
      <section className="border-y border-[#2a2a40] bg-[#0a0c16]">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="grid grid-cols-4 gap-4 text-center">
            {[
              { value: 88, label: "Lecciones" },
              { value: 319, label: "Preguntas" },
              { value: 9, label: "Fases" },
              { value: 12, label: "Herramientas" },
            ].map(s => (
              <div key={s.label}>
                <div className="text-xl md:text-2xl font-bold text-white"><AnimatedCounter value={s.value} /></div>
                <div className="text-[10px] md:text-xs text-[#a0a0b8]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA - 3 pasos simples */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Así de fácil funciona
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "1", icon: "📚", title: "Aprende", desc: "88 lecciones con explicaciones claras, diagramas visuales y analogías simples. Desde cero absoluto." },
            { step: "2", icon: "🎯", title: "Practica", desc: "Simulador con datos reales, quizzes interactivos, flashcards y proyectos prácticos guiados." },
            { step: "3", icon: "💰", title: "Opera", desc: "Estrategias profesionales, preparación para cuentas fondeadas y trading algorítmico con Python." },
          ].map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg shadow-blue-500/20">
                  {s.icon}
                </div>
                <div className="text-xs text-blue-400 font-bold mb-2">PASO {s.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-[#a0a0b8] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* QUE INCLUYE - Resumen rápido sin repetir las fases */}
      <section id="contenido" className="bg-[#0a0c16] border-y border-[#2a2a40]">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
              ¿Qué incluye el curso?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "📚", title: "88 Lecciones", desc: "De cero absoluto a nivel profesional" },
              { icon: "✅", title: "319 Preguntas", desc: "Quiz al final de cada lección" },
              { icon: "📊", title: "98 Diagramas", desc: "SVGs + capturas reales TradingView" },
              { icon: "📈", title: "Simulador", desc: "Datos reales + modo Challenge prop firm" },
              { icon: "🎬", title: "Video-Lecciones", desc: "Gráficos animados con narración" },
              { icon: "🏆", title: "Gamificación", desc: "XP, niveles, badges, certificados" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-[#12142a] rounded-xl p-5 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-[10px] text-[#555]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Solo 3, más limpio */}
      <section className="bg-[#0a0c16] border-y border-[#2a2a40]">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-white text-center mb-10">
              Lo que dicen nuestros alumnos
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Carlos M.", text: "Después de gastar 1,500€ en otros cursos, encontré este GRATIS y tiene MÁS contenido que todos juntos." },
              { name: "Miguel R.", text: "Pasé mi primer challenge de FTMO gracias a la Fase 5. Las lecciones de prop firms valen más que cualquier curso de pago." },
              { name: "Ana P.", text: "No sabía NADA de trading. Empecé desde cero y en 3 meses ya operaba en demo con resultados positivos." },
            ].map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-[#12142a] rounded-xl p-6">
                  <div className="flex gap-0.5 mb-3 text-amber-400 text-sm">★★★★★</div>
                  <p className="text-[#a0a0b8] text-sm mb-4 leading-relaxed italic">"{t.text}"</p>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Solo 4 preguntas clave */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-white text-center mb-10">Preguntas Frecuentes</h2>
        </ScrollReveal>
        <div className="space-y-3">
          {[
            { q: "¿Es realmente 100% gratis?", a: "Sí. No hay pagos ocultos, no hay versión premium. Todo el contenido (88 lecciones, 319 quizzes, simulador, herramientas) está disponible sin pagar nada." },
            { q: "¿Necesito saber algo de finanzas?", a: "No. El curso empieza desde CERO absoluto. La Fase 1 te explica qué es el trading desde cero absoluto. No necesitas conocimientos previos." },
            { q: "¿Cuánto tiempo necesito?", a: "Dedicando 1-2 horas al día, puedes completar las 88 lecciones en 6-8 semanas. Recomendamos 3-6 meses de práctica en demo antes de dinero real." },
            { q: "¿Puedo vivir del trading?", a: "Sí, pero requiere educación, práctica (3-6 meses demo) y disciplina. Con cuentas fondeadas de 100K+ al 3% mensual, puede ser un ingreso serio." },
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

      {/* CTA Final - Simple */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <ScrollReveal>
          <div className="text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-white mb-3">¿Listo para empezar?</h2>
            <p className="text-[#a0a0b8] mb-6 text-sm">
              Sin registro, sin tarjeta de crédito. Empieza a aprender ahora.
            </p>
            <Link href="/curso" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-10 py-4 rounded-xl hover:opacity-90 transition font-bold shadow-lg shadow-blue-500/20">
              Empezar Gratis →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
