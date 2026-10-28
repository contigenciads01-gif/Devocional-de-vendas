"use client";

import React from "react";
import { ShieldCheck, RotateCcw } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="relative py-20 bg-paper bg-noise border-b border-line/60 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-white border border-line p-8 sm:p-12 shadow-card flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Selo Circular Giratório SVG */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0 flex items-center justify-center">
            {/* Texto circular giratório */}
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
              <svg viewBox="0 0 160 160" className="w-full h-full">
                <path
                  id="circlePath"
                  d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  fill="none"
                />
                <text className="text-[10.5px] font-extrabold uppercase tracking-[0.24em] fill-ink">
                  <textPath href="#circlePath">
                    • 7 DIAS DE GARANTIA INCONDICIONAL • RISCO ZERO
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Centro do Selo */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-orange flex flex-col items-center justify-center text-white shadow-lg shadow-orange/30">
              <span className="font-display font-black text-2xl sm:text-3xl leading-none">
                7
              </span>
              <span className="text-[9px] font-extrabold uppercase tracking-wider">
                DIAS
              </span>
            </div>
          </div>

          {/* Texto de Garantia (Direto ao ponto, 2 linhas) */}
          <div className="text-center md:text-left">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange block mb-1">
              Garantia Blindada
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight mb-2">
              Teste com seu time por 7 dias inteiros.
            </h3>
            <p className="text-stone text-sm leading-relaxed max-w-lg mb-4">
              Se você ou seu time não sentirem mais clareza e ritmo no primeiro contato,
              basta um único e-mail para receber 100% do seu dinheiro de volta. Sem perguntas.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange">
              <RotateCcw className="w-4 h-4" />
              <span>Devolução simples em 1 clique</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
