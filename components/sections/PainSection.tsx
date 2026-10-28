"use client";

import React, { useEffect, useRef, useState } from "react";
import { Zap, Repeat, TrendingDown, ArrowUpRight } from "lucide-react";

export function PainSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-paper bg-noise border-b border-line/60 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Headline ultra-concisa (9 palavras) */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange block mb-3">
            O Ciclo da Inconsistência
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-ink leading-tight tracking-tight">
            Treinamento empolga uma semana.{" "}
            <span className="text-orange">Ritual dura o ano todo.</span>
          </h2>
        </div>

        {/* VISUAL DOMINANTE: Gráfico Comparativo Animado */}
        <div className="relative rounded-3xl bg-white border border-line p-6 sm:p-10 shadow-card">
          {/* Cabeçalho do Gráfico com Legendas */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-line/60">
            <div className="flex items-center gap-6 text-xs sm:text-sm font-bold">
              {/* Linha 1: Sem Ritual */}
              <div className="flex items-center gap-2 text-stone">
                <span className="w-4 h-0.5 border-t-2 border-dashed border-stone" />
                <span>Treinamento Comum (Empolgação)</span>
              </div>
              {/* Linha 2: Com Ritual */}
              <div className="flex items-center gap-2 text-ink">
                <span className="w-4 h-1 bg-orange rounded-full" />
                <span className="font-extrabold text-orange">Com Devocional (Hábito Diário)</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-stone">
              <Repeat className="w-3.5 h-3.5 text-orange" />
              <span>Medido em 30 dias</span>
            </div>
          </div>

          {/* SVG Canvas do Gráfico */}
          <div className="relative w-full h-[260px] sm:h-[340px] pt-8">
            <svg
              viewBox="0 0 900 320"
              className="w-full h-full overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gradiente sob a linha do ritual */}
                <linearGradient id="ritualGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF5A1F" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#FF5A1F" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines Horizontais */}
              <line x1="40" y1="60" x2="860" y2="60" stroke="#EAE6DE" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="40" y1="130" x2="860" y2="130" stroke="#EAE6DE" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="40" y1="200" x2="860" y2="200" stroke="#EAE6DE" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="40" y1="270" x2="860" y2="270" stroke="#D9D3C7" strokeWidth="1.5" />

              {/* Rótulos das Semanas */}
              <text x="60" y="300" fill="#6B6B6B" fontSize="13" fontWeight="600">Semana 1</text>
              <text x="320" y="300" fill="#6B6B6B" fontSize="13" fontWeight="600">Semana 2</text>
              <text x="580" y="300" fill="#6B6B6B" fontSize="13" fontWeight="600">Semana 3</text>
              <text x="820" y="300" fill="#6B6B6B" fontSize="13" fontWeight="600">Semana 4</text>

              {/* Área preenchida sob a linha laranja do ritual */}
              <path
                d="M 60 250 C 240 230, 480 140, 840 70 L 840 270 L 60 270 Z"
                fill="url(#ritualGradient)"
                opacity={inView ? 1 : 0}
                style={{ transition: "opacity 1.2s ease 0.6s" }}
              />

              {/* Curva 1: Treinamento tradicional (sobe e cai a zero) */}
              <path
                d="M 60 240 Q 200 60, 300 70 T 520 230 T 840 260"
                stroke="#A8A29E"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                style={{
                  strokeDasharray: 900,
                  strokeDashoffset: inView ? 0 : 900,
                  transition: "stroke-dashoffset 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />

              {/* Curva 2: Com Ritual (Constância ascendente) */}
              <path
                d="M 60 250 C 240 230, 480 140, 840 70"
                stroke="#FF5A1F"
                strokeWidth="4.5"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 900,
                  strokeDashoffset: inView ? 0 : 900,
                  transition: "stroke-dashoffset 1.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s",
                }}
              />

              {/* Ponto de pico da curva comum (despenca) */}
              {inView && (
                <g className="animate-fade-in" style={{ animationDelay: "1s" }}>
                  <circle cx="250" cy="68" r="5" fill="#6B6B6B" />
                  <rect x="200" y="25" width="105" height="26" rx="6" fill="#111111" />
                  <text x="252" y="42" fill="#FFFFFF" fontSize="11" fontWeight="700" textAnchor="middle">
                    Pico passageiro
                  </text>
                </g>
              )}

              {/* Ponto final da curva do ritual (crescimento contínuo) */}
              {inView && (
                <g className="animate-fade-in" style={{ animationDelay: "1.4s" }}>
                  <circle cx="840" cy="70" r="7" fill="#FF5A1F" />
                  <circle cx="840" cy="70" r="14" fill="#FF5A1F" opacity="0.3" className="animate-ping" />
                  <rect x="730" y="25" width="128" height="28" rx="6" fill="#FF5A1F" />
                  <text x="794" y="43" fill="#111111" fontSize="12" fontWeight="800" textAnchor="middle">
                    +31% Conversão
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* 3 Métricas Rápidas: Ícone + Número + 3 Palavras */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-6 border-t border-line/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                <TrendingDown className="w-5 h-5 text-stone" />
              </div>
              <div>
                <div className="font-display font-extrabold text-lg text-ink">84% esquecem</div>
                <div className="text-xs text-stone">em 15 dias</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                <Repeat className="w-5 h-5 text-orange" />
              </div>
              <div>
                <div className="font-display font-extrabold text-lg text-orange">5 min diários</div>
                <div className="text-xs text-stone">blindam o hábito</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-5 h-5 text-orange" />
              </div>
              <div>
                <div className="font-display font-extrabold text-lg text-ink">31% a mais</div>
                <div className="text-xs text-stone">de leads fechados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
