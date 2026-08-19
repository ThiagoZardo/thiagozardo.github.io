# Portfolio Strategy

## Objetivo

Criar um portfolio profissional para Thiago Zardo, focado em captar projetos freelancer de sites, landing pages, sistemas web, dashboards, automacoes, integracoes com APIs e aplicativos web.

O posicionamento definido foi: Thiago nao vende codigo. Ele vende solucoes digitais que ajudam empresas a economizar tempo, reduzir trabalho manual, organizar processos e melhorar produtividade.

## Publico-alvo

O site foi pensado para pequenas empresas e negocios locais que precisam de tecnologia aplicada ao dia a dia operacional:

- Clinicas e consultorios
- Imobiliarias
- Advogados
- Oficinas mecanicas
- Academias
- Restaurantes
- Pequenos comercios

## Stack tecnica

O projeto foi construido com:

- Next.js 15 com App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Componentes no estilo shadcn/ui
- Lucide React
- Export estatico para GitHub Pages

## Estrutura do site

Foram implementadas as secoes:

- Hero section
- Sobre mim
- Servicos
- Processo de trabalho
- Experiencia em produtos e empresas reais
- Tecnologias
- Recomendacoes
- FAQ
- CTA final
- Formulario de contato
- Footer

## Idiomas

O portfolio foi implementado em tres idiomas:

- Portugues: `/pt/`
- Ingles: `/en/`
- Espanhol: `/es/`

Tambem foi adicionado seletor de idioma no topo.

## Decisoes de conteudo

### Projetos

Inicialmente foram usados projetos publicos do GitHub, mas foi decidido remover essa abordagem porque os repositorios publicos eram majoritariamente projetos de estudo.

Para transmitir mais credibilidade, a secao passou a destacar experiencia profissional em empresas reais:

- Mosyle: https://mosyle.com/
- SolarMarket: https://www.solarmarket.com.br/
- Control 361: https://control361.com.br/
- UNEX: https://unex.ar/

Cada card apresenta contexto, problema, solucao, resultados, tecnologias e link para o site oficial da empresa.

### Metricas do hero

A metrica vaga "4+ anos em desenvolvimento full stack" foi substituida por provas mais fortes:

- SaaS real
- 60 mil+ organizacoes impactadas em plataforma global
- -90% em simulacao critica otimizada
- 30% de reducao de custos de infraestrutura

### Formacao

A frase sobre formacao na Trybe e Estacio foi removida da copy principal, pois nao agregava tanto quanto a experiencia profissional real.

### CTA

A frase "Vamos transformar um gargalo do seu negocio em um sistema simples de usar?" foi substituida por:

"Vamos simplificar um processo que hoje toma tempo da sua equipe?"

Essa versao soa mais natural, consultiva e orientada ao beneficio.

## Recomendacoes

O bloco de avaliacoes foi transformado em um carrossel dinamico.

Foram usados trechos-chave das recomendacoes reais do LinkedIn, com uma recomendacao por pessoa:

- Caique Rechi
- Leonardo Henrique Da Silva Paixao
- Jonathan Cardoso
- Arthur Barros

O design inicial foi considerado amador por parecer um slide muito grande. Ele foi redesenhado para um formato mais editorial, com cards compactos, navegacao por setas e indicadores.

Tambem foi removida a frase explicativa:

"Trechos curtos das recomendacoes publicas, focados no que gera confianca: entrega, colaboracao e evolucao tecnica."

## Ajustes visuais

O tema inicial usava verde muito forte, que prejudicava leitura e parecia menos premium.

A paleta foi ajustada para:

- Fundo dark
- Dourado suave nos CTAs
- Texto escuro nos botoes primarios
- Teal como cor de apoio

Tambem foi aplicado `!text-[#120d05]` nos botoes primarios para garantir contraste e evitar que o texto fique apagado.

## SEO

Foram implementados:

- Metadata por idioma
- Open Graph
- Twitter Cards
- Schema.org
- Sitemap
- Robots.txt
- Canonical URLs
- Alternates por idioma

O `siteUrl` foi ajustado para:

`https://thiagozardo.github.io`

## Deploy

O projeto foi publicado no GitHub Pages:

`https://thiagozardo.github.io`

Organizacao das branches:

- `source`: codigo-fonte Next.js
- `main`: build estatico publicado pelo GitHub Pages

Como o GitHub Pages nao executa servidor Node, o Next foi configurado com:

```ts
output: "export"
```

O build estatico e gerado em `out/` e depois publicado na branch `main`.

## Validacoes feitas

Durante o desenvolvimento, foram rodados:

```bash
npm run typecheck
npm run build
```

Tambem foram feitas verificacoes HTTP no GitHub Pages para confirmar publicacao das rotas e conteudos.

## Melhorias futuras

- Adicionar dominio proprio, como `thiagozardo.dev` ou `thiagozardo.com`
- Criar estudos de caso autorizados com prints, escopo e metricas reais
- Integrar formulario com Resend, Formspree ou API propria
- Adicionar analytics para medir cliques em WhatsApp e envio de contato
- Criar paginas especificas por servico para SEO
- Criar conteudos por nicho, como clinicas, oficinas e imobiliarias
