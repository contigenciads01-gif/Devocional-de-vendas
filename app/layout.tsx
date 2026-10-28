import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devocional de Vendas · Seu time sabe vender. Falta ritual.",
  description:
    "5 minutos por dia que engajam seu time e convertem mais leads. O ritual diário lowticket (R$ 37) para equipes comerciais de alta performance.",
  metadataBase: new URL("https://devocionaldevendas.com.br"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-simple.svg", sizes: "32x32", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Devocional de Vendas · Ritual Diário Comercial",
    description: "5 minutos por dia que engajam seu time e convertem mais leads.",
    url: "https://devocionaldevendas.com.br",
    siteName: "Devocional de Vendas",
    images: [
      {
        url: "/marca.svg",
        width: 1200,
        height: 630,
        alt: "Devocional de Vendas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devocional de Vendas · Seu time sabe vender. Falta ritual.",
    description: "5 minutos por dia que engajam seu time e convertem mais leads.",
    images: ["/marca.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Devocional de Vendas",
  "image": "https://devocionaldevendas.com.br/marca.svg",
  "description": "5 minutos por dia que engajam seu time comercial e convertem mais leads em vendas consistentes.",
  "brand": {
    "@type": "Brand",
    "name": "Devocional de Vendas"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "BRL",
    "price": "37.00",
    "availability": "https://schema.org/InStock",
    "url": "https://devocionaldevendas.com.br"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-paper text-ink selection:bg-orange selection:text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
