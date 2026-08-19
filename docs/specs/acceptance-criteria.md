# Acceptance Criteria & Implementation Plan

## Acceptance criteria

### Hero

```gherkin
GIVEN a visitor opens the portfolio
WHEN the first viewport renders
THEN the visitor can identify Thiago as a Software Engineer
AND understand his scope across application, backend and production
AND access experience, LinkedIn, GitHub and email paths.
```

### Experience and cases

```gherkin
GIVEN a visitor reviews professional evidence
WHEN they reach the experience and selected work sections
THEN Unex is the primary context
AND Mosyle, SolarMarket and Control 361 remain visible as professional experience
AND Sandbox and deployment pipeline responsibilities are explicit
AND testing, troubleshooting, security and AI automation are represented
AND no invented metric or confidential implementation detail is shown.
```

### Localization

```gherkin
GIVEN either /pt/ or /en/ is opened
WHEN the visitor changes language
THEN they reach the equivalent localized route
AND the copy and metadata use professional natural language.
```

### Mobile

```gherkin
GIVEN the portfolio is opened between 320px and 430px
WHEN every section is navigated
THEN no page content overflows horizontally
AND controls remain usable
AND text remains readable without zooming.
```

### Technical delivery

```gherkin
GIVEN the production build is executed
WHEN Next.js completes the static export
THEN root, PT and EN HTML are generated
AND sitemap, robots, icon and social preview assets resolve.
```

## Implementation plan

- TASK-001 Audit current repository and production page → FR-001, FR-003, NFR-005.
- TASK-002 Define content, information architecture and project disposition → FR-003–FR-013.
- TASK-003 Define visual and responsive system → NFR-002, NFR-003.
- TASK-004 Refactor typed bilingual content → FR-001–FR-012, NFR-005.
- TASK-005 Implement hero, summary and experience → FR-001–FR-004.
- TASK-006 Implement selected engineering cases → FR-005–FR-008.
- TASK-007 Implement troubleshooting, stack, proof and contact → FR-009–FR-012.
- TASK-008 Update localized SEO, Person schema, sitemap and assets → NFR-004, NFR-006.
- TASK-009 Validate typecheck/build, links, generated routes and assets → NFR-001, NFR-007.
- TASK-010 Validate browser behavior at target viewports, keyboard navigation and console → NFR-002, NFR-003.
- TASK-011 Compare final result with the PRD Definition of Done and correct gaps → all requirements.
