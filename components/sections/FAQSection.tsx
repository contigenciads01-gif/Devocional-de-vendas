"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { track } from "@/lib/track";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "O produto é de cunho religioso?",
      a: "Não. A palavra 'devocional' é uma metáfora sobre disciplina diária, compromisso matinal e ritual profissional focado em vendas.",
    },
    {
      q: "Como o material é entregue?",
      a: "Acesso digital imediato por e-mail logo após a confirmação do pagamento, com PDF otimizado para celular, computador e impressão.",
    },
    {
      q: "Serve para SDR, Closer ou Gestor?",
      a: "Para todos. Os líderes usam como pauta de 5 minutos na call matinal, e os vendedores usam como guia individual de postura.",
    },
    {
      q: "Como funciona a garantia de 7 dias?",
      a: "Você tem 7 dias corridos para testar com sua equipe. Caso não veja valor, basta solicitar o reembolso integral diretamente na plataforma.",
    },
    {
      q: "Quanto tempo por dia preciso dedicar?",
      a: "Apenas 5 minutos diários antes de iniciar as ligações e mensagens com seus clientes.",
    },
    {
      q: "O que vem no pacote de bônus?",
      a: "Checklist diário do SDR, 10 perguntas para 1:1 de liderança, script de 5 toques para follow-up e o roteiro da call matinal.",
    },
  ];

  const toggle = (idx: number) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
      track("faq_open", { question: faqs[idx].q });
    }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-white border-b border-line/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange block mb-2">
            Tire Suas Dúvidas
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-line bg-paper/50 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-base text-ink"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-line flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-orange text-white border-orange" : "text-stone"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone leading-relaxed border-t border-line/40 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
