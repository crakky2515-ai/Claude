"use client";
import { useRef, ReactNode } from "react";

export function MagneticLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left - width / 2) * 0.28).toFixed(1);
    const y = ((e.clientY - top - height / 2) * 0.28).toFixed(1);
    el.style.transform = `translate(${x}px, ${y}px)`;
  }

  function onLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ display: "inline-block", transition: "transform 0.25s cubic-bezier(0.25,0.46,0.45,0.94)" }}
    >
      {children}
    </a>
  );
}
