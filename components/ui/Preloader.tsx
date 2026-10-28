"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [stage, setStage] = useState<"initial" | "ribbon" | "open" | "done">("initial");

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setStage("done");
      return;
    }

    const t1 = setTimeout(() => setStage("ribbon"), 300);
    const t2 = setTimeout(() => setStage("open"), 800);
    const t3 = setTimeout(() => setStage("done"), 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        stage === "open" ? "opacity-0 scale-105 pointer-events-none" : "opacity-100"
      }`}
      style={{
        backgroundColor: "#111111",
      }}
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Monograma D */}
        <div className="relative w-20 h-20 rounded-2xl bg-orange flex items-center justify-center shadow-2xl transition-transform duration-300">
          <span className="text-white text-5xl font-black font-display select-none">
            D
          </span>

          {/* Marcador de página que 'cai' sobre a base direita */}
          <div
            className={`absolute right-2 -bottom-5 w-4 h-7 bg-ink transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              stage === "ribbon" || stage === "open"
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)",
            }}
          />
        </div>

        <div className="mt-4 flex items-center space-x-1">
          <div className="h-1 w-8 bg-orange/40 rounded-full overflow-hidden">
            <div className="h-full bg-orange animate-[shimmer_1.2s_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
}
