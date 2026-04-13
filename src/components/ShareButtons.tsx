"use client";

export default function ShareButtons({ title, lessonId }: { title: string; lessonId: string }) {
  const url = `https://curso-trading-pro.vercel.app/leccion/${lessonId}`;
  const text = `Estoy aprendiendo trading con Trading Pro: "${title}" - El Mejor Curso de Trading del Mundo`;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-[#555]">Compartir:</span>
      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`}
        target="_blank" rel="noopener noreferrer"
        className="text-xs bg-[#1a1a2e] border border-[#2a2a40] text-[#a0a0b8] hover:text-white px-2.5 py-1 rounded-lg transition">
        𝕏 Twitter
      </a>
      <a href={`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`}
        target="_blank" rel="noopener noreferrer"
        className="text-xs bg-[#1a1a2e] border border-[#2a2a40] text-[#a0a0b8] hover:text-white px-2.5 py-1 rounded-lg transition">
        WhatsApp
      </a>
      <a href={`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`}
        target="_blank" rel="noopener noreferrer"
        className="text-xs bg-[#1a1a2e] border border-[#2a2a40] text-[#a0a0b8] hover:text-white px-2.5 py-1 rounded-lg transition">
        Telegram
      </a>
      <button onClick={() => { navigator.clipboard.writeText(url); }}
        className="text-xs bg-[#1a1a2e] border border-[#2a2a40] text-[#a0a0b8] hover:text-white px-2.5 py-1 rounded-lg transition">
        Copiar Link
      </button>
    </div>
  );
}
