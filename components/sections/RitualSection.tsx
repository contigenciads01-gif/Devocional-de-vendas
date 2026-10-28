"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sun3D } from "@/components/three/Sun3D";
import { BookOpen, Compass, Target, CheckCircle2, MessageCircleQuestion } from "lucide-react";

export function RitualSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      min: "Minuto 1",
      title: "A Palavra",
      desc: "Princípio claro e foco do dia",
      icon: BookOpen,
    },
    {
      min: "Minuto 2",
      title: "A Reflexão",
      desc: "Onde o time costuma travar",
      icon: Compass,
    },
    {
      min: "Minuto 3",
      title: "A Aplicação",
      desc: "Ação prática no primeiro contato",
      icon: Target,
    },
    {
      min: "Minuto 4",
      title: "O Compromisso",
      desc: "Meta inegociável até o fim do dia",
      icon: CheckCircle2,
    },
    {
      min: "Minuto 5",
      title: "Pergunta ao Time",
      desc: "Alinhamento rápido de 60 segundos",
      icon: MessageCircleQuestion,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight / 2)));
      const step = Math.min(steps.length - 1, Math.floor(progress * steps.length * 1.2));
      setActiveStep(step);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-white border-b border-line/60 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Headline concisa */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange block mb-2">
            Metodologia Express
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
            5 minutos. <span className="text-orange">5 passos inegociáveis.</span>
          </h2>
          <p className="text-stone text-sm sm:text-base mt-2">
            Executado antes do time abrir o WhatsApp ou discar o primeiro lead.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Esquerda: Sol 3D (Elemento de Alvorada / Ritual Matinal) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
            <div className="relative">
              <Sun3D />
              <div className="mt-4">
                <span className="text-xs font-mono font-bold text-orange tracking-widest uppercase">
                  07:00 AM · ALINHAMENTO
                </span>
                <p className="font-display font-extrabold text-xl text-ink mt-1">
                  Mente blindada para vender
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Linha Vertical que desenha e acende os 5 nós */}
          <div className="lg:col-span-7 relative pl-6 sm:pl-10">
            {/* Linha vertical base cinza */}
            <div className="absolute left-[39px] sm:left-[55px] top-6 bottom-6 w-1 bg-line/60 rounded-full" />

            {/* Linha vertical laranja que acende */}
            <div
              className="absolute left-[39px] sm:left-[55px] top-6 w-1 bg-orange rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(255,90,31,0.8)]"
              style={{
                height: `${((activeStep + 1) / steps.length) * 85}%`,
              }}
            />

            {/* Os 5 Nós */}
            <div className="space-y-6 sm:space-y-8 relative z-10">
              {steps.map((st, i) => {
                const isReached = i <= activeStep;
                const Icon = st.icon;

                return (
                  <div
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`flex items-start gap-4 sm:gap-6 p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                      isReached
                        ? "bg-paper/80 border border-orange/30 shadow-sm"
                        : "opacity-40 hover:opacity-75"
                    }`}
                  >
                    {/* Nó circular com ícone */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isReached
                          ? "bg-orange text-white shadow-lg shadow-orange/30 scale-105"
                          : "bg-paper text-stone border border-line"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Texto Legenda: Máximo 3 a 5 palavras */}
                    <div>
                      <span className="text-[11px] font-mono font-extrabold text-orange uppercase tracking-wider block">
                        {st.min}
                      </span>
                      <h3 className="font-display font-extrabold text-lg text-ink">
                        {st.title}
                      </h3>
                      <p className="text-stone text-xs sm:text-sm font-medium mt-0.5">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
