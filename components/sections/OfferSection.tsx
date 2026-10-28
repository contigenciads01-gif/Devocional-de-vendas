"use client";

import React, { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CHECKOUT_URL, track } from "@/lib/track";
import {
  Check,
  Sparkles,
  Zap,
  Gift,
  FileCheck,
  HelpCircle,
  MessageSquare,
  Clock,
  ShieldCheck,
  Plus,
} from "lucide-react";

export function OfferSection() {
  const [includeBump, setIncludeBump] = useState(false);

  const bonuses = [
    {
      title: "Checklist do SDR",
      desc: "Rotina matinal em 4 etapas",
      icon: FileCheck,
      val: "R$ 47",
    },
    {
      title: "10 Perguntas para o 1:1",
      desc: "Para alinhamento semanal do líder",
      icon: HelpCircle,
      val: "R$ 37",
    },
    {
      title: "Script Follow-up 5 Toques",
      desc: "Reativação de leads parados",
      icon: MessageSquare,
      val: "R$ 47",
    },
    {
      title: "Ritual de Abertura do Dia",
      desc: "Roteiro de 5 min para a call matinal",
      icon: Clock,
      val: "R$ 27",
    },
  ];

  const deliverables = [
    "E-book Devocional de Vendas completo (30 dias)",
    "Guia de aplicação rápida para equipes e gestores",
    "Acesso vitalício com atualizações futuras",
    "Garantia blindada de 7 dias ou seu dinheiro de volta",
  ];

  const finalPrice = includeBump ? 37 + 17 : 37;

  return (
    <section
      id="oferta"
      className="relative py-24 sm:py-32 bg-white border-b border-line/60 overflow-hidden"
    >
      {/* Glow laranja sutil de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Headline */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange block mb-2">
            Oferta Especial Lowticket
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
            Invista no hábito. <span className="text-orange">Colha nas metas.</span>
          </h2>
        </div>

        {/* Card Principal da Oferta */}
        <div className="rounded-3xl bg-paper border-2 border-orange/40 p-6 sm:p-10 shadow-orangeGlow relative">
          {/* Badge flutuante */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-ink font-display font-black text-xs uppercase px-4 py-1.5 rounded-full shadow-md tracking-wider">
            Acesso Imediato · Pagamento Único
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Lado Esquerdo: Entregáveis */}
            <div className="md:col-span-7">
              <span className="text-xs font-mono font-bold text-stone uppercase tracking-wider block mb-1">
                O que você recebe
              </span>
              <h3 className="font-display font-extrabold text-2xl text-ink mb-6">
                Devocional de Vendas · 30 Dias
              </h3>

              <div className="space-y-3.5 mb-8">
                {deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-md bg-orange text-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-ink">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* 4 Bônus em Grid */}
              <div className="pt-4 border-t border-line/70">
                <span className="text-[11px] font-mono font-extrabold text-orange uppercase tracking-wider block mb-3">
                  + 4 Bônus Inclusos Gratuitamente
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {bonuses.map((b, idx) => {
                    const Icon = b.icon;
                    return (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white border border-line flex items-center gap-2.5"
                      >
                        <div className="w-7 h-7 rounded-lg bg-orange/15 flex items-center justify-center shrink-0">
                          <Icon className="w-3.5 h-3.5 text-orange" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-ink truncate">
                            {b.title}
                          </div>
                          <div className="text-[10px] text-stone truncate">{b.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Lado Direito: Preço, Bump & Botão */}
            <div className="md:col-span-5 bg-white rounded-2xl border border-line p-6 flex flex-col justify-between text-center shadow-sm">
              <div>
                <span className="text-xs font-semibold text-stone line-through block">
                  De R$ 97,00
                </span>
                <div className="flex items-center justify-center gap-1 my-1">
                  <span className="font-display font-extrabold text-lg text-ink">R$</span>
                  <span className="font-display font-black text-5xl sm:text-6xl text-orange tracking-tight">
                    {finalPrice}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-stone block">
                  pagamento único · sem mensalidades
                </span>
              </div>

              {/* Order Bump Interativo */}
              <div
                onClick={() => setIncludeBump(!includeBump)}
                className={`my-5 p-3 rounded-xl border text-left cursor-pointer transition-all ${
                  includeBump
                    ? "bg-orange/10 border-orange shadow-sm"
                    : "bg-paper/80 border-line hover:border-orange/50"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    checked={includeBump}
                    onChange={() => {}}
                    className="mt-0.5 accent-orange w-4 h-4 cursor-pointer"
                  />
                  <div>
                    <span className="text-xs font-bold text-ink block leading-tight">
                      Adicionar 30 cards prontos para WhatsApp (+ R$ 17)
                    </span>
                    <span className="text-[10px] text-stone block mt-0.5">
                      Copie e cole direto no grupo da equipe todas as manhãs.
                    </span>
                  </div>
                </div>
              </div>

              {/* Botão de Checkout */}
              <MagneticButton
                href={CHECKOUT_URL}
                trackingLocation="offer_box"
                className="w-full text-base py-3.5 shadow-lg"
              >
                Garantir Por R$ {finalPrice}
              </MagneticButton>

              <div className="flex items-center justify-center gap-2 mt-4 text-[11px] font-medium text-stone">
                <ShieldCheck className="w-3.5 h-3.5 text-orange" />
                <span>Compra segura · Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
