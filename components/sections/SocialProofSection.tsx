"use client";

import React from "react";
import { Medal3D } from "@/components/three/Medal3D";
import { Counter } from "@/components/ui/Counter";
import { TiltCard } from "@/components/ui/TiltCard";
import { Star, Quote, Building2, User } from "lucide-react";

export function SocialProofSection() {
  const testimonials = [
    {
      role: "Gerente Comercial [SUBSTITUIR]",
      company: "Empresa SaaS B2B [SUBSTITUIR]",
      highlight: "O alinhamento das 07h virou a chave do mês.",
      text: "[SUBSTITUIR: Insira aqui o depoimento real do cliente sobre a evolução da equipe após implementar os 5 minutos diários de ritual].",
      initials: "GC",
    },
    {
      role: "Fundador & Diretor [SUBSTITUIR]",
      company: "Agência Comercial [SUBSTITUIR]",
      highlight: "SDRs mais seguros no telefone.",
      text: "[SUBSTITUIR: Insira aqui o depoimento real sobre a melhoria de conversão e a postura dos pré-vendedores].",
      initials: "FD",
    },
    {
      role: "Líder de Inside Sales [SUBSTITUIR]",
      company: "Hub de Negócios [SUBSTITUIR]",
      highlight: "Menos ansiedade, mais fechamentos.",
      text: "[SUBSTITUIR: Insira aqui o feedback real da equipe sobre a redução de atrito e o foco nos follow-ups].",
      initials: "IS",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-paper bg-noise border-b border-line/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Headline */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange block mb-2">
            Validação & Impacto
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
            Metodologia testada em <span className="text-orange">rotinas reais</span>
          </h2>
        </div>

        {/* VISUAL DOMINANTE: Medalha 3D + 3 Contadores Grandes */}
        <div className="rounded-3xl bg-white border border-line p-8 sm:p-12 shadow-card mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Medalha 3D Giratória */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <Medal3D />
              <span className="text-[11px] font-bold text-stone uppercase tracking-wider mt-2">
                Selo de Consistência Comercial
              </span>
            </div>

            {/* 3 Contadores Gigantes */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-line">
              <div className="sm:pr-4 pt-4 sm:pt-0">
                <div className="font-display font-extrabold text-4xl sm:text-5xl text-orange mb-1">
                  <Counter to={30} duration={1.5} suffix=" dias" />
                </div>
                <div className="font-bold text-ink text-sm">Estruturados</div>
                <div className="text-xs text-stone">de ritual aplicável</div>
              </div>

              <div className="sm:px-6 pt-4 sm:pt-0">
                <div className="font-display font-extrabold text-4xl sm:text-5xl text-ink mb-1">
                  <Counter to={5} duration={1.2} suffix=" min" />
                </div>
                <div className="font-bold text-ink text-sm">Tempo Diário</div>
                <div className="text-xs text-stone">sem roubar a operação</div>
              </div>

              <div className="sm:pl-6 pt-4 sm:pt-0">
                <div className="font-display font-extrabold text-4xl sm:text-5xl text-orange mb-1">
                  <Counter to={100} duration={1.8} prefix="+" suffix="%" />
                </div>
                <div className="font-bold text-ink text-sm">Foco Operacional</div>
                <div className="text-xs text-stone">antes do primeiro lead</div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards de Depoimento com Marcação Explícita [SUBSTITUIR] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <TiltCard key={idx} className="p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-orange mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange" />
                  ))}
                </div>
                <h3 className="font-display font-bold text-base text-ink mb-2">
                  "{item.highlight}"
                </h3>
                <p className="text-xs text-stone leading-relaxed italic">
                  {item.text}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-line/60">
                <div className="w-9 h-9 rounded-full bg-paper border border-line flex items-center justify-center font-bold text-xs text-ink">
                  {item.initials}
                </div>
                <div>
                  <div className="font-bold text-xs text-ink">{item.role}</div>
                  <div className="text-[10px] text-stone">{item.company}</div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
