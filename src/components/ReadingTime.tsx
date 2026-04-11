"use client";

export default function ReadingTime({ content, quizCount }: { content: string; quizCount: number }) {
  // Strip HTML tags and estimate reading time
  const text = content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const words = text.split(" ").length;
  const readingMin = Math.ceil(words / 200); // 200 words per minute
  const quizMin = quizCount * 1; // ~1 min per quiz question
  const total = readingMin + quizMin;

  return (
    <div className="flex items-center gap-3 text-xs text-[#555] mb-4">
      <span>📖 ~{readingMin} min lectura</span>
      <span>·</span>
      <span>✅ {quizCount} preguntas (~{quizMin} min)</span>
      <span>·</span>
      <span className="text-[#a0a0b8] font-medium">Total: ~{total} min</span>
    </div>
  );
}
