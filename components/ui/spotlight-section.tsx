"use client";
import { useState, ReactNode } from "react";

export function SpotlightSection({
  children,
  className = "",
  color = "rgba(201,163,92,0.10)",
  radius = 380,
}: {
  children: ReactNode;
  className?: string;
  color?: string;
  radius?: number;
}) {
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`relative ${className}`}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
        setVisible(true);
      }}
      onMouseLeave={() => setVisible(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          opacity: visible ? 1 : 0,
          background: `radial-gradient(${radius}px circle at ${pos.x}px ${pos.y}px, ${color}, transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
}
