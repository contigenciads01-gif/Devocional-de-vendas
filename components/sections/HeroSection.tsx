"use client";

import React from "react";
import { Book3D } from "@/components/three/Book3DWrapper";
import { FloatingLayer } from "@/components/motion/FloatingLayer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { UnderlineDraw } from "@/components/ui/DrawLine";
import { ShieldCheck, Sparkles, BookOpen } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/track";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-paper bg-noise flex items-center border-b border-line/40">
      {/* Floaters com Parallax em 3 Camadas */}
      <FloatingLayer />

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Coluna Texto (30% do impacto, direto ao ponto) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Tag / Pill de entrada */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-line shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-stone">
                Lowticket · R$ 37 · Equipes Comerciais
              </span>
            </div>

            {/* Headline: Máx 8 palavras com 'ritual' desenhado */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[58px] text-ink leading-[1.08] tracking-[-0.03em] mb-4">
              Seu time sabe vender. Falta{" "}
              <span className="relative text-orange whitespace-nowrap">
                ritual.
                <UnderlineDraw />
              </span>
            </h1>

            {/* Subheadline: Exatamente UMA linha, máximo 2 linhas mobile */}
            <p className="text-base sm:text-lg text-stone font-normal max-w-lg mb-8 leading-relaxed">
              5 minutos por dia que engajam seu time e convertem mais leads.
            </p>

            {/* Botões CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6">
              <MagneticButton
                href={CHECKOUT_URL}
                trackingLocation="hero_primary"
                className="w-full sm:w-auto"
              >
                Quero o ritual do meu time · R$ 37
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                href="#amostra"
                trackingLocation="hero_secondary"
                className="w-full sm:w-auto text-sm"
              >
                <BookOpen className="w-4 h-4 text-stone" />
                Ler os 3 primeiros dias, grátis
              </MagneticButton>
            </div>

            {/* Microsselo de confiança: Ícone + 3 palavras */}
            <div className="flex items-center gap-4 text-xs font-semibold text-stone/90">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-orange" />
                <span>Garantia 7 dias</span>
              </div>
              <span className="text-line">•</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-orange" />
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>

          {/* Coluna Visual Dominante: Livro 3D + Floaters (70% visual) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Círculo de glow suave ao fundo */}
            <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-orange/10 blur-[80px] pointer-events-none" />

            {/* Livro 3D Interativo */}
            <div className="relative w-full z-10">
              <Book3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
