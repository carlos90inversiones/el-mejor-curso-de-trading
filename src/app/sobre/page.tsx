"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/Animations";

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-white mb-4">Sobre Trading Pro</h1>
            <p className="text-lg text-[#a0a0b8]">La misión detrás del mejor curso de trading del mundo</p>
          </div>
        </ScrollReveal>

        {/* Instructor */}
        <ScrollReveal delay={0.1}>
          <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-8 mb-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-40 h-40 rounded-2xl overflow-hidden shrink-0 ring-2 ring-blue-500/30">
              <img src="/instructor.jpg" alt="Instructor" className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Tu Instructor</h2>
              <p className="text-[#a0a0b8] leading-relaxed mb-4">
                Trader profesional con experiencia en Forex, índices y criptomonedas. Especializado en Smart Money Concepts,
                ICT methodology, y trading algorítmico con Python. Ha pasado múltiples challenges de prop firms y opera
                cuentas fondeadas de forma consistente.
              </p>
              <p className="text-[#a0a0b8] leading-relaxed">
                Su misión: democratizar la educación en trading haciendo el mejor contenido del mundo accesible a TODOS,
                sin importar su presupuesto. Por eso este curso es y siempre será 100% gratuito.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Mision */}
        <ScrollReveal delay={0.2}>
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Nuestra Misión</h2>
            <p className="text-[#a0a0b8] leading-relaxed mb-4">
              El 70-90% de los traders pierden dinero. No porque no sean inteligentes, sino porque nadie les enseñó correctamente.
              Los cursos de calidad cuestan 500-2000 euros, dejando fuera a la mayoría.
            </p>
            <p className="text-[#a0a0b8] leading-relaxed mb-4">
              Trading Pro nació para cambiar eso. Creemos que la educación financiera de calidad debería ser un derecho,
              no un privilegio. Por eso construimos el curso más completo, interactivo y profesional del mundo — y lo
              hicimos completamente gratuito.
            </p>
            <p className="text-white font-medium">
              Si este curso te ayuda a convertirte en un trader rentable, nuestra misión está cumplida.
            </p>
          </div>
        </ScrollReveal>

        {/* Numbers */}
        <ScrollReveal delay={0.3}>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Trading Pro en Números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { value: "88", label: "Lecciones" },
              { value: "319", label: "Preguntas Quiz" },
              { value: "98", label: "Diagramas SVG" },
              { value: "9", label: "Fases" },
              { value: "10", label: "Video-Lecciones" },
              { value: "102", label: "Términos Glosario" },
              { value: "30", label: "Flashcards" },
              { value: "12", label: "Herramientas" },
            ].map(s => (
              <div key={s.label} className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-[#a0a0b8]">{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <Link href="/curso" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-10 py-4 rounded-xl hover:opacity-90 transition font-bold">
              Empezar el Curso Gratis →
            </Link>
          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
