"use client";
import { useRef } from "react";
import { COURSE_DATA } from "@/lib/courseData";

export default function ExportProgress({ completed, quizScores }: { completed: Set<string>; quizScores: Record<string, number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const exportAsPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 800, H = 600;
    canvas.width = W;
    canvas.height = H;

    // Background
    ctx.fillStyle = "#0c0e1a";
    ctx.fillRect(0, 0, W, H);

    // Border
    ctx.strokeStyle = "#3b82f6";
    ctx.lineWidth = 2;
    ctx.strokeRect(20, 20, W - 40, H - 40);

    // Title
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 28px Inter, sans-serif";
    ctx.fillText("Trading Pro - Mi Progreso", W / 2, 70);

    ctx.fillStyle = "#a0a0b8";
    ctx.font = "14px Inter, sans-serif";
    ctx.fillText(`Fecha: ${new Date().toLocaleDateString("es-ES")}`, W / 2, 95);

    // Stats
    const totalLessons = COURSE_DATA.reduce((t, p) => t + p.modules.reduce((mt, m) => mt + m.lessons.length, 0), 0);
    const pct = totalLessons > 0 ? Math.round((completed.size / totalLessons) * 100) : 0;

    ctx.fillStyle = "#3b82f6";
    ctx.font = "bold 48px Inter, sans-serif";
    ctx.fillText(`${pct}%`, W / 2, 160);

    ctx.fillStyle = "#a0a0b8";
    ctx.font = "16px Inter, sans-serif";
    ctx.fillText(`${completed.size} de ${totalLessons} lecciones completadas`, W / 2, 190);

    // Phase progress
    let y = 230;
    COURSE_DATA.forEach(phase => {
      const phaseLessons = phase.modules.reduce((t, m) => t + m.lessons.length, 0);
      const phaseCompleted = phase.modules.reduce((t, m) => t + m.lessons.filter(l => completed.has(l.id)).length, 0);
      const phasePct = phaseLessons > 0 ? Math.round((phaseCompleted / phaseLessons) * 100) : 0;

      ctx.textAlign = "left";
      ctx.fillStyle = phase.color;
      ctx.font = "bold 14px Inter, sans-serif";
      ctx.fillText(`Fase ${phase.number}: ${phase.title}`, 60, y);

      ctx.fillStyle = "#a0a0b8";
      ctx.font = "12px Inter, sans-serif";
      ctx.fillText(`${phaseCompleted}/${phaseLessons} (${phasePct}%)`, 600, y);

      // Progress bar
      ctx.fillStyle = "#1a1a2e";
      ctx.fillRect(60, y + 8, 660, 8);
      ctx.fillStyle = phase.color;
      ctx.fillRect(60, y + 8, 660 * (phasePct / 100), 8);

      y += 35;
    });

    // Footer
    ctx.textAlign = "center";
    ctx.fillStyle = "#555";
    ctx.font = "11px Inter, sans-serif";
    ctx.fillText("Trading Pro - El Mejor Curso de Trading del Mundo", W / 2, H - 40);

    // Download
    const link = document.createElement("a");
    link.download = `trading-pro-progreso-${new Date().toISOString().split("T")[0]}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div>
      <canvas ref={canvasRef} className="hidden" />
      <button onClick={exportAsPNG}
        className="text-xs bg-[#1a1a2e] border border-[#2a2a40] text-[#a0a0b8] hover:text-white px-3 py-1.5 rounded-lg transition flex items-center gap-1">
        📤 Exportar Progreso
      </button>
    </div>
  );
}
