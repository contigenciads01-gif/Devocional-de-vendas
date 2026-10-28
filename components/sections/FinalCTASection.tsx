"use client";

import React from "react";
import Image from "next/image";
import { Monogram3D } from "@/components/three/Monogram3D";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CHECKOUT_URL } from "@/lib/track";
import { ShieldCheck, Zap } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="relative py-28 sm:py-36 bg-ink text-white overflow-hidden border-b border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Monograma D 3D Girando */}
        <div className="mb-6">
          <Monogram3D />
        </div>

        {/* Marca / Selo Empilhado Gigante */}
        <div className="relative w-64 sm:w-80 h-28 sm:h-36 mb-6">
          <Image
            src="/marca.svg"
            alt="Devocional de Vendas Marca"
            fill
            className="object-contain"
          />
        </div>

        {/* Frase de Impacto */}
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4 max-w-xl">
          Antes de vender, <span className="text-orange">alinhe a mente.</span>
        </h2>

        <p className="text-stone text-sm sm:text-base max-w-md mb-8">
          30 dias para transformar a postura, o engajamento e a taxa de conversão do seu time.
        </p>

        {/* Botão Grande */}
        <MagneticButton
          href={CHECKOUT_URL}
          trackingLocation="final_cta"
          className="text-lg px-9 py-5 shadow-2xl"
        >
          Quero o ritual do meu time · R$ 37
        </MagneticButton>

        <div className="flex items-center justify-center gap-6 mt-6 text-xs text-stone">
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-orange" />
            <span>Acesso imediato</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-orange" />
            <span>Garantia de 7 dias</span>
          </div>
        </div>
      </div>
    </section>
  );
}
