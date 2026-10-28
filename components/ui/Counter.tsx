"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function Counter({
  from = 0,
  to,
  duration = 1.6,
  prefix = "",
  suffix = "",
  className = "",
}: CounterProps) {
  const [val, setVal] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          const startTime = performance.now();

          const update = (now: number) => {
            const elapsed = (now - startTime) / 1000;
            const progress = Math.min(1, elapsed / duration);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(from + (to - from) * easeProgress);

            setVal(currentVal);

            if (progress < 1) {
              requestAnimationFrame(update);
            }
          };

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}
