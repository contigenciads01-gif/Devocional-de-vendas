"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CHECKOUT_URL, track } from "@/lib/track";
import { ArrowRight } from "lucide-react";

export function Header() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-line/70 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Wordmark */}
        <a
          href="#"
          className="flex items-center group transition-transform duration-200 hover:scale-[1.02]"
          aria-label="Devocional de Vendas Home"
        >
          <div className="relative h-10 w-44">
            <Image
              src="/logo.svg"
              alt="devocional. DE VENDAS"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </a>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href={CHECKOUT_URL}
            onClick={() =>
              track("cta_click", {
                label: "Quero o ritual do meu time",
                location: "header",
              })
            }
            className="hidden sm:inline-flex items-center gap-2 bg-orange text-ink font-display font-extrabold text-sm px-5 py-2.5 rounded-xl hover:brightness-105 transition-all shadow-sm group"
          >
            <span>Quero o ritual do meu time</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Mobile minimal icon button */}
          <a
            href={CHECKOUT_URL}
            onClick={() =>
              track("cta_click", {
                label: "Quero o ritual (mobile header)",
                location: "header_mobile",
              })
            }
            className="sm:hidden inline-flex items-center justify-center bg-orange text-ink font-display font-black text-xs px-3.5 py-2 rounded-lg"
          >
            R$ 37
          </a>
        </div>
      </div>
    </header>
  );
}
