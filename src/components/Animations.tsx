"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

// ============================================================================
// SCROLL REVEAL - Elements animate in when they enter viewport
// ============================================================================
export function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(el); } },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transforms: Record<string, string> = {
    up: "translateY(40px)",
    down: "translateY(-40px)",
    left: "translateX(40px)",
    right: "translateX(-40px)",
    scale: "scale(0.9)",
  };

  return (
    <div ref={ref} className={className} style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "none" : transforms[direction],
      transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
    }}>
      {children}
    </div>
  );
}

// ============================================================================
// STAGGER CHILDREN - Each child animates in sequence
// ============================================================================
export function StaggerChildren({ children, className = "", staggerDelay = 0.08 }: {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <ScrollReveal key={i} delay={i * staggerDelay}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}

// ============================================================================
// ANIMATED COUNTER - Numbers count up
// ============================================================================
export function AnimatedCounter({ value, duration = 1.5, prefix = "", suffix = "" }: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        const start = Date.now();
        const animate = () => {
          const elapsed = (Date.now() - start) / 1000;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          setDisplay(Math.round(eased * value));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

// ============================================================================
// CONFETTI BURST - Celebration effect
// ============================================================================
export function Confetti({ active, duration = 3000 }: { active: boolean; duration?: number }) {
  const [particles, setParticles] = useState<{ id: number; x: number; color: string; delay: number; size: number }[]>([]);

  useEffect(() => {
    if (!active) { setParticles([]); return; }
    const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#14b8a6", "#f97316"];
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.5,
      size: 4 + Math.random() * 8,
    }));
    setParticles(newParticles);
    const timer = setTimeout(() => setParticles([]), duration);
    return () => clearTimeout(timer);
  }, [active, duration]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {particles.map(p => (
        <div key={p.id} style={{
          position: "absolute",
          left: `${p.x}%`,
          top: "-10px",
          width: p.size,
          height: p.size,
          borderRadius: p.size > 8 ? "50%" : "2px",
          background: p.color,
          animation: `confettiFall ${1.5 + Math.random()}s ease-in ${p.delay}s forwards`,
        }} />
      ))}
      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(${360 + Math.random() * 360}deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

// ============================================================================
// GLOW CARD - Card with animated glow border on hover
// ============================================================================
export function GlowCard({ children, className = "", color = "#3b82f6", onClick }: {
  children: ReactNode;
  className?: string;
  color?: string;
  onClick?: () => void;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : undefined }}
    >
      {/* Glow effect */}
      {isHovered && (
        <div className="absolute pointer-events-none transition-opacity duration-300" style={{
          left: mousePos.x - 150,
          top: mousePos.y - 150,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
        }} />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// ============================================================================
// TYPING TEXT - Text that types out character by character
// ============================================================================
export function TypingText({ text, speed = 30, className = "" }: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done) {
        let i = 0;
        const interval = setInterval(() => {
          i++;
          setDisplayed(text.slice(0, i));
          if (i >= text.length) { clearInterval(interval); setDone(true); }
        }, speed);
        observer.unobserve(el);
        return () => clearInterval(interval);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [text, speed, done]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {!done && <span className="animate-pulse">|</span>}
    </span>
  );
}

// ============================================================================
// PULSE RING - Animated pulsing ring around an element
// ============================================================================
export function PulseRing({ children, color = "#3b82f6", active = true }: {
  children: ReactNode;
  color?: string;
  active?: boolean;
}) {
  return (
    <div className="relative inline-flex">
      {active && (
        <>
          <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: color }} />
          <div className="absolute inset-[-4px] rounded-full animate-pulse opacity-30" style={{ border: `2px solid ${color}` }} />
        </>
      )}
      <div className="relative">{children}</div>
    </div>
  );
}

// ============================================================================
// FLOAT ANIMATION - Gentle floating effect
// ============================================================================
export function Float({ children, className = "", amplitude = 8, duration = 3 }: {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}) {
  return (
    <div className={className} style={{
      animation: `float ${duration}s ease-in-out infinite`,
    }}>
      {children}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-${amplitude}px); }
        }
      `}</style>
    </div>
  );
}

// ============================================================================
// SHIMMER - Loading shimmer effect
// ============================================================================
export function Shimmer({ className = "", width = "100%", height = "20px" }: {
  className?: string;
  width?: string;
  height?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`} style={{ width, height, background: "#1a1a2e" }}>
      <div className="absolute inset-0" style={{
        background: "linear-gradient(90deg, transparent, #2a2a4033, transparent)",
        animation: "shimmer 2s infinite",
      }} />
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
