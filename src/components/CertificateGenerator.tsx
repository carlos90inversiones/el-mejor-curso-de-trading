"use client";
import { useRef } from "react";

interface CertificateProps {
  phaseName: string;
  phaseNumber: number;
  score: number;
  date: string;
  color: string;
}

export default function CertificateGenerator({ phaseName, phaseNumber, score, date, color }: CertificateProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const downloadCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 1200;
    const H = 850;
    canvas.width = W;
    canvas.height = H;

    // Background
    ctx.fillStyle = "#0c0e1a";
    ctx.fillRect(0, 0, W, H);

    // Border
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, W - 60, H - 60);

    // Inner border
    ctx.strokeStyle = color + "44";
    ctx.lineWidth = 1;
    ctx.strokeRect(45, 45, W - 90, H - 90);

    // Corner decorations
    const corners = [[50, 50], [W - 50, 50], [50, H - 50], [W - 50, H - 50]];
    corners.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    });

    // Top decoration
    ctx.fillStyle = color + "22";
    ctx.fillRect(100, 80, W - 200, 3);
    ctx.fillStyle = color;
    ctx.fillRect(W / 2 - 100, 78, 200, 7);

    // Certificate text
    ctx.textAlign = "center";

    ctx.fillStyle = "#a0a0b8";
    ctx.font = "16px Inter, sans-serif";
    ctx.fillText("EL MEJOR CURSO DE TRADING DEL MUNDO", W / 2, 130);

    ctx.fillStyle = "#f0f0f5";
    ctx.font = "bold 42px Inter, sans-serif";
    ctx.fillText("CERTIFICADO DE COMPLETACION", W / 2, 200);

    // Phase badge
    ctx.fillStyle = color + "33";
    ctx.beginPath();
    ctx.arc(W / 2, 310, 60, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(W / 2, 310, 55, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 36px Inter, sans-serif";
    ctx.fillText(String(phaseNumber), W / 2, 323);

    // Phase name
    ctx.fillStyle = color;
    ctx.font = "bold 28px Inter, sans-serif";
    ctx.fillText(`FASE ${phaseNumber}`, W / 2, 410);

    ctx.fillStyle = "#f0f0f5";
    ctx.font = "bold 36px Inter, sans-serif";
    ctx.fillText(phaseName, W / 2, 460);

    // Score
    ctx.fillStyle = "#a0a0b8";
    ctx.font = "18px Inter, sans-serif";
    ctx.fillText("Puntuacion obtenida en el examen:", W / 2, 520);

    ctx.fillStyle = score >= 90 ? "#10b981" : score >= 80 ? "#f59e0b" : "#ef4444";
    ctx.font = "bold 56px Inter, sans-serif";
    ctx.fillText(`${score}%`, W / 2, 590);

    if (score >= 90) {
      ctx.fillStyle = "#10b981";
      ctx.font = "bold 20px Inter, sans-serif";
      ctx.fillText("EXCELENCIA", W / 2, 625);
    } else if (score >= 80) {
      ctx.fillStyle = "#f59e0b";
      ctx.font = "bold 20px Inter, sans-serif";
      ctx.fillText("APROBADO", W / 2, 625);
    }

    // Date
    ctx.fillStyle = "#a0a0b8";
    ctx.font = "16px Inter, sans-serif";
    ctx.fillText(`Fecha de certificacion: ${date}`, W / 2, 680);

    // Bottom decoration
    ctx.fillStyle = color + "22";
    ctx.fillRect(100, H - 120, W - 200, 3);
    ctx.fillStyle = color;
    ctx.fillRect(W / 2 - 100, H - 122, 200, 7);

    ctx.fillStyle = "#555";
    ctx.font = "12px Inter, sans-serif";
    ctx.fillText("Este certificado acredita la completacion de la fase indicada del curso de trading", W / 2, H - 80);
    ctx.fillText("elmejorcursodetrading.com", W / 2, H - 58);

    // Download
    const link = document.createElement("a");
    link.download = `certificado-fase-${phaseNumber}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div>
      <canvas ref={canvasRef} className="hidden" />
      <button onClick={downloadCertificate}
        className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-5 py-2.5 rounded-xl font-medium hover:opacity-90 transition text-sm">
        <span>🎓</span> Descargar Certificado Fase {phaseNumber}
      </button>
    </div>
  );
}

export function CertificatePreview({ phaseName, phaseNumber, score, color }: Omit<CertificateProps, "date">) {
  return (
    <div className="bg-[#0c0e1a] border-2 rounded-xl p-6 text-center" style={{ borderColor: color }}>
      <p className="text-xs text-[#a0a0b8] mb-1">CERTIFICADO</p>
      <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold text-white" style={{ background: color }}>
        {phaseNumber}
      </div>
      <p className="text-white font-bold text-lg mb-1">Fase {phaseNumber}</p>
      <p className="text-sm mb-3" style={{ color }}>{phaseName}</p>
      <p className="text-3xl font-bold mb-1" style={{ color: score >= 90 ? "#10b981" : score >= 80 ? "#f59e0b" : "#ef4444" }}>
        {score}%
      </p>
      <p className="text-xs text-[#a0a0b8]">{score >= 90 ? "Excelencia" : score >= 80 ? "Aprobado" : "No aprobado"}</p>
    </div>
  );
}
