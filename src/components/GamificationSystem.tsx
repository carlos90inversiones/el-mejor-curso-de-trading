"use client";
import { useState, useEffect, useCallback } from "react";

// ============================================================================
// GAMIFICATION: XP, Levels, Badges, Streaks
// ============================================================================

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  condition: (stats: GamificationStats) => boolean;
}

export interface GamificationStats {
  xp: number;
  level: number;
  lessonsCompleted: number;
  quizzesPassed: number;
  perfectQuizzes: number;
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string;
  totalDaysActive: number;
  simulatorTrades: number;
  simulatorProfit: number;
  journalEntries: number;
  badges: string[];
  phaseExamsPassed: number[];
}

const LEVELS = [
  { level: 1, name: "Novato", xpRequired: 0, icon: "🌱" },
  { level: 2, name: "Aprendiz", xpRequired: 100, icon: "📖" },
  { level: 3, name: "Estudiante", xpRequired: 300, icon: "📝" },
  { level: 4, name: "Practicante", xpRequired: 600, icon: "📊" },
  { level: 5, name: "Intermedio", xpRequired: 1000, icon: "📈" },
  { level: 6, name: "Avanzado", xpRequired: 1500, icon: "🎯" },
  { level: 7, name: "Experto", xpRequired: 2200, icon: "⚡" },
  { level: 8, name: "Profesional", xpRequired: 3000, icon: "💎" },
  { level: 9, name: "Master", xpRequired: 4000, icon: "👑" },
  { level: 10, name: "Leyenda", xpRequired: 5500, icon: "🏆" },
];

const ALL_BADGES: Badge[] = [
  { id: "first-lesson", name: "Primer Paso", icon: "👣", description: "Completa tu primera leccion", condition: s => s.lessonsCompleted >= 1 },
  { id: "five-lessons", name: "En Racha", icon: "🔥", description: "Completa 5 lecciones", condition: s => s.lessonsCompleted >= 5 },
  { id: "ten-lessons", name: "Imparable", icon: "🚀", description: "Completa 10 lecciones", condition: s => s.lessonsCompleted >= 10 },
  { id: "all-lessons", name: "Enciclopedia", icon: "📚", description: "Completa TODAS las lecciones", condition: s => s.lessonsCompleted >= 37 },
  { id: "first-quiz", name: "Examinado", icon: "✅", description: "Aprueba tu primer quiz (70%+)", condition: s => s.quizzesPassed >= 1 },
  { id: "ten-quizzes", name: "Cerebrito", icon: "🧠", description: "Aprueba 10 quizzes", condition: s => s.quizzesPassed >= 10 },
  { id: "perfect-quiz", name: "Perfeccionista", icon: "💯", description: "Saca 100% en un quiz", condition: s => s.perfectQuizzes >= 1 },
  { id: "streak-3", name: "Constante", icon: "📅", description: "3 dias consecutivos estudiando", condition: s => s.currentStreak >= 3 },
  { id: "streak-7", name: "Dedicado", icon: "🗓️", description: "7 dias consecutivos estudiando", condition: s => s.currentStreak >= 7 },
  { id: "streak-30", name: "Disciplinado", icon: "💪", description: "30 dias consecutivos", condition: s => s.currentStreak >= 30 },
  { id: "first-trade", name: "Primer Trade", icon: "📊", description: "Haz tu primer trade en el simulador", condition: s => s.simulatorTrades >= 1 },
  { id: "profitable-sim", name: "Rentable", icon: "💰", description: "Ten beneficio positivo en el simulador", condition: s => s.simulatorProfit > 0 && s.simulatorTrades >= 5 },
  { id: "journal-5", name: "Analista", icon: "📓", description: "Registra 5 operaciones en el diario", condition: s => s.journalEntries >= 5 },
  { id: "phase-exam", name: "Certificado", icon: "🎓", description: "Aprueba un examen de fase", condition: s => s.phaseExamsPassed.length >= 1 },
  { id: "master-trader", name: "Master Trader", icon: "👑", description: "Completa todo el curso con 80%+ en todos los exams", condition: s => s.phaseExamsPassed.length >= 7 && s.lessonsCompleted >= 35 },
];

const XP_VALUES = {
  lessonComplete: 25,
  quizPass: 15,
  quizPerfect: 30,
  dailyLogin: 10,
  simulatorTrade: 5,
  journalEntry: 10,
  phaseExam: 50,
  streakBonus3: 25,
  streakBonus7: 50,
};

function getLevel(xp: number) {
  let current = LEVELS[0];
  for (const l of LEVELS) {
    if (xp >= l.xpRequired) current = l;
    else break;
  }
  return current;
}

function getNextLevel(xp: number) {
  for (const l of LEVELS) {
    if (xp < l.xpRequired) return l;
  }
  return LEVELS[LEVELS.length - 1];
}

const DEFAULT_STATS: GamificationStats = {
  xp: 0, level: 1, lessonsCompleted: 0, quizzesPassed: 0, perfectQuizzes: 0,
  currentStreak: 0, longestStreak: 0, lastActiveDate: "", totalDaysActive: 0,
  simulatorTrades: 0, simulatorProfit: 0, journalEntries: 0, badges: [], phaseExamsPassed: [],
};

export function useGamification() {
  const [stats, setStats] = useState<GamificationStats>(DEFAULT_STATS);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [showBadge, setShowBadge] = useState<Badge | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("trading-gamification");
      if (saved) {
        const parsed = JSON.parse(saved);
        setStats({ ...DEFAULT_STATS, ...parsed });
      }
    } catch {/* */}
  }, []);

  const save = useCallback((newStats: GamificationStats) => {
    // Check streak
    const today = new Date().toISOString().split("T")[0];
    if (newStats.lastActiveDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
      if (newStats.lastActiveDate === yesterday) {
        newStats.currentStreak += 1;
      } else if (newStats.lastActiveDate !== today) {
        newStats.currentStreak = 1;
      }
      newStats.lastActiveDate = today;
      newStats.totalDaysActive += 1;
      newStats.xp += XP_VALUES.dailyLogin;
    }
    newStats.longestStreak = Math.max(newStats.longestStreak, newStats.currentStreak);

    // Check level
    const oldLevel = getLevel(stats.xp);
    const newLevel = getLevel(newStats.xp);
    if (newLevel.level > oldLevel.level) {
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 3000);
    }
    newStats.level = newLevel.level;

    // Check badges
    for (const badge of ALL_BADGES) {
      if (!newStats.badges.includes(badge.id) && badge.condition(newStats)) {
        newStats.badges.push(badge.id);
        setShowBadge(badge);
        setTimeout(() => setShowBadge(null), 3000);
      }
    }

    setStats(newStats);
    localStorage.setItem("trading-gamification", JSON.stringify(newStats));
  }, [stats.xp]);

  const addXP = useCallback((amount: number, reason: string) => {
    save({ ...stats, xp: stats.xp + amount });
  }, [stats, save]);

  const onLessonComplete = useCallback(() => {
    save({ ...stats, lessonsCompleted: stats.lessonsCompleted + 1, xp: stats.xp + XP_VALUES.lessonComplete });
  }, [stats, save]);

  const onQuizPass = useCallback((score: number) => {
    const isPerfect = score >= 100;
    const xpGain = isPerfect ? XP_VALUES.quizPerfect : XP_VALUES.quizPass;
    save({
      ...stats,
      quizzesPassed: stats.quizzesPassed + 1,
      perfectQuizzes: stats.perfectQuizzes + (isPerfect ? 1 : 0),
      xp: stats.xp + xpGain,
    });
  }, [stats, save]);

  const onSimulatorTrade = useCallback((pnl: number) => {
    save({
      ...stats,
      simulatorTrades: stats.simulatorTrades + 1,
      simulatorProfit: stats.simulatorProfit + pnl,
      xp: stats.xp + XP_VALUES.simulatorTrade,
    });
  }, [stats, save]);

  const onJournalEntry = useCallback(() => {
    save({ ...stats, journalEntries: stats.journalEntries + 1, xp: stats.xp + XP_VALUES.journalEntry });
  }, [stats, save]);

  return { stats, addXP, onLessonComplete, onQuizPass, onSimulatorTrade, onJournalEntry, showLevelUp, showBadge };
}

// ============================================================================
// UI COMPONENTS
// ============================================================================

export function XPBar({ stats }: { stats: GamificationStats }) {
  const current = getLevel(stats.xp);
  const next = getNextLevel(stats.xp);
  const progress = next.xpRequired > current.xpRequired
    ? ((stats.xp - current.xpRequired) / (next.xpRequired - current.xpRequired)) * 100
    : 100;

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{current.icon}</span>
          <div>
            <p className="text-white font-bold text-sm">Nivel {current.level}: {current.name}</p>
            <p className="text-xs text-[#a0a0b8]">{stats.xp} XP total</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-[#a0a0b8]">Siguiente: {next.name}</p>
          <p className="text-xs text-[#a0a0b8]">{next.xpRequired - stats.xp} XP restantes</p>
        </div>
      </div>
      <div className="h-3 bg-[#0d0d15] rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export function StreakDisplay({ stats }: { stats: GamificationStats }) {
  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4 text-center">
      <div className="text-3xl mb-1">{stats.currentStreak >= 7 ? "🔥" : stats.currentStreak >= 3 ? "✨" : "📅"}</div>
      <p className="text-2xl font-bold text-white">{stats.currentStreak}</p>
      <p className="text-xs text-[#a0a0b8]">Dias consecutivos</p>
      <p className="text-xs text-[#555] mt-1">Record: {stats.longestStreak}</p>
    </div>
  );
}

export function BadgesGrid({ stats }: { stats: GamificationStats }) {
  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4">
      <h3 className="text-white font-bold text-sm mb-3">Logros ({stats.badges.length}/{ALL_BADGES.length})</h3>
      <div className="grid grid-cols-5 gap-2">
        {ALL_BADGES.map(badge => {
          const earned = stats.badges.includes(badge.id);
          return (
            <div key={badge.id} className={`text-center p-2 rounded-lg transition ${earned ? "bg-[#2a2a40]" : "bg-[#0d0d15] opacity-40"}`}
              title={`${badge.name}: ${badge.description}`}>
              <div className="text-xl">{badge.icon}</div>
              <p className="text-[8px] text-[#a0a0b8] mt-0.5 truncate">{badge.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function LevelUpNotification({ level }: { level: number }) {
  const l = LEVELS.find(l => l.level === level) || LEVELS[0];
  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-bounce">
      <div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-8 py-4 rounded-2xl shadow-2xl shadow-amber-500/30 flex items-center gap-3">
        <span className="text-3xl">{l.icon}</span>
        <div>
          <p className="font-bold text-lg">Nivel {l.level}!</p>
          <p className="text-sm opacity-90">Ahora eres: {l.name}</p>
        </div>
      </div>
    </div>
  );
}

export function BadgeNotification({ badge }: { badge: Badge }) {
  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-bounce">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl shadow-2xl shadow-purple-500/30 flex items-center gap-3">
        <span className="text-3xl">{badge.icon}</span>
        <div>
          <p className="font-bold text-lg">Nuevo Logro!</p>
          <p className="text-sm opacity-90">{badge.name}: {badge.description}</p>
        </div>
      </div>
    </div>
  );
}

export function StatsOverview({ stats }: { stats: GamificationStats }) {
  const current = getLevel(stats.xp);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-3 text-center">
        <div className="text-2xl mb-1">{current.icon}</div>
        <p className="text-lg font-bold text-white">Nv.{current.level}</p>
        <p className="text-xs text-[#a0a0b8]">{current.name}</p>
      </div>
      <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-3 text-center">
        <div className="text-2xl mb-1">⚡</div>
        <p className="text-lg font-bold text-amber-400">{stats.xp}</p>
        <p className="text-xs text-[#a0a0b8]">XP Total</p>
      </div>
      <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-3 text-center">
        <div className="text-2xl mb-1">{stats.currentStreak >= 7 ? "🔥" : "📅"}</div>
        <p className="text-lg font-bold text-white">{stats.currentStreak}</p>
        <p className="text-xs text-[#a0a0b8]">Racha</p>
      </div>
      <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-3 text-center">
        <div className="text-2xl mb-1">🏅</div>
        <p className="text-lg font-bold text-white">{stats.badges.length}</p>
        <p className="text-xs text-[#a0a0b8]">Logros</p>
      </div>
    </div>
  );
}
