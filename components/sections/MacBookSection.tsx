"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Bookmark,
  CheckCircle2,
  TrendingUp,
  Video,
  Send,
  Users,
  CheckSquare,
  Sparkles,
  Wifi,
  Volume2,
} from "lucide-react";

export function MacBookSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const windowsData = [
    {
      title: "devocional.app · Dia 07",
      caption: "Uma palavra para começar o dia",
      icon: Sparkles,
      content: (
        <div className="p-6 flex flex-col justify-between h-full bg-paper">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-orange/15 text-orange font-bold text-xs mb-3">
              <Bookmark className="w-3 h-3 fill-orange" />
              <span>Dia 07 de 30</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl text-ink tracking-tight mb-2">
              A Palavra: Foco no Próximo Passo
            </h3>
            <p className="text-stone text-sm mb-4">
              Não tente fechar o contrato na primeira mensagem. Venda a próxima conversa.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-line shadow-sm">
            <span className="text-[11px] font-extrabold text-orange uppercase tracking-wider block mb-1">
              Compromisso do Dia
            </span>
            <p className="text-xs font-semibold text-ink">
              Mudar a pergunta final de todos os 12 follow-ups de hoje.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "CRM · Pipeline Ativo",
      caption: "Ritual que vira hábito",
      icon: TrendingUp,
      content: (
        <div className="p-6 flex flex-col justify-between h-full bg-white">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="text-xs font-bold text-stone uppercase tracking-wider">
              Taxa de Conversão da Equipe
            </div>
            <span className="text-xs font-extrabold text-green-600 bg-green-50 px-2 py-0.5 rounded">
              +158% vs mês anterior
            </span>
          </div>

          <div className="py-4">
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-xs font-semibold text-stone">Antes (Sem Ritual)</span>
              <span className="font-display font-bold text-sm text-stone">12%</span>
            </div>
            <div className="w-full h-3 bg-stone/15 rounded-full overflow-hidden mb-5">
              <div className="h-full bg-stone/40 w-[12%]" />
            </div>

            <div className="flex items-baseline justify-between mb-2">
              <span className="text-xs font-extrabold text-ink">Com Devocional Diário</span>
              <span className="font-display font-extrabold text-2xl text-orange">31%</span>
            </div>
            <div className="w-full h-3.5 bg-orange/15 rounded-full overflow-hidden">
              <div className="h-full bg-orange w-[31%] rounded-full shadow-[0_0_12px_rgba(255,90,31,0.8)]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center pt-2">
            <div className="bg-paper p-2.5 rounded-lg border border-line">
              <div className="text-xs text-stone font-medium">Leads Atendidos</div>
              <div className="text-base font-extrabold text-ink">142 leads</div>
            </div>
            <div className="bg-paper p-2.5 rounded-lg border border-line">
              <div className="text-xs text-stone font-medium">Reuniões Fechadas</div>
              <div className="text-base font-extrabold text-orange">44 vendas</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "WhatsApp · Squad Comercial",
      caption: "Do card ao time em 1 clique",
      icon: Send,
      content: (
        <div className="p-5 flex flex-col justify-between h-full bg-[#EFEAE2]">
          <div className="flex items-center gap-2 pb-3 border-b border-[#DCD6CD]">
            <div className="w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center font-bold text-xs">
              DV
            </div>
            <div>
              <div className="text-xs font-bold text-ink">Comercial · Elite 2026</div>
              <div className="text-[10px] text-green-700 font-semibold">online agora</div>
            </div>
          </div>

          <div className="space-y-3 py-2">
            <div className="bg-white rounded-lg p-3 max-w-[85%] shadow-sm border border-line/60">
              <div className="text-[10px] font-bold text-orange uppercase tracking-wider mb-1">
                Card do Dia 07
              </div>
              <p className="text-xs font-semibold text-ink leading-snug">
                "Hoje ninguém aceita 'vou pensar'. Pergunta de ouro: 'O que falta para fecharmos agora?'"
              </p>
              <span className="text-[9px] text-stone block text-right mt-1">08:01</span>
            </div>

            <div className="bg-[#DCF8C6] ml-auto rounded-lg p-2.5 max-w-[80%] shadow-sm">
              <p className="text-xs font-medium text-ink">
                Aplicando na primeira call agora! 🎯
              </p>
              <span className="text-[9px] text-stone block text-right mt-0.5">08:03</span>
            </div>
          </div>

          <div className="bg-white rounded-full px-4 py-2 flex items-center justify-between text-xs text-stone shadow-sm">
            <span>Mensagem alinhada com toda a equipe</span>
            <Send className="w-3.5 h-3.5 text-orange" />
          </div>
        </div>
      ),
    },
    {
      title: "Reunião.mov · 07:00",
      caption: "5 minutos que alinham a equipe",
      icon: Video,
      content: (
        <div className="p-4 flex flex-col justify-between h-full bg-ink text-white">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-extrabold tracking-wide uppercase">
                Ritual da Manhã · 5 min
              </span>
            </div>
            <span className="text-xs font-mono text-orange">04:48 / 05:00</span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-auto">
            {["Lucas (Líder)", "Mariana (SDR)", "Pedro (Closer)", "Beatriz (SDR)"].map(
              (name, i) => (
                <div
                  key={i}
                  className="relative h-20 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs text-white/80">
                    {name[0]}
                  </div>
                  <div className="absolute bottom-1 left-2 text-[10px] font-medium text-white/70">
                    {name}
                  </div>
                </div>
              )
            )}
          </div>

          <div className="flex items-center justify-center gap-2 pt-2 text-xs font-bold text-orange">
            <Users className="w-3.5 h-3.5" />
            <span>Time 100% blindado antes do primeiro lead</span>
          </div>
        </div>
      ),
    },
    {
      title: "Metas.xlsx · Fechamentos",
      caption: "Resultado que dá para medir",
      icon: TrendingUp,
      content: (
        <div className="p-6 flex flex-col justify-between h-full bg-white">
          <div className="flex items-center justify-between border-b border-line pb-2">
            <span className="text-xs font-bold text-stone uppercase">
              Evolução Semanal de Faturamento
            </span>
            <span className="text-xs font-extrabold text-orange">Meta Batida</span>
          </div>

          <div className="flex items-end justify-between h-36 pt-6 px-4">
            {[
              { sem: "Sem 1", h: "35%", val: "R$ 14k", color: "bg-stone/30" },
              { sem: "Sem 2", h: "55%", val: "R$ 22k", color: "bg-stone/40" },
              { sem: "Sem 3", h: "75%", val: "R$ 38k", color: "bg-orange/70" },
              { sem: "Sem 4", h: "100%", val: "R$ 51k", color: "bg-orange" },
            ].map((col, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end">
                <span className="text-[11px] font-extrabold text-ink">{col.val}</span>
                <div
                  className={`w-12 rounded-t-lg transition-all duration-500 ${col.color}`}
                  style={{ height: col.h }}
                />
                <span className="text-[10px] font-semibold text-stone">{col.sem}</span>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded-lg bg-orange/10 border border-orange/20 text-center text-xs font-bold text-ink">
            Consistência diária = +264% no final do mês
          </div>
        </div>
      ),
    },
    {
      title: "Notas · Checklist do SDR",
      caption: "O SDR que supera o Closer",
      icon: CheckSquare,
      content: (
        <div className="p-6 flex flex-col justify-between h-full bg-[#FFFDF9]">
          <div className="border-b border-line pb-2">
            <h4 className="font-display font-extrabold text-lg text-ink">
              Checklist Matinal · SDR de Alta Performance
            </h4>
            <p className="text-xs text-stone">Rotina executada em piloto automático</p>
          </div>

          <div className="space-y-2.5 my-3">
            {[
              { text: "Ler a Palavra do Dia (2 min)", checked: true },
              { text: "Definir os 3 leads prioritários de fechamento", checked: true },
              { text: "Alinhar o tom da abordagem com a equipe", checked: true },
              { text: "Executar o primeiro bloco de follow-up", checked: true },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-2 rounded-lg bg-white border border-line shadow-sm"
              >
                <div className="w-5 h-5 rounded-md bg-orange flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-xs font-semibold text-ink line-through opacity-75">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="text-right text-[11px] font-extrabold text-orange">
            4 de 4 tarefas concluídas antes das 09h ✓
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 1024;
    if (prefersReduced || isMobile) return;

    let ctx = gsap.context(() => {
      const totalWindows = windowsData.length;

      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        end: `+=${totalWindows * 650}`,
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const index = Math.min(
            totalWindows - 1,
            Math.floor(self.progress * totalWindows)
          );
          setActiveIndex(index);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [windowsData.length]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-ink text-white overflow-hidden border-b border-white/10"
    >
      {/* Background glow sutil laranja */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange/10 rounded-full blur-[140px] pointer-events-none" />

      {/* macOS Menu Bar no Topo da Seção */}
      <div className="relative z-30 w-full h-8 px-6 bg-white/5 backdrop-blur-md border-b border-white/10 flex items-center justify-between text-xs text-white/70 select-none">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-bold text-white">
            <Bookmark className="w-3.5 h-3.5 text-orange fill-orange" />
            <span>devocionalOS</span>
          </div>
          <span className="hidden sm:inline hover:text-white cursor-pointer">Arquivo</span>
          <span className="hidden sm:inline hover:text-white cursor-pointer">Visualizar</span>
          <span className="hidden sm:inline hover:text-white cursor-pointer">Equipe</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <Wifi className="w-3.5 h-3.5" />
          <Volume2 className="w-3.5 h-3.5" />
          <span className="font-mono font-bold text-orange">07:00</span>
          <span>Seg, 28 Out</span>
        </div>
      </div>

      {/* Container Pinado Desktop / Cascata Mobile */}
      <div
        ref={triggerRef}
        className="relative min-h-[90vh] lg:min-h-screen py-16 lg:py-24 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Coluna Esquerda: Legenda Sincronizada (Desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-orange text-xs font-bold mb-4 w-fit">
              <span className="w-2 h-2 rounded-full bg-orange animate-ping" />
              <span>O Ecossistema do Ritual</span>
            </div>

            {/* Headline Dinâmica Sincronizada */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4 min-h-[80px]">
              {windowsData[activeIndex].caption}
            </h2>

            <p className="text-stone text-sm sm:text-base max-w-md mb-8">
              Tudo o que sua equipe precisa para transformar minutos diários em previsibilidade
              absoluta de faturamento.
            </p>

            {/* Indicador de 6 pontinhos */}
            <div className="flex items-center gap-2.5">
              {windowsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 bg-orange"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Ver Janela ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Coluna Direita: Janelas de MacBook Empilhadas */}
          <div className="lg:col-span-7 relative h-[440px] sm:h-[480px] flex items-center justify-center">
            {windowsData.map((win, idx) => {
              const isCurrent = idx === activeIndex;
              const isPast = idx < activeIndex;
              const isFuture = idx > activeIndex;

              // Estilo de cascata
              let transformStyle = "translateY(0px) scale(1) rotateX(0deg)";
              let opacity = 1;
              let zIndex = 20;

              if (isPast) {
                const diff = activeIndex - idx;
                transformStyle = `translateY(-${diff * 22}px) scale(${1 - diff * 0.04})`;
                opacity = Math.max(0.2, 1 - diff * 0.35);
                zIndex = 10 - diff;
              } else if (isFuture) {
                const diff = idx - activeIndex;
                transformStyle = `translateY(${diff * 60}px) scale(0.96) rotateX(-4deg)`;
                opacity = 0;
                zIndex = 5;
              }

              return (
                <div
                  key={idx}
                  className="absolute inset-0 w-full max-w-[540px] mx-auto rounded-xl bg-white shadow-window border border-white/20 overflow-hidden flex flex-col transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: transformStyle,
                    opacity: opacity,
                    zIndex: zIndex,
                    pointerEvents: isCurrent ? "auto" : "none",
                  }}
                >
                  {/* macOS Title Bar */}
                  <div className="h-10 bg-[#F6F5F2] border-b border-line/80 px-4 flex items-center justify-between select-none">
                    {/* Traffic Lights */}
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                      <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                      <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                    </div>

                    {/* Window Title */}
                    <div className="font-display font-bold text-xs text-ink/80 truncate max-w-[240px]">
                      {win.title}
                    </div>

                    <div className="w-12" />
                  </div>

                  {/* Window Content */}
                  <div className="relative flex-1 overflow-hidden">
                    {win.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
