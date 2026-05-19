# Thiago Zardo Portfolio

Portfolio bilíngue para captação de projetos freelancer em desenvolvimento web, automações, dashboards, integrações com APIs e sistemas sob medida.

## Stack

- Next.js 15 com App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Componentes no padrão shadcn/ui
- Lucide React

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000/pt` ou `http://localhost:3000/en`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run typecheck
```

## SEO implementado

- Metadata por idioma
- Open Graph
- Twitter Cards
- Schema.org JSON-LD
- `sitemap.xml`
- `robots.txt`
- URLs bilíngues em `/pt` e `/en`

## Deploy no GitHub Pages

Este projeto está preparado para deploy estático no GitHub Pages via GitHub Actions.

URL recomendada para o repositório pessoal:

```text
https://thiagozardo.github.io
```

Passos:

1. Suba o código para o repositório `ThiagoZardo/ThiagoZardo.github.io`.
2. No GitHub, acesse `Settings` > `Pages`.
3. Em `Build and deployment`, selecione `GitHub Actions`.
4. Faça push na branch `main`.
5. O workflow `.github/workflows/pages.yml` vai gerar o build estático em `out/` e publicar o site.

Se quiser usar domínio próprio, configure um domínio como `thiagozardo.dev` em `Settings` > `Pages` > `Custom domain`, depois atualize `siteUrl` em `lib/utils.ts`.

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Acesse `https://vercel.com/new`.
3. Importe o repositório.
4. Mantenha o framework como `Next.js`.
5. Use:
   - Build command: `npm run build`
   - Output: padrão do Next.js
6. Configure o domínio, por exemplo `thiagozardo.dev`.
7. Atualize `siteUrl` em `lib/utils.ts` caso use outro domínio.

## Conteúdo e posicionamento

O site posiciona Thiago Zardo como desenvolvedor full stack freelancer focado em soluções de negócio, não venda de código. O texto foi orientado para pequenas empresas, com serviços como landing pages, agendamentos, CRM simples, dashboards, integrações, WhatsApp e sistemas sob medida.

## Melhorias futuras

- Conectar o formulário a Resend, Formspree ou API própria.
- Adicionar cases reais com prints, métricas e depoimentos verificáveis.
- Publicar demos dos projetos AutoFlex e RAG Lab.
- Criar páginas internas por serviço para SEO local.
- Adicionar analytics de conversão e eventos de clique no WhatsApp.
- Implementar blog com artigos para nichos como clínicas, imobiliárias e oficinas.
