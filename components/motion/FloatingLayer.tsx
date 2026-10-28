"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Clock, CalendarCheck, TrendingUp, Sparkles, Send, Bookmark } from "lucide-react";

export function FloatingLayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerBackRef = useRef<HTMLDivElement>(null);
  const layerMidRef = useRef<HTMLDivElement>(null);
  const layerFrontRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ctx = gsap.context(() => {
      // Scrub Parallax at 3 depth layers
      if (layerBackRef.current) {
        gsap.to(layerBackRef.current, {
          y: -140,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (layerMidRef.current) {
        gsap.to(layerMidRef.current, {
          y: -240,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }

      if (layerFrontRef.current) {
        gsap.to(layerFrontRef.current, {
          y: -360,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }
    }, containerRef);

    // Mouse parallax for hero
    const onMouseMove = (e: MouseEvent) => {
      if (!layerFrontRef.current || window.innerWidth < 768) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;

      gsap.to(layerFrontRef.current, {
        x,
        y: y - 50,
        duration: 1.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-10"
      aria-hidden="true"
    >
      {/* Camada 1: Fundo (Números gigantes translúcidos e partículas lentas) */}
      <div ref={layerBackRef} className="absolute inset-0 w-full h-full">
        {/* Número gigante ao fundo */}
        <span className="absolute top-[8%] left-[2%] font-display font-extrabold text-[180px] lg:text-[280px] text-ink/[0.03] select-none leading-none">
          07
        </span>
        <span className="absolute top-[45%] right-[3%] font-display font-extrabold text-[160px] lg:text-[260px] text-orange/[0.04] select-none leading-none">
          30
        </span>

        {/* Partículas sutis */}
        <div className="absolute top-[22%] left-[18%] w-2 h-2 rounded-full bg-orange/20" />
        <div className="absolute top-[60%] left-[8%] w-1.5 h-1.5 rounded-full bg-ink/15" />
        <div className="absolute top-[35%] right-[22%] w-2.5 h-2.5 rounded-full bg-orange/25" />
        <div className="absolute top-[75%] right-[15%] w-2 h-2 rounded-full bg-ink/10" />
      </div>

      {/* Camada 2: Meio (Chips de métrica e ícones soltos) */}
      <div ref={layerMidRef} className="absolute inset-0 w-full h-full">
        {/* Chip métrica 1 */}
        <div className="absolute top-[18%] left-[6%] hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-full shadow-float border border-line animate-float-slow">
          <span className="w-2 h-2 rounded-full bg-orange animate-ping" />
          <span className="font-display font-bold text-xs text-ink">+31% conversão</span>
        </div>

        {/* Chip métrica 2 */}
        <div className="absolute top-[48%] left-[4%] hidden lg:flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-full shadow-float border border-line animate-float-medium">
          <Clock className="w-3.5 h-3.5 text-orange" />
          <span className="font-display font-bold text-xs text-ink">5 min/dia</span>
        </div>

        {/* Chip métrica 3 */}
        <div className="absolute top-[28%] right-[8%] hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-full shadow-float border border-line animate-float-slow">
          <TrendingUp className="w-3.5 h-3.5 text-orange" />
          <span className="font-display font-bold text-xs text-ink">30 dias de ritual</span>
        </div>

        {/* Ícone fitilho flutuante */}
        <div className="absolute top-[68%] left-[22%] hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-card border border-line/80 animate-float-medium">
          <Bookmark className="w-4 h-4 text-orange fill-orange/20" />
        </div>
      </div>

      {/* Camada 3: Frente (Cards de Notificação estilo App - visual rico) */}
      <div ref={layerFrontRef} className="absolute inset-0 w-full h-full">
        {/* Notificação 1: Venda Fechada */}
        <div className="absolute top-[12%] right-[4%] max-w-[260px] bg-white rounded-xl p-3 shadow-float border border-line/90 flex items-center gap-3 animate-float-slow">
          <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-orange" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-ink leading-tight flex items-center gap-1">
              Venda fechada
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            </div>
            <div className="text-[12px] font-extrabold text-orange">R$ 4.800</div>
          </div>
        </div>

        {/* Notificação 2: Lead respondido em 3 min */}
        <div className="absolute top-[52%] right-[5%] hidden sm:flex max-w-[240px] bg-white rounded-xl p-3 shadow-float border border-line/90 items-center gap-3 animate-float-medium">
          <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4 text-orange" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-ink leading-tight">Lead respondido</div>
            <div className="text-[11px] text-stone">em 3 minutos</div>
          </div>
        </div>

        {/* Notificação 3: Reunião agendada */}
        <div className="absolute top-[70%] left-[8%] hidden lg:flex max-w-[230px] bg-white rounded-xl p-3 shadow-float border border-line/90 items-center gap-3 animate-float-slow">
          <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
            <CalendarCheck className="w-4 h-4 text-orange" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-ink leading-tight">Reunião agendada</div>
            <div className="text-[11px] text-stone">SDR alinhado no 1:1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
