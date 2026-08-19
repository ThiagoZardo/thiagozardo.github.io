# Portfolio Redesign — Discovery & Product Specification

Status: approved for implementation from the supplied PRD
Source of truth: PRD dated 2026-08-19

## Current state

- Next.js 15, App Router, TypeScript, Tailwind CSS 4, static export for GitHub Pages.
- One shared page component renders locale-specific content; `/pt`, `/en` and `/es` are statically generated.
- The published site and repository currently position Thiago as a freelance Full Stack Developer selling landing pages, CRMs and automations to small businesses.
- The page order is Hero → About → Services → Process → Company cards → Stack → Testimonials → FAQ → Contact.
- SEO primitives, sitemap, robots, reduced-motion support and static output already exist.

## Problems

- Positioning: headline and CTAs suggest a service vendor rather than a Software Engineer responsible for production systems.
- Hierarchy: generic services and process precede engineering responsibility.
- Evidence: Unex is represented by a generic company card; Sandbox, deployment pipeline, quality evolution, troubleshooting and AI-assisted automation are absent.
- Content: technology lists and historical company names carry more weight than applied engineering outcomes.
- Conversion: “request a quote” narrows the audience and weakens recruitment use cases.
- Credibility risk: old quantitative claims are not supported by this PRD and must not be repeated.
- Information density: many equal-weight cards create a template-like rhythm.

## Content gaps

- Clear role: Software Engineer — Full Stack, Backend & Cloud/DevOps.
- Professional summary based on end-to-end ownership.
- Prominent current Unex experience.
- Case studies using problem → responsibility → solution → qualitative impact.
- Applied troubleshooting narrative across mobile, API, business logic, database, integrations and infrastructure.
- AI agents as engineering workflow automation, not a tool badge.
- Direct paths to LinkedIn, GitHub and email for recruitment and freelance opportunities.

## Design gaps

- The existing dark/gold card grid feels closer to a generic portfolio theme than an editorial engineering profile.
- The first viewport relies on abstract metrics instead of responsibility and proof.
- Cards have insufficient visual differentiation between supporting content and primary cases.
- Navigation and language control do not adapt elegantly to small screens.

## Technical debt

- `content` is typed as `unknown`, limiting compile-time validation.
- The root document language remains `pt-BR` on English pages.
- Spanish increases translation and maintenance scope although the new requirement is PT/EN.
- `next lint` is obsolete in Next.js 15 and the script currently cannot be relied on.
- SEO schema models a `ProfessionalService`, which conflicts with the target Software Engineer position.
- Static Open Graph content is aligned to the old freelancer proposition.

## Opportunities

- Preserve the reliable static-export architecture and redesign incrementally.
- Turn the hero into a fast “responsibility map” and the Unex work into the central evidence.
- Use an editorial layout, warm neutral background, deep ink typography, restrained cobalt accent and thin technical rules.
- Reduce JavaScript and keep animation limited to accessible reveal transitions.

## Risks

- Confidentiality: describe systems and security work abstractly; expose no internal endpoints, topology, secrets, clients or vulnerabilities.
- Accuracy: no invented metrics, dates, seniority labels or job titles.
- GitHub Pages: routes and assets must remain static-export compatible.
- Scope: avoid presenting informal technical support as a formal leadership position.

## Functional requirements

- FR-001: Present Thiago as a Software Engineer working across Full Stack, Backend, Cloud and DevOps.
- FR-002: Communicate end-to-end ownership within the first viewport.
- FR-003: Place professional experience before technology lists and personal projects.
- FR-004: Give Unex, Mosyle, SolarMarket and Control 361 equal visual weight as professional experience while using current Unex responsibilities only to explain Thiago's present focus and selected engineering cases.
- FR-005: Present Sandbox Environment, Deployment Pipeline, Production Troubleshooting and Engineering Automation as selected engineering cases.
- FR-006: Every case shall express situation/problem, responsibility/action and qualitative impact.
- FR-007: Explain the quality evolution enabled by isolated validation and testing.
- FR-008: Present AI agents and Claude Code as workflow automation applied to engineering.
- FR-009: Present stack as grouped, secondary evidence.
- FR-010: Support professional PT and EN copy with an accessible language selector.
- FR-011: Provide LinkedIn, GitHub and email contact paths.
- FR-012: Preserve testimonial evidence without overstating formal leadership.
- FR-013: Remove service catalog, generic process, FAQ and unsupported metrics from the primary narrative.
- FR-014: Preserve static generation and GitHub Pages compatibility.

## Non-functional requirements

- NFR-001 Performance: static output; no hero media; no new runtime dependency; production build succeeds.
- NFR-002 Accessibility: semantic landmarks, one H1, ordered headings, visible focus, keyboard-operable controls and AA-oriented contrast.
- NFR-003 Responsiveness: useful composition at 320, 375, 390, 430, 768, 1024, 1440 and 1920 px with no horizontal overflow.
- NFR-004 SEO: unique localized metadata, canonical/alternate URLs, robots, sitemap, favicon, Open Graph and Person schema.
- NFR-005 Maintainability: content remains separate from rendering and receives explicit TypeScript types.
- NFR-006 Security: no confidential Unex details or unsafe external-link behavior.
- NFR-007 Compatibility: `next build` produces a working `out/` export with `/`, `/pt/` and `/en/`.

## Section audit and disposition

- Hero: REWRITE — role, scope and evidence-first CTA.
- About: REWRITE — concise end-to-end problem ownership.
- Services: REMOVE — conflicts with engineering/recruitment positioning.
- Process: REPLACE — use a production troubleshooting chain.
- Professional companies: KEEP/RESTRUCTURE — Unex receives the deepest treatment, followed by Mosyle, SolarMarket and Control 361 in a dedicated career sequence.
- Stack: IMPROVE — grouped and secondary.
- Testimonials: KEEP/REFINE — compact social proof.
- FAQ: REMOVE — low value for target roles.
- Contact: REWRITE — opportunities, technical collaboration and freelance.
- Old study projects: MOVE TO LABS/REMOVE from landing page; none should compete with production work.
