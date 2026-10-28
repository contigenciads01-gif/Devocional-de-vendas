"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL, track } from "@/lib/track";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "subtle";
  onClick?: () => void;
  trackingLocation?: string;
}

export function MagneticButton({
  children = "Quero o ritual do meu time",
  href = CHECKOUT_URL,
  className,
  variant = "primary",
  onClick,
  trackingLocation = "general",
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.22;
    const deltaY = (e.clientY - centerY) * 0.22;

    // Limit maximum magnetic pull to 10px
    const maxPull = 10;
    const x = Math.max(-maxPull, Math.min(maxPull, deltaX));
    const y = Math.max(-maxPull, Math.min(maxPull, deltaY));
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const handleClick = (e: React.MouseEvent) => {
    track("cta_click", {
      label: typeof children === "string" ? children : "cta_button",
      location: trackingLocation,
      url: href,
    });
    if (onClick) onClick();
  };

  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";

  const baseStyles = cn(
    "relative inline-flex items-center justify-center gap-2.5 font-display font-extrabold text-base tracking-tight rounded-xl px-7 py-4 overflow-hidden select-none transition-transform duration-200 ease-out group",
    isPrimary &&
      "bg-orange text-ink pulse-brand hover:brightness-105 shadow-[0_12px_30px_-8px_rgba(255,90,31,0.5)] border border-orange/40",
    isSecondary &&
      "bg-white/90 text-ink border border-line hover:border-orange hover:bg-white shadow-sm",
    variant === "subtle" &&
      "bg-transparent text-stone hover:text-ink hover:underline text-sm py-2 px-3",
    className
  );

  const content = (
    <>
      {/* Shimmer sweep effect (only on primary) */}
      {isPrimary && (
        <span
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-shimmer"
          aria-hidden="true"
        />
      )}

      {/* Button text */}
      <span className="relative z-10">{children}</span>

      {/* Sliding Arrow */}
      {variant !== "subtle" && (
        <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
      )}
    </>
  );

  return (
    <a
      ref={btnRef as React.Ref<HTMLAnchorElement>}
      href={href}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={baseStyles}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      }}
    >
      {content}
    </a>
  );
}
