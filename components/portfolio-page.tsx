import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  Github,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/sections/contact-form";
import { FadeIn } from "@/components/common/motion";
import { FloatingActions } from "@/components/common/floating-actions";
import { content, locales, profile, type Locale } from "@/lib/content";
import { whatsappUrl } from "@/lib/utils";

const navIds = ["about", "services", "process", "projects", "faq", "contact"];

export function PortfolioPage({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link href={`/${locale}`} className="flex items-center gap-3 font-semibold">
            <span className="flex size-9 items-center justify-center rounded-md bg-primary text-sm font-black text-[#120d05]">
              TZ
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {t.nav.map((item, index) => (
              <a key={item} href={`#${navIds[index]}`} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/[0.06] hover:text-foreground">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 rounded-md border border-border bg-white/[0.03] p-1 sm:flex" aria-label="Language selector">
              {locales.map((item) => (
                <Link
                  key={item}
                  href={`/${item}`}
                  className={`rounded px-2.5 py-1.5 text-xs font-semibold uppercase transition ${
                    item === locale ? "bg-primary text-[#120d05]" : "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
            <Button asChild variant="ghost" size="icon" aria-label="Languages">
              <Link href={locale === "pt" ? "/en" : locale === "en" ? "/es" : "/pt"}>
                <Languages className="size-5" />
              </Link>
            </Button>
            <Button asChild className="hidden sm:inline-flex">
              <a href="#contact">{t.hero.primaryCta}</a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <FadeIn>
            <Badge className="mb-6 text-primary">
              <Sparkles className="mr-2 size-3.5" />
              {t.hero.eyebrow}
            </Badge>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-foreground sm:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-4 text-xl font-medium text-primary">{profile.role[locale]}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{t.hero.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href="#contact">
                  {t.hero.primaryCta}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="#projects">{t.hero.secondaryCta}</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-accent" />
                {profile.location[locale]}
              </span>
              <a className="inline-flex items-center gap-2 hover:text-foreground" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="size-4 text-accent" />
                LinkedIn
              </a>
              <a className="inline-flex items-center gap-2 hover:text-foreground" href={profile.github} target="_blank" rel="noreferrer">
                <Github className="size-4 text-accent" />
                GitHub
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {t.hero.metrics.map(([value, label]) => (
                <Card key={value} className="p-5">
                  <p className="text-3xl font-semibold text-primary">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{label}</p>
                </Card>
              ))}
            </div>
            <Card className="mt-4 p-5">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-accent/15 p-3 text-accent">
                  <BriefcaseBusiness className="size-6" />
                </div>
                <div>
                  <p className="font-semibold">Mosyle, SolarMarket, Control 361</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {locale === "pt"
                      ? "Experiencia em SaaS, ciberseguranca, microservicos, DevOps, mobile, sistemas legados e automacao."
                      : locale === "es"
                        ? "Experiencia en SaaS, ciberseguridad, microservicios, DevOps, mobile, sistemas legados y automatizacion."
                        : "Experience across SaaS, cybersecurity, microservices, DevOps, mobile, legacy systems and automation."}
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </section>

        <Section id="about">
          <FadeIn className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Badge>{t.about.eyebrow}</Badge>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{t.about.title}</h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-muted-foreground">{t.about.body}</p>
              <div className="mt-8 grid gap-3">
                {t.about.bullets.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Section>

        <Section id="services">
          <FadeIn>
            <h2 className="max-w-3xl text-3xl font-semibold sm:text-4xl">{t.servicesTitle}</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {t.services.map((service) => {
                const [title, description, Icon] = service as [string, string, LucideIcon];

                return (
                  <Card key={title} className="p-5 transition hover:border-primary/40 hover:bg-white/[0.055]">
                    <Icon className="size-6 text-primary" />
                    <h3 className="mt-5 font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
                  </Card>
                );
              })}
            </div>
          </FadeIn>
        </Section>

        <Section id="process">
          <FadeIn>
            <h2 className="max-w-3xl text-3xl font-semibold sm:text-4xl">{t.process.title}</h2>
            <div className="mt-10 grid gap-4 lg:grid-cols-5">
              {t.process.steps.map(([title, description], index) => (
                <Card key={title} className="p-5">
                  <span className="text-sm font-semibold text-primary">0{index + 1}</span>
                  <h3 className="mt-4 font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Section>

        <Section id="projects">
          <FadeIn>
            <h2 className="text-3xl font-semibold sm:text-4xl">{t.projectsTitle}</h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {t.projects.map((project) => (
                <Card key={project.name} className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl font-semibold">{project.name}</h3>
                    <Badge>{project.tag}</Badge>
                  </div>
                  <dl className="mt-6 grid gap-4 text-sm leading-6">
                    <ProjectRow label={locale === "pt" ? "Contexto" : locale === "es" ? "Contexto" : "Context"} value={project.context} />
                    <ProjectRow label={locale === "pt" ? "Problema" : locale === "es" ? "Problema" : "Problem"} value={project.problem} />
                    <ProjectRow label={locale === "pt" ? "Solucao" : locale === "es" ? "Solucion" : "Solution"} value={project.solution} />
                    <ProjectRow label={locale === "pt" ? "Resultados" : locale === "es" ? "Resultados" : "Results"} value={project.results} />
                  </dl>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Button asChild variant="secondary">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="size-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild variant="ghost">
                      <a href={project.demo} target={project.demo.startsWith("#") ? undefined : "_blank"} rel="noreferrer">
                        <ExternalLink className="size-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Section>

        <Section id="technologies">
          <FadeIn>
            <h2 className="text-3xl font-semibold sm:text-4xl">Stack</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {t.technologies.map((tech) => (
                <Badge key={tech} className="px-3 py-2 text-sm text-foreground">
                  {tech}
                </Badge>
              ))}
            </div>
          </FadeIn>
        </Section>

        <Section id="testimonials">
          <FadeIn>
            <div className="grid gap-5 md:grid-cols-2">
              {t.testimonials.map((testimonial) => (
                <Card key={testimonial.author} className="p-6">
                  <p className="text-lg leading-8 text-foreground">"{testimonial.quote}"</p>
                  <p className="mt-5 font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Section>

        <Section id="faq">
          <FadeIn>
            <h2 className="text-3xl font-semibold sm:text-4xl">FAQ</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {t.faq.map(([question, answer]) => (
                <Card key={question} className="p-5">
                  <h3 className="font-semibold">{question}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{answer}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Section>

        <Section id="cta">
          <FadeIn>
            <div className="rounded-lg border border-primary/25 bg-primary/[0.08] p-8 sm:p-10">
              <h2 className="max-w-4xl text-3xl font-semibold sm:text-5xl">{t.cta.title}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{t.cta.body}</p>
              <Button asChild className="mt-8">
                <a href={whatsappUrl(locale)} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" />
                  {t.cta.button}
                </a>
              </Button>
            </div>
          </FadeIn>
        </Section>

        <Section id="contact">
          <FadeIn className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">{t.contact.title}</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">{t.contact.body}</p>
              <div className="mt-8 grid gap-3 text-sm text-muted-foreground">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-foreground">
                  <Mail className="size-5 text-primary" />
                  {profile.email}
                </a>
                <a href={whatsappUrl(locale)} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-foreground">
                  <MessageCircle className="size-5 text-primary" />
                  {profile.phone}
                </a>
              </div>
            </div>
            <ContactForm locale={locale} labels={t.contact} />
          </FadeIn>
        </Section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer}</p>
          <p>© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </footer>
      <FloatingActions locale={locale} />
    </>
  );
}

function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:py-20">
      {children}
    </section>
  );
}

function ProjectRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-semibold text-foreground">{label}</dt>
      <dd className="mt-1 text-muted-foreground">{value}</dd>
    </div>
  );
}
