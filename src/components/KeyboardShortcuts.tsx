"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function KeyboardShortcuts() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case "h":
          if (!e.ctrlKey && !e.metaKey) router.push("/");
          break;
        case "c":
          if (!e.ctrlKey && !e.metaKey) router.push("/curso");
          break;
        case "t":
          if (!e.ctrlKey && !e.metaKey) router.push("/herramientas");
          break;
        case "?":
          // Show shortcuts help
          const help = document.getElementById("shortcuts-help");
          if (help) help.style.display = help.style.display === "none" ? "flex" : "none";
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, pathname]);

  return (
    <div id="shortcuts-help" style={{ display: "none" }}
      className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center"
      onClick={(e) => { if (e.target === e.currentTarget) (e.target as HTMLElement).style.display = "none"; }}>
      <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6 max-w-md w-full mx-4">
        <h3 className="text-white font-bold text-lg mb-4">Atajos de Teclado</h3>
        <div className="space-y-2 text-sm">
          {[
            { key: "H", desc: "Ir al Inicio" },
            { key: "C", desc: "Ir al Curso" },
            { key: "T", desc: "Ir a Herramientas" },
            { key: "?", desc: "Mostrar/ocultar atajos" },
          ].map(s => (
            <div key={s.key} className="flex items-center justify-between">
              <span className="text-[#a0a0b8]">{s.desc}</span>
              <kbd className="bg-[#0d0d15] border border-[#2a2a40] text-white px-2 py-0.5 rounded text-xs font-mono">{s.key}</kbd>
            </div>
          ))}
        </div>
        <p className="text-[#555] text-xs mt-4">Pulsa ? para cerrar</p>
      </div>
    </div>
  );
}
