"use client";

import { useEffect, useRef, useState } from "react";

export function UnderlineDraw({ className = "" }: { className?: string }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 240 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute -bottom-2.5 left-0 w-full h-3 pointer-events-none overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d="M3 14C50 4 140 3 237 11C180 16 110 18 50 17"
        stroke="#FF5A1F"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 300,
          strokeDashoffset: inView ? 0 : 300,
          transition: "stroke-dashoffset 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s",
        }}
      />
    </svg>
  );
}
