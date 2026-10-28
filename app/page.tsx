import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Preloader } from "@/components/ui/Preloader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ReadingProgress } from "@/components/ui/ReadingProgress";
import { Marquee } from "@/components/ui/Marquee";

import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainSection } from "@/components/sections/PainSection";
import { MacBookSection } from "@/components/sections/MacBookSection";
import { RitualSection } from "@/components/sections/RitualSection";
import { WeeksSection } from "@/components/sections/WeeksSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/sections/StickyMobileCTA";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <CustomCursor />
      <ReadingProgress />

      <main className="relative min-h-screen bg-paper text-ink overflow-x-hidden">
        {/* Header fixo com animação de scroll */}
        <Header />

        {/* 1. Hero com Livro 3D + Floaters + 3 Chips */}
        <HeroSection />

        {/* Separador de transição Marquee */}
        <Marquee />

        {/* 2. Dor: Gráfico de Retenção Animado */}
        <PainSection />

        {/* 3. Seção Assinatura: Janelas de MacBook Empilhadas (Ink) */}
        <MacBookSection />

        {/* 4. O Ritual dos 5 Minutos + Sol 3D */}
        <RitualSection />

        {/* Marquee invertido */}
        <Marquee reverse />

        {/* 5. 30 Dias em 4 Semanas */}
        <WeeksSection />

        {/* 6. Para Quem É / Não É */}
        <AudienceSection />

        {/* 7. Prova: Medalha 3D + Contadores */}
        <SocialProofSection />

        {/* 8. Oferta R$ 37 + 4 Bônus + Order Bump */}
        <OfferSection />

        {/* 9. Garantia Circular Giratória */}
        <GuaranteeSection />

        {/* 10. FAQ com Acordeão */}
        <FAQSection />

        {/* 11. CTA Final Escura (Ink) + Monograma 3D */}
        <FinalCTASection />

        {/* 12. Footer */}
        <Footer />

        {/* Mobile Sticky CTA */}
        <StickyMobileCTA />
      </main>
    </SmoothScroll>
  );
}
