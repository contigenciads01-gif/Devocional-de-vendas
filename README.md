# Devocional de Vendas · Página de Vendas de Alta Conversão

Página de vendas desenvolvida com foco total em **Visual Primeiro, Texto Depois (70% visual / 30% texto)**, estética tech premium (Linear, Stripe, Notion), elementos 3D procedurais em React Three Fiber, Janelas de macOS empilhadas via ScrollTrigger, e animações fluidas com Lenis + GSAP.

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- **Node.js** v18+ ou v20+
- **npm** ou **pnpm** / **yarn**

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse no seu navegador: [http://localhost:3000](http://localhost:3000)

### 3. Rodar o build de produção
```bash
npm run build
npm start
```

---

## 🔗 Onde Colocar o Link de Checkout

O link de checkout está centralizado na variável de ambiente `NEXT_PUBLIC_CHECKOUT_URL` e no arquivo de tracking:

1. Crie ou edite o arquivo `.env.local` na raiz do projeto:
   ```env
   NEXT_PUBLIC_CHECKOUT_URL="https://seu-link-de-checkout.kiwify.com.br/exemplo"
   ```
2. Caso prefira editar diretamente no código, abra:
   [`lib/track.ts`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/lib/track.ts)
   - Na linha 2, altere o valor padrão de `CHECKOUT_URL`.
   - Todos os botões da página (Header, Hero, Oferta, CTA Final e Sticky Mobile) utilizam automaticamente essa constante e registram eventos de clique no Google Analytics 4 e Meta Pixel.

---

## ✍️ Onde Trocar Textos

Todas as seções foram divididas em componentes modulares dentro da pasta [`components/sections`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/components/sections):

| Seção | Arquivo | O que editar |
|---|---|---|
| **Header** | [`components/sections/Header.tsx`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/components/sections/Header.tsx) | Textos do botão de topo |
| **Hero** | [`components/sections/HeroSection.tsx`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/components/sections/HeroSection.tsx) | Headline principal, subheadline de 1 linha e botões |
| **Dor** | [`components/sections/PainSection.tsx`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/components/sections/PainSection.tsx) | Frases de contraste e rótulos do gráfico comparativo |
| **MacBook** | [`components/sections/MacBookSection.tsx`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/components/sections/MacBookSection.tsx) | Conteúdo das 6 janelas (App, CRM, WhatsApp, Reunião, Metas, Notas) |
| **5 Minutos** | [`components/sections/RitualSection.tsx`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/components/sections/RitualSection.tsx) | Títulos e descrições dos 5 passos (Palavra, Reflexão, Aplicação, Compromisso, Pergunta) |
| **30 Dias** | [`components/sections/WeeksSection.tsx`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/components/sections/WeeksSection.tsx) | Títulos dos dias e temas das 4 semanas |
| **Público** | [`components/sections/AudienceSection.tsx`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/components/sections/AudienceSection.tsx) | Lista "Para quem é" e "Não recomendamos para" |
| **Depoimentos** | [`components/sections/SocialProofSection.tsx`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/components/sections/SocialProofSection.tsx) | Substitua os placeholders `[SUBSTITUIR]` pelos depoimentos reais |
| **Oferta** | [`components/sections/OfferSection.tsx`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/components/sections/OfferSection.tsx) | Preços (R$ 37 / R$ 17 order bump) e lista de 4 bônus |
| **FAQ** | [`components/sections/FAQSection.tsx`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/components/sections/FAQSection.tsx) | Perguntas e respostas |
| **Footer** | [`components/sections/Footer.tsx`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/components/sections/Footer.tsx) | Links legais e dados da empresa |

---

## 🎨 Como Trocar o Modelo 3D

Todos os modelos 3D estão em [`components/three`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/components/three):

1. **Livro 3D do Hero**:
   - Arquivo: [`components/three/Book3D.tsx`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/components/three/Book3D.tsx)
   - O livro é gerado **proceduralmente** via Three.js BoxGeometry e desenha a textura da capa em Canvas 2D de alta resolução com a marca oficial.
   - **Para usar um modelo 3D GLB/GLTF externo**:
     1. Coloque seu arquivo `.glb` na pasta `/public/models/book.glb`.
     2. No componente `BookMesh`, importe `useGLTF` do `@react-three/drei`:
        ```tsx
        import { useGLTF } from "@react-three/drei";
        const { scene } = useGLTF("/models/book.glb");
        return <primitive object={scene} scale={2} />;
        ```
2. **Moeda / Medalha 3D**:
   - Arquivo: [`components/three/Medal3D.tsx`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/components/three/Medal3D.tsx)
   - Para alterar o relevo, ajuste o canvas da moeda gerado em `faceTexture`.
3. **Sol 3D**:
   - Arquivo: [`components/three/Sun3D.tsx`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/components/three/Sun3D.tsx)
4. **Monograma 3D**:
   - Arquivo: [`components/three/Monogram3D.tsx`](file:///c:/Users/thiag/Documents/Devocional%20de%20Vendas/components/three/Monogram3D.tsx)

---

## 📐 Paleta da Marca (Tokens Tailwind)

- `paper` (`#F7F4EE`): Fundo dominante claro
- `white` (`#FFFFFF`): Janelas, cards e superfícies elevadas
- `ink` (`#111111`): Texto principal e seções de impacto escuras
- `orange` (`#FF5A1F`): Ponto focal, fitilho, CTAs e gráficos
- `stone` (`#6B6B6B`): Texto secundário
- `line` (`#D9D3C7`): Bordas sutis
