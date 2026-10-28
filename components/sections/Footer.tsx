import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-paper py-16 border-t border-line/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-line/60">
          {/* Logo */}
          <div className="relative h-10 w-44">
            <Image
              src="/logo.svg"
              alt="devocional. DE VENDAS"
              fill
              className="object-contain object-left"
            />
          </div>

          {/* Tagline da marca */}
          <div className="font-display font-extrabold text-sm text-ink/80 tracking-wide uppercase">
            Vendas se constroem na rotina.
          </div>

          {/* Links Legais */}
          <div className="flex items-center gap-6 text-xs text-stone font-medium">
            <a href="#" className="hover:text-ink transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-ink transition-colors">Privacidade</a>
            <a href="#" className="hover:text-ink transition-colors">Suporte</a>
          </div>
        </div>

        {/* Aviso Legal de Resultados */}
        <div className="pt-8 text-center text-[11px] text-stone leading-relaxed max-w-2xl mx-auto">
          Este produto não garante a obtenção de resultados financeiros nem metas comerciais sem a aplicação prática e constante das metodologias apresentadas. Qualquer referência ao desempenho de estratégias não deve ser interpretada como uma promessa de ganhos.
          <p className="mt-2 text-stone/70">
            © {new Date().getFullYear()} Devocional de Vendas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
