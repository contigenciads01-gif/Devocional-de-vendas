"use client";

import React from "react";
import { Check, X, ShieldAlert, Sparkles } from "lucide-react";

export function AudienceSection() {
  const isFor = [
    "Líderes de times comerciais",
    "SDRs buscando bater metas",
    "Closers que querem constância",
    "Empresas com vendas ativas",
  ];

  const isNotFor = [
    "Quem busca fórmulas milagrosas",
    "Times que recusam rotina",
    "Vendedores sem disciplina diária",
    "Quem não atende clientes",
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-white border-b border-line/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Headline */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange block mb-2">
            Filtro de Aplicação
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
            Para quem é <span className="text-orange">(e para quem não é)</span>
          </h2>
        </div>

        {/* Duas Colunas Visuais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coluna 1: Para quem é */}
          <div className="p-8 rounded-3xl bg-paper/60 border border-orange/40 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-orange text-white flex items-center justify-center font-bold">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-ink">
                Feito sob medida para:
              </h3>
            </div>

            <div className="space-y-4">
              {isFor.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white border border-line shadow-xs transition-transform hover:translate-x-1"
                >
                  <div className="w-6 h-6 rounded-full bg-orange/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-orange stroke-[3]" />
                  </div>
                  <span className="font-display font-bold text-sm text-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 2: Para quem NÃO é */}
          <div className="p-8 rounded-3xl bg-paper/30 border border-line shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-stone/20 text-stone flex items-center justify-center font-bold">
                <X className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-stone">
                Não recomendamos para:
              </h3>
            </div>

            <div className="space-y-4">
              {isNotFor.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/70 border border-line/60"
                >
                  <div className="w-6 h-6 rounded-full bg-stone/10 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 text-stone stroke-[2.5]" />
                  </div>
                  <span className="font-medium text-sm text-stone">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
