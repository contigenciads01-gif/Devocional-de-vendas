"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Marquee({
  reverse = false,
  className = "",
}: {
  reverse?: boolean;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ctx = gsap.context(() => {
      if (!trackRef.current) return;

      // Base direction from reverse prop
      const dir = reverse ? 1 : -1;

      // Smooth scroll direction trigger
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          if (!trackRef.current) return;
          // Dynamically tilt or speed up slightly with scroll speed
          const speedFactor = Math.min(Math.abs(self.getVelocity() / 300), 2.5);
          gsap.to(trackRef.current, {
            timeScale: (1 + speedFactor) * (self.direction === -1 ? -dir : dir),
            duration: 0.25,
            overwrite: "auto",
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reverse]);

  const items = [
    "Disciplina vence talento",
    "Vendas se constroem na rotina",
    "5 minutos por dia",
    "Menos ansiedade, mais fechamento",
    "O ritual do time comercial",
    "Execução diária consistente",
  ];

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden py-4 border-y border-line/60 bg-paper/60 select-none ${className}`}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform animate-marquee"
      >
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-6 mx-4">
            <span className="font-display font-extrabold text-sm md:text-base uppercase tracking-widest text-ink/75">
              {text}
            </span>
            <span className="w-2 h-2 rounded-full bg-orange" />
          </div>
        ))}
      </div>
    </div>
  );
}
