import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioPage } from "@/components/portfolio-page";
import { locales, profile, type Locale } from "@/lib/content";
import { siteUrl } from "@/lib/utils";

type PageProps = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!locales.includes(rawLocale as Locale)) return {};
  const locale = rawLocale as Locale;
  const isPt = locale === "pt";
  const title = isPt ? "Thiago Zardo | Software Engineer — Full Stack, Backend & DevOps" : "Thiago Zardo | Software Engineer — Full Stack, Backend & Cloud";
  const description = isPt
    ? "Engenheiro de software atuando entre aplicação, backend, mobile, AWS, infraestrutura, CI/CD e produção."
    : "Software Engineer working across applications, backend, mobile, AWS, infrastructure, CI/CD and production.";
  const path = `/${locale}/`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { "pt-BR": "/pt/", "en-US": "/en/", "x-default": "/pt/" }
    },
    openGraph: {
      type: "profile",
      url: `${siteUrl}${path}`,
      locale: isPt ? "pt_BR" : "en_US",
      siteName: profile.name,
      title,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Thiago Zardo — Software Engineer" }]
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] }
  };
}

export default async function LocalePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: `${siteUrl}/${locale}/`,
    image: `${siteUrl}/og.png`,
    email: `mailto:${profile.email}`,
    jobTitle: "Software Engineer",
    address: { "@type": "PostalAddress", addressCountry: "BR" },
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: ["Software Engineering", "Backend Development", "Cloud Computing", "DevOps", "Node.js", "TypeScript", "React", "React Native", "AWS", "CI/CD"]
  };

  const documentLanguage = locale === "pt" ? "pt-BR" : "en-US";

  return <>
    <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(documentLanguage)}` }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <PortfolioPage locale={locale} />
  </>;
}
