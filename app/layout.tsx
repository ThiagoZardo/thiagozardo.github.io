import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thiagozardo.github.io"),
  title: {
    default: "Thiago Zardo | Desenvolvedor Full Stack Freelancer",
    template: "%s | Thiago Zardo"
  },
  description:
    "Desenvolvedor full stack freelancer para sites, landing pages, sistemas web, dashboards, automacoes e integracoes com APIs.",
  applicationName: "Thiago Zardo Portfolio",
  authors: [{ name: "Thiago Zardo", url: "https://www.linkedin.com/in/thiago-jarilho-zardo/" }],
  creator: "Thiago Zardo",
  publisher: "Thiago Zardo",
  alternates: {
    canonical: "/pt",
    languages: {
      "pt-BR": "/pt",
      "en-US": "/en",
      "es-ES": "/es"
    }
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://thiagozardo.github.io/pt",
    siteName: "Thiago Zardo",
    title: "Thiago Zardo | Desenvolvedor Full Stack Freelancer",
    description:
      "Sistemas web e automacoes que economizam tempo e aumentam a produtividade de pequenas empresas.",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Thiago Zardo Portfolio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Zardo | Desenvolvedor Full Stack Freelancer",
    description:
      "Sistemas web, dashboards, automacoes e integracoes com APIs para pequenas empresas.",
    images: ["/og.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  }
};

export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
