"use client";

import React, { useEffect, useState } from "react";
import { CHECKOUT_URL, track } from "@/lib/track";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear once user scrolls beyond hero (approx 450px)
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-line shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-stone uppercase tracking-wider">
            Devocional de Vendas
          </span>
          <div className="flex items-baseline gap-1">
            <span className="font-display font-black text-xl text-ink">R$ 37</span>
            <span className="text-[10px] text-stone">pagamento único</span>
          </div>
        </div>

        <a
          href={CHECKOUT_URL}
          onClick={() =>
            track("cta_click", {
              label: "Quero o ritual (sticky mobile)",
              location: "sticky_mobile",
            })
          }
          className="flex-1 max-w-[200px] bg-orange text-ink font-display font-extrabold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <span>Garantir Acesso</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
