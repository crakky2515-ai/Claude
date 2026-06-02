"use client";
import { useRef, useState, useEffect, ReactNode } from "react";

/* ── Animated counter ── */
function Counter({ target, duration = 1600 }: { target: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start: number | null = null;
        const step = (ts: number) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(Math.floor(ease * target));
          if (p < 1) requestAnimationFrame(step);
          else setVal(target);
        };
        requestAnimationFrame(step);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{val}</span>;
}

/* ── Mouse parallax section ── */
export function AboutInteractive({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const txtRef = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;  // -0.5 to 0.5
    const y = (e.clientY - top) / height - 0.5;

    // Image shifts slightly WITH mouse
    if (imgRef.current)
      imgRef.current.style.transform = `translate(${x * 10}px, ${y * 8}px)`;
    // Text shifts slightly AGAINST mouse (depth illusion)
    if (txtRef.current)
      txtRef.current.style.transform = `translate(${x * -6}px, ${y * -4}px)`;
  }

  function onLeave() {
    if (imgRef.current) imgRef.current.style.transform = "";
    if (txtRef.current) txtRef.current.style.transform = "";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
    >
      {/* Image side */}
      <div
        ref={imgRef}
        style={{ transition: "transform 0.12s cubic-bezier(0.25,0.46,0.45,0.94)" }}
      >
        {(children as React.ReactElement[])[0]}
      </div>

      {/* Text side */}
      <div
        ref={txtRef}
        style={{ transition: "transform 0.18s cubic-bezier(0.25,0.46,0.45,0.94)" }}
      >
        {(children as React.ReactElement[])[1]}
      </div>
    </div>
  );
}

/* ── Export Counter for stats ── */
export { Counter };
