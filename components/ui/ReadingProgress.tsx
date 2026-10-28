"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const current = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, current)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[999] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-orange transition-all duration-75 ease-out shadow-[0_0_8px_rgba(255,90,31,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
