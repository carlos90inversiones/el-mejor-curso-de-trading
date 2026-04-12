"use client";
import { useState, useEffect } from "react";

export default function LessonNotes({ lessonId }: { lessonId: string }) {
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const all = JSON.parse(localStorage.getItem("trading-lesson-notes") || "{}");
      setNotes(all[lessonId] || "");
    } catch {/* */}
    setSaved(false);
  }, [lessonId]);

  const save = () => {
    try {
      const all = JSON.parse(localStorage.getItem("trading-lesson-notes") || "{}");
      all[lessonId] = notes;
      localStorage.setItem("trading-lesson-notes", JSON.stringify(all));
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch {/* */}
  };

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-white text-sm font-bold flex items-center gap-2">
          <span>📝</span> Mis Notas
        </h4>
        <div className="flex items-center gap-2">
          {saved && <span className="text-xs text-green-400">Guardado</span>}
          <button onClick={save} className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg transition">
            Guardar
          </button>
        </div>
      </div>
      <textarea
        value={notes}
        onChange={e => setNotes(e.target.value)}
        placeholder="Escribe tus notas sobre esta leccion aquí... (se guardan localmente)"
        className="w-full bg-[#0d0d15] border border-[#2a2a40] rounded-lg p-3 text-sm text-[#a0a0b8] outline-none focus:border-blue-500/50 resize-none min-h-[80px]"
        rows={4}
      />
    </div>
  );
}
