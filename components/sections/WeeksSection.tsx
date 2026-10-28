"use client";

import React, { useRef } from "react";
import { TiltCard } from "@/components/ui/TiltCard";
import { Sparkles, Target, Filter, Award, CheckCircle2 } from "lucide-react";

export function WeeksSection() {
  const weeks = [
    {
      num: "01",
      title: "Fundamento & Ritual",
      badge: "Semana 1",
      icon: Sparkles,
      color: "border-orange/30",
      days: [
        "Dia 03: Como engajar seu time para vender mais",
        "Dia 07: O fim das desculpas no follow-up",
        "Dia 09: Os primeiros 5 minutos valem ouro",
      ],
      impact: "Elimina a preguiça matinal da equipe",
    },
    {
      num: "02",
      title: "Conversão & Pitch",
      badge: "Semana 2",
      icon: Target,
      color: "border-orange/30",
      days: [
        "Dia 12: O que seu time precisa para converter mais",
        "Dia 14: Como neutralizar o 'tá caro' na raiz",
        "Dia 15: Como seu SDR supera um Closer comum",
      ],
      impact: "Aumenta a taxa de resposta dos leads",
    },
    {
      num: "03",
      title: "Funil & Cadência",
      badge: "Semana 3",
      icon: Filter,
      color: "border-orange/30",
      days: [
        "Dia 18: Reativar leads frios sem parecer chato",
        "Dia 21: A métrica esquecida que drena vendas",
        "Dia 23: Cadência consistente de 5 toques",
      ],
      impact: "Resgata vendas dadas como perdidas",
    },
    {
      num: "04",
      title: "Fechamento & Escala",
      badge: "Semana 4",
      icon: Award,
      color: "border-orange/40",
      days: [
        "Dia 25: Pergunta definitiva de fechamento ético",
        "Dia 28: Blindagem emocional para fim de mês",
        "Dia 30: O ritual permanente de alta conversão",
      ],
      impact: "Meta batida com folga e previsibilidade",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-paper bg-noise border-b border-line/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Headline */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange block mb-2">
            Cronograma Completo
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
            30 dias divididos em <span className="text-orange">4 semanas práticas</span>
          </h2>
          <p className="text-stone text-sm sm:text-base mt-2">
            Sem enrolação teórica: cada dia traz um aprendizado executável em minutos.
          </p>
        </div>

        {/* Grid de 4 Cards Grandes com Número Gigante translúcido ao fundo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weeks.map((w, idx) => {
            const Icon = w.icon;

            return (
              <TiltCard
                key={idx}
                className="relative p-6 sm:p-7 flex flex-col justify-between min-h-[380px] bg-white group hover:border-orange/60"
              >
                {/* Número Gigante ao Fundo (200px) */}
                <span className="absolute -top-6 -right-3 font-display font-black text-[120px] sm:text-[140px] text-ink/[0.04] group-hover:text-orange/[0.07] transition-colors select-none pointer-events-none leading-none">
                  {w.num}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-extrabold text-orange uppercase tracking-wider bg-orange/10 px-2.5 py-1 rounded-md">
                      {w.badge}
                    </span>
                    <Icon className="w-5 h-5 text-orange" />
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-ink mb-5 leading-tight">
                    {w.title}
                  </h3>

                  <div className="space-y-3 border-t border-line/60 pt-4">
                    {w.days.map((day, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-ink/85 leading-snug">
                          {day}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-6 pt-3 border-t border-line/50">
                  <span className="text-[11px] font-bold text-stone group-hover:text-orange transition-colors">
                    🎯 {w.impact}
                  </span>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
