import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Linkedin,
  Mail,
  MapPin,
  MoveDown
} from "lucide-react";
import { FadeIn } from "@/components/common/motion";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { content, profile, type Locale } from "@/lib/content";

export function PortfolioPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const otherLocale: Locale = locale === "pt" ? "en" : "pt";

  return (
    <>
      <a className="skip-link" href="#main">{locale === "pt" ? "Pular para o conteúdo" : "Skip to content"}</a>
      <header className="masthead">
        <div className="shell masthead-inner">
          <Link href={`/${locale}`} className="wordmark" aria-label={`${profile.name} — home`}>
            <span>TZ</span>
            <span className="wordmark-name">{profile.name}</span>
          </Link>
          <nav className="primary-nav" aria-label={locale === "pt" ? "Navegação principal" : "Primary navigation"}>
            {t.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <div className="header-actions">
            <Link className="locale-switch" href={`/${otherLocale}`} hrefLang={otherLocale} aria-label={locale === "pt" ? "View in English" : "Ver em português"}>
              <span aria-current="page">{locale.toUpperCase()}</span>
              <span aria-hidden="true">/</span>
              <strong>{otherLocale.toUpperCase()}</strong>
            </Link>
            <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero shell">
          <FadeIn className="hero-copy">
            <p className="eyebrow"><span className="status-dot" />{t.hero.eyebrow}</p>
            <p className="hero-role">{profile.name} <span>/</span> {t.hero.role}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-summary">{t.hero.summary}</p>
            <div className="button-row">
              <a className="button button-primary" href="#experience">{t.hero.primaryCta}<ArrowDown aria-hidden="true" /></a>
              <a className="button button-secondary" href="#work">{t.hero.secondaryCta}</a>
            </div>
            <p className="availability"><MapPin aria-hidden="true" />{t.hero.availability}</p>
          </FadeIn>

          <FadeIn className="range-card" delay={0.1}>
            <div className="range-head"><span>{t.hero.rangeLabel}</span><span>01—06</span></div>
            <ol>
              {t.hero.range.map((item, index) => (
                <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong>{index < t.hero.range.length - 1 && <MoveDown aria-hidden="true" />}</li>
              ))}
            </ol>
            <p>{t.hero.rangeNote}</p>
          </FadeIn>
        </section>

        <section className="profile-section section shell" aria-labelledby="profile-title">
          <FadeIn className="section-kicker"><p className="eyebrow">{t.summary.eyebrow}</p><span>01</span></FadeIn>
          <FadeIn className="profile-content">
            <h2 id="profile-title">{t.summary.title}</h2>
            <div>
              <p className="lead">{t.summary.body}</p>
              <ul className="principles">{t.summary.principles.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
            </div>
          </FadeIn>
        </section>

        <section id="experience" className="section experience-section" aria-labelledby="experience-title">
          <div className="shell">
            <FadeIn className="section-kicker section-kicker-light"><p className="eyebrow">{t.experience.eyebrow}</p><span>02</span></FadeIn>
            <FadeIn className="current-focus">
              <div>
                <p className="current-focus-label">{locale === "pt" ? "Foco atual" : "Current focus"}</p>
                <h2 id="experience-title">{t.experience.title}</h2>
              </div>
              <div className="current-focus-copy">
                <p>{t.experience.body}</p>
                <ul>
                  {t.experience.responsibilities.slice(0, 4).map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
                </ul>
              </div>
            </FadeIn>
            <FadeIn className="career-history">
              <div className="career-history-heading">
                <p className="eyebrow">{locale === "pt" ? "Trajetória" : "Career"}</p>
                <h3>{t.experience.journeyTitle}</h3>
                <p>{t.experience.journeyIntro}</p>
              </div>
              <div className="company-list">
                {t.experience.companies.map((company, index) => (
                  <article className="company-entry" key={company.name}>
                    <div className="company-index">{String(index + 1).padStart(2, "0")}</div>
                    <div className="company-name">
                      <h4>{company.name}</h4>
                      <p>{company.scope}</p>
                    </div>
                    <div className="company-description">
                      <p>{company.context}</p>
                      <p>{company.contribution}</p>
                      <div className="company-technologies">
                        {company.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                      </div>
                    </div>
                    <a href={company.website} target="_blank" rel="noreferrer" aria-label={`${company.name} website`}>
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </article>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="work" className="section shell" aria-labelledby="work-title">
          <FadeIn className="section-kicker"><p className="eyebrow">{t.cases.eyebrow}</p><span>03</span></FadeIn>
          <FadeIn className="section-heading">
            <h2 id="work-title">{t.cases.title}</h2><p>{t.cases.intro}</p>
          </FadeIn>
          <div className="case-list">
            {t.cases.items.map((item, caseIndex) => (
              <FadeIn className="case-study" key={item.number} delay={caseIndex * 0.04}>
                <div className="case-title"><span>{item.number}</span><div><p>{item.label}</p><h3>{item.title}</h3></div></div>
                <dl className="case-details">
                  {[item.problem, item.ownership, item.impact].map((value, index) => <div key={t.cases.labels[index]}><dt>{t.cases.labels[index]}</dt><dd>{value}</dd></div>)}
                </dl>
                <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="section troubleshooting-section" aria-labelledby="troubleshooting-title">
          <div className="shell">
            <FadeIn className="section-kicker section-kicker-light"><p className="eyebrow">{t.troubleshooting.eyebrow}</p><span>04</span></FadeIn>
            <FadeIn className="troubleshooting-copy"><h2 id="troubleshooting-title">{t.troubleshooting.title}</h2><p>{t.troubleshooting.body}</p></FadeIn>
            <FadeIn className="trace-panel">
              <div className="trace-panel-head"><span>{t.troubleshooting.traceLabel}</span><span>01 → 06</span></div>
              <ol className="system-chain">
                {t.troubleshooting.chain.map((item, index) => (
                  <li key={item}>
                    <span className="trace-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="trace-node" aria-hidden="true" />
                    <strong>{item}</strong>
                    <small>{t.troubleshooting.signals[index]}</small>
                  </li>
                ))}
              </ol>
              <div className="investigation-phases">
                {t.troubleshooting.phases.map((phase, index) => (
                  <div key={phase.title}><span>0{index + 1}</span><div><strong>{phase.title}</strong><p>{phase.description}</p></div></div>
                ))}
              </div>
              <p className="chain-note">{t.troubleshooting.note}</p>
            </FadeIn>
          </div>
        </section>

        <section id="capabilities" className="section shell" aria-labelledby="capabilities-title">
          <FadeIn className="section-kicker"><p className="eyebrow">{t.capabilities.eyebrow}</p><span>05</span></FadeIn>
          <FadeIn className="section-heading"><h2 id="capabilities-title">{t.capabilities.title}</h2></FadeIn>
          <div className="capability-grid">
            {t.capabilities.groups.map((group) => <FadeIn className="capability-group" key={group.title}><h3>{group.title}</h3><p>{group.description}</p><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></FadeIn>)}
          </div>
        </section>

        <section id="proof" className="section proof-section shell" aria-labelledby="proof-title">
          <FadeIn className="section-kicker"><p className="eyebrow">{t.proof.eyebrow}</p><span>06</span></FadeIn>
          <FadeIn className="section-heading"><h2 id="proof-title">{t.proof.title}</h2><p>{t.proof.intro}</p></FadeIn>
          <FadeIn><TestimonialCarousel testimonials={t.proof.quotes} locale={locale} /></FadeIn>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <FadeIn className="shell contact-inner">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2 id="contact-title">{t.contact.title}</h2>
            <p>{t.contact.body}</p>
            <div className="button-row">
              <a className="button button-inverse" href={`mailto:${profile.email}`}><Mail aria-hidden="true" />{t.contact.email}</a>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer><div className="shell footer-inner"><p>© {new Date().getFullYear()} {profile.name}</p><p>{t.footer}</p><a href="#main">{locale === "pt" ? "Voltar ao topo" : "Back to top"} ↑</a></div></footer>
    </>
  );
}
