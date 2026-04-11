"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Lazy load heavy components for better performance
const AdvancedSimulator = dynamic(() => import("@/components/AdvancedSimulator"), { loading: () => <LoadingPlaceholder /> });
const PositionCalculator = dynamic(() => import("@/components/PositionCalculator"), { loading: () => <LoadingPlaceholder /> });
const TradingJournal = dynamic(() => import("@/components/TradingJournal"), { loading: () => <LoadingPlaceholder /> });
const CandlePractice = dynamic(() => import("@/components/CandlePractice"), { loading: () => <LoadingPlaceholder /> });
const PracticalProjects = dynamic(() => import("@/components/PracticalProjects"), { loading: () => <LoadingPlaceholder /> });
const Glossary = dynamic(() => import("@/components/Glossary"), { loading: () => <LoadingPlaceholder /> });
const Flashcards = dynamic(() => import("@/components/Flashcards"), { loading: () => <LoadingPlaceholder /> });

import { DIAGRAMS } from "@/components/CandleDiagrams";
import { REALISTIC_CHARTS } from "@/components/RealisticCharts";
import { CandlePatternsCheatSheet, RiskManagementCheatSheet, SMCCheatSheet, PropFirmCheatSheet } from "@/components/CheatSheets";
import VideoLesson, { VIDEO_LESSONS } from "@/components/VideoLesson";
import InstructorPresenter, { INSTRUCTOR_CLIPS } from "@/components/InstructorPresenter";

function LoadingPlaceholder() {
  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-8 flex items-center justify-center min-h-[200px]">
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-[#a0a0b8] text-sm">Cargando...</span>
      </div>
    </div>
  );
}

type Tab = "simulator" | "calculator" | "journal" | "candles" | "diagrams" | "charts" | "cheatsheets" | "projects" | "glossary" | "flashcards" | "videos";

export default function HerramientasPage() {
  const [tab, setTab] = useState<Tab>("simulator");

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "simulator", label: "Simulador", icon: "📈" },
    { id: "calculator", label: "Calculadora", icon: "🧮" },
    { id: "journal", label: "Diario", icon: "📓" },
    { id: "candles", label: "Practica Velas", icon: "🕯️" },
    { id: "diagrams", label: "Diagramas", icon: "📐" },
    { id: "charts", label: "Graficos", icon: "📊" },
    { id: "cheatsheets", label: "Cheat Sheets", icon: "📋" },
    { id: "projects", label: "Proyectos", icon: "🎯" },
    { id: "glossary", label: "Glosario", icon: "📖" },
    { id: "flashcards", label: "Flashcards", icon: "🃏" },
    { id: "videos", label: "Videos", icon: "🎬" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold text-white mb-2">Herramientas del Trader</h1>
        <p className="text-[#a0a0b8] mb-6">Todo lo que necesitas para practicar y mejorar</p>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 tabs-scroll">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition
                ${tab === t.id ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : "bg-[#1a1a2e] text-[#a0a0b8] hover:text-white border border-[#2a2a40]"}`}>
              <span>{t.icon}</span> {t.label}
            </button>
          ))}
        </div>

        {tab === "simulator" && <AdvancedSimulator />}
        {tab === "calculator" && <PositionCalculator />}
        {tab === "journal" && <TradingJournal />}
        {tab === "candles" && <CandlePractice />}
        {tab === "diagrams" && (
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Diagramas Interactivos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(DIAGRAMS).map(([key, Diagram]) => <Diagram key={key} />)}
            </div>
          </div>
        )}
        {tab === "charts" && (
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Graficos Realistas Anotados</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(REALISTIC_CHARTS).map(([key, Chart]) => <Chart key={key} />)}
            </div>
          </div>
        )}
        {tab === "cheatsheets" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CandlePatternsCheatSheet /><RiskManagementCheatSheet /><SMCCheatSheet /><PropFirmCheatSheet />
          </div>
        )}
        {tab === "projects" && <PracticalProjects />}
        {tab === "glossary" && <Glossary />}
        {tab === "flashcards" && <Flashcards />}
        {tab === "videos" && (
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Clases con tu Instructor</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
              {INSTRUCTOR_CLIPS.map(clip => <InstructorPresenter key={clip.id} {...clip} />)}
            </div>
            <h3 className="text-xl font-bold text-white mb-6">Video-Lecciones con Graficos Animados</h3>
            <div className="space-y-8">
              {Object.entries(VIDEO_LESSONS).map(([key, lesson]) => <VideoLesson key={key} {...lesson} />)}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
