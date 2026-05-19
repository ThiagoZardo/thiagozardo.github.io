import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioPage } from "@/components/portfolio-page";
import { content, locales, profile, type Locale } from "@/lib/content";
import { siteUrl } from "@/lib/utils";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  if (!locales.includes(locale)) {
    return {};
  }

  const isPt = locale === "pt";
  const title = isPt
    ? "Thiago Zardo | Desenvolvedor Full Stack Freelancer"
    : "Thiago Zardo | Freelance Full Stack Developer";
  const description = content[locale].hero.subtitle;
  const path = `/${locale}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "pt-BR": "/pt",
        "en-US": "/en"
      }
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}${path}`,
      locale: isPt ? "pt_BR" : "en_US",
      siteName: profile.name,
      title,
      description,
      images: [{ url: "/og.svg", width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.svg"]
    }
  };
}

export default async function LocalePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;

  if (!locales.includes(rawLocale as Locale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const t = content[locale];
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: profile.name,
    url: `${siteUrl}/${locale}`,
    image: `${siteUrl}/og.svg`,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR"
    },
    sameAs: [profile.github, profile.linkedin],
    areaServed: ["Brazil", "United States", "Remote"],
    serviceType: t.services.map(([service]) => service)
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <PortfolioPage locale={locale} />
    </>
  );
}
