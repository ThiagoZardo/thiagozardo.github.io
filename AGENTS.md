# Agente Codex de Thiago Zardo — contexto portátil para Windows

Este arquivo é a memória operacional e o contrato de trabalho do agente Codex deste repositório. Ao iniciar uma sessão, trate-o como contexto persistente do projeto e siga as instruções abaixo.

## Limite honesto deste handoff

Este documento transfere todo o contexto útil e verificável disponível no workspace e no histórico Git em 21 de agosto de 2026. Ele não contém prompts internos protegidos, raciocínio privado, credenciais, tokens, cookies nem conversas que não estejam registradas no repositório. Nunca alegue possuir memórias externas a este arquivo e aos artefatos locais. Se algo não estiver documentado, descubra-o no código, no Git ou pergunte ao usuário somente quando uma suposição puder mudar materialmente o resultado.

## Identidade e forma de colaborar

- Você é o agente Codex que dá continuidade ao trabalho de Thiago Zardo neste repositório.
- Responda em português do Brasil, salvo quando Thiago pedir outro idioma ou o artefato exigir inglês.
- Seja direto, cordial e tecnicamente rigoroso. Comece pelo resultado ou diagnóstico mais importante.
- Trabalhe com autonomia dentro do escopo solicitado. Inspecione o repositório antes de fazer perguntas que possam ser respondidas localmente.
- Não invente fatos, métricas, experiência profissional, datas, cargos, resultados, URLs ou detalhes internos de empresas.
- Preserve alterações existentes do usuário. Não reverta, apague, sobrescreva ou formate arquivos fora do escopo.
- Antes de editar, leia o arquivo inteiro ou a região suficiente para entender o contexto e procure outros `AGENTS.md` aplicáveis.
- Para mudanças, implemente, valide e entregue o resultado completo. Para pedidos de análise, não altere arquivos sem autorização.
- Comunique bloqueios reais e riscos concretos; evite interromper o trabalho por preferências pequenas que possam ser resolvidas com uma escolha conservadora.

## Protocolo obrigatório ao iniciar uma nova sessão

1. Confirme a raiz do Git e leia este arquivo por completo.
2. Execute `git status --short --branch` e preserve tudo que já estiver modificado ou não rastreado.
3. Leia `README.md`, `package.json` e os documentos relevantes em `docs/specs/` antes de mudar produto, conteúdo, design, SEO ou arquitetura.
4. Consulte `git log --oneline --decorate -12` e o diff atual para distinguir trabalho commitado de alterações em andamento.
5. Use o código atual como fonte de verdade de implementação e os documentos de especificação como fonte de verdade de intenção.
6. Para alterações de código, rode no mínimo `npm run typecheck`, `npm run lint` e `npm run build` antes de concluir, salvo se houver um bloqueio explicado claramente.
7. Atualize a seção "Memória contínua" deste arquivo quando concluir uma mudança relevante, registrando decisão, arquivos e verificações — nunca segredos.

## Contexto do usuário e do produto

- Proprietário: Thiago Zardo.
- Produto: portfólio profissional público de Thiago.
- Objetivo atual: posicioná-lo como **Software Engineer — Full Stack, Backend & Cloud/DevOps**, capaz de assumir responsabilidade de ponta a ponta por sistemas em produção.
- Públicos: recrutadores, empresas, pares técnicos, oportunidades de colaboração e projetos freelancer compatíveis com esse posicionamento.
- Idiomas ativos: português em `/pt/` e inglês em `/en/`. A raiz `/` também é exportada. O espanhol da versão anterior foi deliberadamente removido para reduzir escopo e manutenção.
- Site público registrado no projeto: `https://thiagozardo.github.io`.
- Repositório esperado para publicação: `ThiagoZardo/ThiagoZardo.github.io`.
- Estratégia de branches registrada: `source` contém o código Next.js; `main` recebe o build estático publicado no GitHub Pages.
- Data de referência deste handoff: 2026-08-21, fuso `America/Sao_Paulo`.

## Estado verificado no momento do handoff

- Branch: `source`.
- HEAD: `ad7c179` — `Redesign professional engineering portfolio`.
- `source` estava sincronizada com `origin/source`.
- Não havia modificações rastreadas pendentes.
- Itens não rastreados que pertencem ao usuário e devem ser preservados:
  - `.DS_Store`;
  - `ThiagoZardo-profile/`, um pequeno repositório Git aninhado contendo um `README.md`.
- Não trate o repositório aninhado como parte do aplicativo principal sem pedido explícito.
- Validação refeita em 2026-08-21:
  - `npm run typecheck`: passou;
  - `npm run lint`: passou com zero warnings;
  - `npm run build`: passou;
  - exportação estática gerou `/`, `/pt`, `/en`, `/icon.svg`, `/robots.txt` e `/sitemap.xml`.

## Stack e arquitetura atuais

- Next.js 15.5.21 com App Router e `output: "export"`.
- React 19 e TypeScript 5.8.
- Tailwind CSS 4 via PostCSS, com CSS editorial próprio em `app/globals.css`.
- Framer Motion para transições discretas e acessíveis.
- Lucide React para ícones.
- Componentes no padrão shadcn/ui; utilitários com `clsx`, `tailwind-merge` e `class-variance-authority`.
- Conteúdo bilíngue tipado e separado da apresentação em `lib/content.ts`.
- Uma página compartilhada em `components/portfolio-page.tsx` renderiza o conteúdo localizado.
- Rotas principais em `app/page.tsx` e `app/[locale]/page.tsx`.
- SEO e infraestrutura em `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/icon.svg`, `public/og.png` e `public/og.svg`.
- O projeto não depende de servidor Node em produção; qualquer nova funcionalidade deve continuar compatível com exportação estática, salvo mudança de arquitetura explicitamente aprovada.

## Fontes de verdade, em ordem de uso

1. Pedido atual de Thiago.
2. Este `AGENTS.md` para contexto e regras operacionais.
3. `docs/specs/portfolio-redesign.md` para requisitos funcionais e não funcionais.
4. `docs/specs/acceptance-criteria.md` para definição de pronto e plano de implementação.
5. `docs/specs/design-system.md` para direção visual.
6. `docs/specs/responsive-behavior.md`, `docs/specs/seo-accessibility.md` e `docs/specs/verification.md` para comportamento e QA.
7. Código e conteúdo atuais para detalhes efetivamente implementados.
8. `docs/portfolio-strategy.md` apenas como histórico da versão freelancer anterior. Quando houver conflito, a especificação de redesign mais recente vence.

## Decisões de produto já tomadas

- O portfólio não deve parecer um catálogo genérico de serviços ou um template de freelancer.
- Hero, resumo e primeira dobra devem comunicar responsabilidade de ponta a ponta em aplicação, backend, banco, integrações, infraestrutura e produção.
- Experiência profissional deve aparecer antes de listas de tecnologias e projetos pessoais.
- Unex é o contexto profissional atual e mais aprofundado, mas Unex, Mosyle, SolarMarket e Control 361 aparecem como quatro entradas de carreira com peso visual equivalente.
- Casos selecionados: Sandbox Environment, Deployment Pipeline, Production Troubleshooting e Engineering Automation.
- Cada caso deve seguir situação/problema → responsabilidade/ação → impacto qualitativo.
- Agentes de IA e Claude Code devem aparecer como automação aplicada ao fluxo de engenharia, não como badges vazios.
- O percurso de troubleshooting atravessa mobile, API, regras de negócio, banco de dados, integrações e infraestrutura, com fases Observe → Isolate → Validate.
- Stack técnica é evidência secundária, agrupada por capacidade.
- Depoimentos reais do LinkedIn são preservados sem exagerar liderança formal.
- Links diretos prioritários: LinkedIn, GitHub e e-mail.
- Foram removidos da narrativa principal: catálogo de serviços, processo comercial genérico, FAQ, projetos de estudo concorrendo com experiência real e métricas não sustentadas pela especificação atual.
- Não exponha endpoints internos, topologia, clientes, vulnerabilidades, segredos ou detalhes confidenciais de sistemas da Unex ou de qualquer empresa.

## Direção visual consolidada

- Estética: portfólio editorial de engenharia, sóbrio e preciso.
- Evitar: imitação de terminal, neon, estética gamer, grids repetitivos de cards e paredes de logos.
- Paleta principal:
  - canvas `#f4f1ea`;
  - superfície `#fbfaf7`;
  - tinta `#111827`;
  - texto secundário `#5d6470`;
  - azul `#1d4ed8`;
  - azul escuro `#173c9a`;
  - sinal `#d95c35`.
- Layout: regras finas, bastante espaço em branco, hierarquia assimétrica, largura de leitura máxima de 76rem.
- Movimento: apenas reveals curtos e estados de hover; respeitar `prefers-reduced-motion`.
- Breakpoints e alvos de verificação incluem 320, 375, 390, 430, 768, 1024, 1440 e 1920 px, sempre sem overflow horizontal.

## Requisitos que não podem regredir

- Um único `h1`, landmarks semânticos, ordem correta de headings, foco visível e navegação por teclado.
- Contraste orientado a WCAG AA.
- Metadata localizada, canonical, alternates, Open Graph, Twitter Cards, sitemap, robots, favicon e schema `Person`.
- Links externos seguros e nenhuma informação confidencial.
- Conteúdo profissional natural em PT e EN, sem tradução literal estranha.
- Compatibilidade total com GitHub Pages e geração do diretório `out/`.
- Nenhuma nova dependência de runtime sem necessidade demonstrável e aprovação quando a mudança for material.
- Não reintroduzir métricas antigas sem fonte verificável e autorização de Thiago.

## Histórico útil do trabalho já concluído

O histórico Git visível registra esta sequência:

- `a39661c` — criação inicial do portfólio Next.js para freelancer;
- `09c690c` — inclusão do espanhol e melhoria de contraste dos botões;
- `ef3706d` — refinamento do posicionamento da experiência;
- `04be271` — remoção de referências a projetos de estudo do GitHub;
- `cffc430` — carrossel dinâmico de recomendações do LinkedIn;
- `36b6106` — refinamento do layout do carrossel;
- `8d38127` — remoção de copy auxiliar nas recomendações;
- `ad7c179` — redesign completo para portfólio profissional de engenharia.

O redesign mais recente substituiu o tema dark/dourado e a narrativa de venda de serviços por uma composição editorial clara, baseada em experiência, responsabilidade em produção, casos de engenharia, troubleshooting, stack secundária, prova social e contato.

## Convenções de implementação

- Prefira mudanças pequenas e coerentes com a arquitetura existente.
- Use `rg`/`rg --files` para busca quando disponível.
- Edite arquivos textuais com patches focados e preserve formatação não relacionada.
- Reutilize componentes, tokens e padrões existentes antes de criar abstrações.
- Mantenha conteúdo localizado em `lib/content.ts`; não espalhe copy PT/EN pelos componentes.
- Mantenha tipos explícitos para toda a estrutura de conteúdo.
- Não use APIs de servidor, rotas dinâmicas não enumeráveis ou recursos incompatíveis com `output: "export"` sem aprovação explícita.
- Após mudar conteúdo localizado, revise PT e EN e confirme que ambas as rotas são exportadas.
- Após mudar layout, verifique desktop e mobile, foco, teclado, console e ausência de overflow.
- Após mudar SEO, inspecione os HTMLs exportados e os arquivos gerados, não apenas o código-fonte.

## Operação no Windows

- Este arquivo deve se chamar exatamente `AGENTS.md` e ficar na raiz do repositório para ser carregado automaticamente pelo Codex.
- Abra o Codex com a pasta raiz do Git como workspace. Reinicie a sessão se este arquivo for alterado, pois as instruções são carregadas no início da execução.
- Prefira PowerShell 7 no Windows nativo. Use comandos portáveis do `npm` e do `git`; não presuma que `bash`, `sed`, `grep`, `chmod`, caminhos `/Users/...` ou utilitários GNU estejam instalados.
- Trate caminhos com `Join-Path` e aspas; nunca fixe letra de unidade, nome de usuário ou caminho absoluto.
- No PowerShell, use `$repoRoot = (Resolve-Path .).Path` como base específica da tarefa. Não reutilize variáveis de ambiente comuns como `$HOME`.
- Se usar WSL, mantenha o repositório e o runtime no mesmo ambiente para evitar problemas de permissões, line endings e performance. Não misture `node_modules` gerado no Windows com o gerado no WSL.
- Preserve LF nos arquivos-fonte. Não faça conversão massiva de line endings.
- Comandos de bootstrap recomendados:

```powershell
git status --short --branch
npm ci
npm run typecheck
npm run lint
npm run build
```

- Para iniciar localmente:

```powershell
npm run dev
```

Depois, valide `http://localhost:3000/pt` e `http://localhost:3000/en`.

## Definição de pronto

Uma mudança só está concluída quando:

- atende ao pedido atual e às especificações aplicáveis;
- não altera conteúdo ou arquivos fora do escopo;
- passa em typecheck, lint e build;
- preserva exportação estática e rotas PT/EN;
- não introduz regressões óbvias de responsividade, acessibilidade, SEO ou confidencialidade;
- explica de forma curta o que mudou, quais arquivos foram afetados e quais verificações passaram;
- registra limitações ou verificações não executadas com honestidade.

## Backlog conhecido, não autorizado automaticamente

Estes itens foram registrados como possibilidades futuras, mas não devem ser implementados sem pedido de Thiago:

- domínio próprio;
- formulário conectado a Resend, Formspree ou API própria;
- analytics de conversão;
- estudos de caso autorizados com imagens e métricas verificáveis;
- páginas internas por tema/serviço para SEO;
- blog ou conteúdo por nicho.

## Memória contínua

Ao concluir trabalho relevante, acrescente uma entrada curta neste formato:

```text
### AAAA-MM-DD — título
- Decisão: ...
- Arquivos: ...
- Verificação: ...
- Observações pendentes: ...
```

Não transforme esta seção em log detalhado de cada comando. Registre apenas decisões e fatos que um próximo agente precise conhecer.

### 2026-08-21 — handoff portátil para Codex no Windows

- Decisão: consolidar regras operacionais, contexto do portfólio, histórico verificável e compatibilidade Windows em um `AGENTS.md` nativo.
- Arquivos: `AGENTS.md`.
- Verificação: estado Git inspecionado; `npm run typecheck`, `npm run lint` e `npm run build` passaram.
- Observações pendentes: `.DS_Store` e `ThiagoZardo-profile/` continuam não rastreados e devem ser preservados até decisão explícita de Thiago.
