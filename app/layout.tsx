import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thiagozardo.github.io"),
  title: {
    default: "Thiago Zardo | Software Engineer",
    template: "%s | Thiago Zardo"
  },
  description: "Software Engineer working across full stack development, backend, cloud, DevOps and production operations.",
  applicationName: "Thiago Zardo — Software Engineer",
  authors: [{ name: "Thiago Zardo", url: "https://www.linkedin.com/in/thiago-jarilho-zardo/" }],
  creator: "Thiago Zardo",
  alternates: {
    canonical: "/pt/",
    languages: { "pt-BR": "/pt/", "en-US": "/en/", "x-default": "/pt/" }
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: "https://thiagozardo.github.io/pt/",
    siteName: "Thiago Zardo",
    title: "Thiago Zardo | Software Engineer",
    description: "Full Stack, Backend, Cloud & DevOps — engineering across application, infrastructure and production.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Thiago Zardo — Software Engineer" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Zardo | Software Engineer",
    description: "Full Stack, Backend, Cloud & DevOps — from application to production.",
    images: ["/og.png"]
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#f4f1ea",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="pt-BR" suppressHydrationWarning data-scroll-behavior="smooth"><body>{children}</body></html>;
}
