"use client";

export default function PrintButton() {
  return (
    <button onClick={() => window.print()}
      className="text-xs bg-[#1a1a2e] border border-[#2a2a40] text-[#a0a0b8] hover:text-white px-2.5 py-1 rounded-lg transition"
      title="Imprimir lección">
      🖨️ Imprimir
    </button>
  );
}
