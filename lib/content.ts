export type Locale = "pt" | "en";

export const locales: Locale[] = ["pt", "en"];

export const profile = {
  name: "Thiago Zardo",
  email: "tzardo.developer@gmail.com",
  linkedin: "https://www.linkedin.com/in/thiago-jarilho-zardo/",
  github: "https://github.com/ThiagoZardo",
  location: "Brazil · GMT−3"
};

type CaseStudy = {
  number: string;
  title: string;
  label: string;
  problem: string;
  ownership: string;
  impact: string;
  tags: string[];
};

type PortfolioContent = {
  nav: { label: string; href: string }[];
  hero: {
    eyebrow: string;
    role: string;
    title: string;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
    availability: string;
    rangeLabel: string;
    range: string[];
    rangeNote: string;
  };
  summary: { eyebrow: string; title: string; body: string; principles: string[] };
  experience: {
    eyebrow: string;
    title: string;
    company: string;
    scope: string;
    body: string;
    responsibilities: string[];
    note: string;
    journeyTitle: string;
    journeyIntro: string;
    companies: {
      name: string;
      scope: string;
      context: string;
      contribution: string;
      technologies: string[];
      website: string;
    }[];
  };
  cases: { eyebrow: string; title: string; intro: string; labels: [string, string, string]; items: CaseStudy[] };
  troubleshooting: {
    eyebrow: string;
    title: string;
    body: string;
    chain: string[];
    signals: string[];
    phases: { title: string; description: string }[];
    traceLabel: string;
    note: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    groups: { title: string; items: string[]; description: string }[];
  };
  proof: { eyebrow: string; title: string; intro: string; quotes: { quote: string; author: string; role: string }[] };
  contact: { eyebrow: string; title: string; body: string; email: string };
  footer: string;
};

export const content: Record<Locale, PortfolioContent> = {
  pt: {
    nav: [
      { label: "Experiência", href: "#experience" },
      { label: "Cases", href: "#work" },
      { label: "Stack", href: "#capabilities" },
      { label: "Contato", href: "#contact" }
    ],
    hero: {
      eyebrow: "Software Engineer · Brasil / Remoto",
      role: "Full Stack · Backend · Cloud & DevOps",
      title: "Engenharia de software, da aplicação à produção.",
      summary:
        "Desenvolvo produtos e resolvo problemas que atravessam backend, mobile, dados, integrações e infraestrutura — com responsabilidade até o sistema estar estável em produção.",
      primaryCta: "Ver experiência",
      secondaryCta: "Ver cases",
      availability: "Aberto a posições remotas e internacionais",
      rangeLabel: "Operating range",
      range: ["Application", "API", "Business logic", "Data", "Integrations", "Infrastructure"],
      rangeNote: "Cada camada importa quando a responsabilidade é ponta a ponta."
    },
    summary: {
      eyebrow: "Perfil",
      title: "Entender o sistema inteiro é parte do meu trabalho.",
      body:
        "Não trato código, ambiente e operação como mundos separados. Navego por configuração, integrações, dados e infraestrutura para entregar mudanças com segurança e resolver falhas que não respeitam fronteiras de função.",
      principles: [
        "Ownership da investigação à produção",
        "Automação de processos repetitivos",
        "Qualidade integrada ao fluxo de entrega"
      ]
    },
    experience: {
      eyebrow: "Perfil profissional",
      title: "Hoje, atuo onde software encontra operação.",
      company: "Unex",
      scope: "Software · Infrastructure · Production",
      body:
        "Hoje, minha atuação está especialmente próxima de backend, aplicações web e mobile, integrações financeiras, ambientes, deployments e operação. Sou frequentemente envolvido quando um problema exige conectar sinais de diferentes camadas e conduzir a solução até produção.",
      responsibilities: [
        "Criação do ambiente Sandbox e separação do fluxo de validação da produção.",
        "Estruturação e evolução da automação de deployment entre ambientes.",
        "Troubleshooting em aplicações, APIs, bancos, integrações e infraestrutura.",
        "Incentivo e implementação de testes como parte da evolução do processo de qualidade.",
        "Identificação e correção de problemas de segurança sem expor detalhes sensíveis.",
        "Suporte técnico e compartilhamento de contexto em problemas complexos."
      ],
      note: "Responsabilidade técnica real, sem transformar colaboração informal em um cargo de liderança.",
      journeyTitle: "Uma trajetória entre produto, plataforma e operação.",
      journeyIntro: "Quatro contextos diferentes, com o mesmo fio condutor: assumir problemas reais, navegar entre camadas e conectar decisões de produto à operação.",
      companies: [
        {
          name: "Unex",
          scope: "Software · Infrastructure · Production",
          context: "Operação com aplicações web e mobile, backend, integrações financeiras, ambientes e serviços em produção.",
          contribution: "Criação de Sandbox, evolução da esteira de deployment, troubleshooting ponta a ponta, testes, segurança e automações com agentes de IA.",
          technologies: ["Node.js", "TypeScript", "React", "React Native", "AWS", "CI/CD", "MySQL"],
          website: "https://unex.ar/"
        },
        {
          name: "Mosyle",
          scope: "Full Stack · Cybersecurity · Apple Device Management",
          context: "Plataforma cloud-native de gerenciamento e segurança de dispositivos Apple, utilizada por organizações em escala global.",
          contribution: "Atuação full stack em funcionalidades, integrações e modernização de base legada, trabalhando com confiabilidade, segurança e continuidade operacional.",
          technologies: ["React Native", "Node.js", "PHP", ".NET", "C#", "AWS", "Microservices"],
          website: "https://mosyle.com/"
        },
        {
          name: "SolarMarket",
          scope: "Full Stack · DevOps · Energy SaaS",
          context: "SaaS para integradores e distribuidores solares, cobrindo vendas, financiamento, compras e simulações.",
          contribution: "Atuação entre produto e infraestrutura, evoluindo aplicações, deploys, custos operacionais e performance de fluxos críticos.",
          technologies: ["TypeScript", "Node.js", "NestJS", "React", "Vue", "AWS", "GCP", "Kubernetes"],
          website: "https://www.solarmarket.com.br/"
        },
        {
          name: "Control 361",
          scope: "Full Stack · Web · Mobile",
          context: "Empresa de tecnologia e serviços digitais com projetos em diferentes stacks, aplicações mobile e integrações.",
          contribution: "Desenvolvimento full stack conectando experiência do usuário, regras de negócio, backend e mobile em ambientes de produto e serviços.",
          technologies: ["React Native", "Node.js", "PHP", ".NET", "C#"],
          website: "https://control361.com.br/"
        }
      ]
    },
    cases: {
      eyebrow: "Selected engineering work",
      title: "Problemas de engenharia que assumi até o fim.",
      intro:
        "Uma seleção de mudanças em ambientes, entrega, diagnóstico e automação — descritas pelo problema, pela responsabilidade assumida e pelo resultado de engenharia.",
      labels: ["Problema", "Minha atuação", "Impacto"],
      items: [
        {
          number: "01",
          title: "Sandbox Environment",
          label: "Ambientes & qualidade",
          problem: "Parte das mudanças ainda era validada diretamente em produção, aumentando o risco e limitando um fluxo adequado de desenvolvimento e testes.",
          ownership: "Criei o Sandbox do zero: infraestrutura, aplicações, serviços, configuração e separação de ambientes. Também orientei o time sobre o novo fluxo e incentivei validação e testes antes da produção.",
          impact: "O time passou a contar com um ambiente dedicado para desenvolver e validar mudanças com isolamento da produção.",
          tags: ["AWS", "Environments", "Testing", "Process"]
        },
        {
          number: "02",
          title: "Deployment Pipeline",
          label: "Entrega & operação",
          problem: "O processo de entrega dependia de etapas manuais e precisava funcionar de forma consistente entre Sandbox, Staging e Production.",
          ownership: "Estruturei e evoluí a esteira de deployment, conectando versionamento, configuração de ambiente, serviços, aplicações e infraestrutura em um fluxo mais previsível.",
          impact: "Redução da dependência de passos manuais e maior padronização da entrega entre ambientes.",
          tags: ["CI/CD", "Git", "AWS EC2", "PM2"]
        },
        {
          number: "03",
          title: "Production Troubleshooting",
          label: "Investigação ponta a ponta",
          problem: "Falhas de produção raramente pertencem a uma única camada e podem atravessar mobile, API, regras de negócio, banco, integrações e infraestrutura.",
          ownership: "Investigo logs, erros de API, processos, configuração, dados, integrações externas e deploy até isolar a causa e conduzir a correção.",
          impact: "Problemas complexos são tratados com visão sistêmica, contexto compartilhado e responsabilidade até a estabilização.",
          tags: ["Logs", "APIs", "Databases", "Infrastructure"]
        },
        {
          number: "04",
          title: "Engineering Automation",
          label: "AI-assisted engineering",
          problem: "Verificações e tarefas repetitivas consomem tempo que poderia ser aplicado a decisões de engenharia.",
          ownership: "Integro agentes e Claude Code ao workflow para analisar tarefas, automatizar verificações e executar partes repetíveis do desenvolvimento com supervisão técnica.",
          impact: "Menos trabalho mecânico e um fluxo técnico mais rápido para o time, mantendo contexto e responsabilidade humana.",
          tags: ["Claude Code", "AI Agents", "Automation", "Workflow"]
        }
      ]
    },
    troubleshooting: {
      eyebrow: "Como investigo",
      title: "Do sintoma à causa raiz.",
      body:
        "Quando a falha não cabe em uma camada, sigo o rastro técnico até encontrar a origem — e percorro o fluxo novamente para validar a correção.",
      chain: ["Mobile", "API", "Business logic", "Database", "External integration", "Infrastructure"],
      signals: ["Sintoma observado", "Contexto da requisição", "Regra executada", "Estado dos dados", "Resposta da dependência", "Ambiente em execução"],
      phases: [
        { title: "Observar", description: "Reúno logs, erros, contexto e o comportamento esperado." },
        { title: "Isolar", description: "Reduzo hipóteses atravessando cada camada do fluxo." },
        { title: "Validar", description: "Confirmo a causa e percorro o caminho novamente após a correção." }
      ],
      traceLabel: "Rastro de investigação",
      note: "Logs · configuração · ambiente · deploy · observabilidade"
    },
    capabilities: {
      eyebrow: "Technical scope",
      title: "A stack muda. A responsabilidade continua.",
      groups: [
        { title: "Backend", items: ["Node.js", "TypeScript", "NestJS", "Prisma", "REST APIs"], description: "APIs, regras de negócio e integrações." },
        { title: "Web & Mobile", items: ["React", "Next.js", "Vue.js", "React Native", "Expo"], description: "Produtos web e experiências mobile." },
        { title: "Cloud & DevOps", items: ["AWS", "EC2", "RDS", "SSM", "Docker", "PM2", "CI/CD"], description: "Ambientes, automação e operação." },
        { title: "Engineering", items: ["MySQL", "MariaDB", "Testing", "Security", "Troubleshooting", "AI Agents"], description: "Qualidade, diagnóstico e evolução de processo." }
      ]
    },
    proof: {
      eyebrow: "Colaboração técnica",
      title: "Confiança construída no trabalho real.",
      intro: "Recomendações de pessoas que acompanharam minha atuação entre desenvolvimento, DevOps e produto.",
      quotes: [
        { quote: "Desenvolvedor dedicado, comprometido com a qualidade das entregas e com grande responsabilidade sobre metas e prazos.", author: "Caique Rechi", role: "Backend Developer PHP Pleno" },
        { quote: "Profissional excepcional, sempre disposto a ajudar e peça-chave nas áreas de Desenvolvimento e DevOps.", author: "Leonardo Henrique Da Silva Paixão", role: "QA Engineer Pleno" },
        { quote: "Profissional versátil, com progresso notável e capacidade de atuar em back end, front end e desenvolvimento mobile.", author: "Jonathan Cardoso", role: "Full Stack Software Engineer" },
        { quote: "Fundamental para o projeto, guiando dúvidas do grupo, apoiando a equipe e demonstrando forte habilidade em JavaScript e React.", author: "Arthur Barros", role: "Full Stack Developer" }
      ]
    },
    contact: {
      eyebrow: "Contato",
      title: "Se o desafio atravessa software e produção, vamos conversar.",
      body: "Estou aberto a oportunidades remotas e internacionais, além de projetos em que desenvolvimento, infraestrutura e operação precisam avançar juntos.",
      email: "Enviar e-mail"
    },
    footer: "Software engineering across application, infrastructure and production."
  },
  en: {
    nav: [
      { label: "Experience", href: "#experience" },
      { label: "Work", href: "#work" },
      { label: "Stack", href: "#capabilities" },
      { label: "Contact", href: "#contact" }
    ],
    hero: {
      eyebrow: "Software Engineer · Brazil / Remote",
      role: "Full Stack · Backend · Cloud & DevOps",
      title: "Software engineering, from application to production.",
      summary: "I build products and solve problems across backend, mobile, data, integrations and infrastructure—owning the outcome until the system is stable in production.",
      primaryCta: "View experience",
      secondaryCta: "Selected work",
      availability: "Open to remote and international roles",
      rangeLabel: "Operating range",
      range: ["Application", "API", "Business logic", "Data", "Integrations", "Infrastructure"],
      rangeNote: "Every layer matters when ownership is end to end."
    },
    summary: {
      eyebrow: "Profile",
      title: "Understanding the whole system is part of my job.",
      body: "I do not treat code, environments and operations as separate worlds. I move through configuration, integrations, data and infrastructure to ship safer changes and solve failures that do not respect role boundaries.",
      principles: ["Ownership from investigation to production", "Automation of repetitive processes", "Quality built into the delivery flow"]
    },
    experience: {
      eyebrow: "Professional profile",
      title: "Today, I work where software meets operations.",
      company: "Unex",
      scope: "Software · Infrastructure · Production",
      body: "Today, my work is especially close to backend, web and mobile applications, financial integrations, environments, deployments and operations. I am often involved when a problem requires connecting signals across layers and driving the solution through production.",
      responsibilities: [
        "Built a Sandbox environment and separated validation from production.",
        "Structured and evolved deployment automation across environments.",
        "Troubleshot applications, APIs, databases, integrations and infrastructure.",
        "Promoted and implemented testing as the engineering quality process evolved.",
        "Identified and fixed security issues without exposing sensitive details.",
        "Supported engineers and shared context while resolving complex problems."
      ],
      note: "Real technical responsibility, without turning informal collaboration into a leadership title.",
      journeyTitle: "A career across product, platform and operations.",
      journeyIntro: "Four different contexts with the same throughline: owning real problems, moving across layers and connecting product decisions to operations.",
      companies: [
        {
          name: "Unex",
          scope: "Software · Infrastructure · Production",
          context: "An operation spanning web and mobile applications, backend, financial integrations, environments and production services.",
          contribution: "Built a Sandbox environment, evolved the deployment pipeline, handled end-to-end troubleshooting, and advanced testing, security and AI-agent automation.",
          technologies: ["Node.js", "TypeScript", "React", "React Native", "AWS", "CI/CD", "MySQL"],
          website: "https://unex.ar/"
        },
        {
          name: "Mosyle",
          scope: "Full Stack · Cybersecurity · Apple Device Management",
          context: "A cloud-native Apple device management and security platform used by organizations at global scale.",
          contribution: "Full stack work across features, integrations and legacy modernization, with a focus on reliability, security and operational continuity.",
          technologies: ["React Native", "Node.js", "PHP", ".NET", "C#", "AWS", "Microservices"],
          website: "https://mosyle.com/"
        },
        {
          name: "SolarMarket",
          scope: "Full Stack · DevOps · Energy SaaS",
          context: "A SaaS platform for solar integrators and distributors, covering sales, financing, purchasing and simulation workflows.",
          contribution: "Worked across product and infrastructure, evolving applications, deployments, operational costs and the performance of critical flows.",
          technologies: ["TypeScript", "Node.js", "NestJS", "React", "Vue", "AWS", "GCP", "Kubernetes"],
          website: "https://www.solarmarket.com.br/"
        },
        {
          name: "Control 361",
          scope: "Full Stack · Web · Mobile",
          context: "A technology and digital services company with projects across different stacks, mobile applications and integrations.",
          contribution: "Full stack development connecting user experience, business rules, backend and mobile across product and services environments.",
          technologies: ["React Native", "Node.js", "PHP", ".NET", "C#"],
          website: "https://control361.com.br/"
        }
      ]
    },
    cases: {
      eyebrow: "Selected engineering work",
      title: "Engineering problems I owned end to end.",
      intro: "A selection of changes across environments, delivery, diagnosis and automation—framed by the problem, the responsibility I owned and the engineering outcome.",
      labels: ["Problem", "What I owned", "Outcome"],
      items: [
        { number: "01", title: "Sandbox Environment", label: "Environments & quality", problem: "Some changes were still validated directly in production, increasing delivery risk and limiting a proper development and testing flow.", ownership: "I built the Sandbox from scratch: infrastructure, applications, services, configuration and environment separation. I also guided the team through the new flow and promoted validation and testing before production.", impact: "The team gained a dedicated environment to develop and validate changes in isolation from production.", tags: ["AWS", "Environments", "Testing", "Process"] },
        { number: "02", title: "Deployment Pipeline", label: "Delivery & operations", problem: "The delivery process depended on manual steps and needed to work consistently across Sandbox, Staging and Production.", ownership: "I structured and evolved the deployment pipeline, connecting version control, environment configuration, services, applications and infrastructure into a more predictable flow.", impact: "Reduced dependence on manual steps and brought greater consistency to delivery across environments.", tags: ["CI/CD", "Git", "AWS EC2", "PM2"] },
        { number: "03", title: "Production Troubleshooting", label: "End-to-end investigation", problem: "Production failures rarely belong to a single layer; they may cross mobile, APIs, business logic, databases, integrations and infrastructure.", ownership: "I investigate logs, API errors, processes, configuration, data, external integrations and deployments until I isolate the cause and drive the fix.", impact: "Complex problems are handled with a system-wide view, shared context and ownership through stabilization.", tags: ["Logs", "APIs", "Databases", "Infrastructure"] },
        { number: "04", title: "Engineering Automation", label: "AI-assisted engineering", problem: "Repetitive tasks and checks consume time that could be spent on engineering decisions.", ownership: "I integrate agents and Claude Code into the workflow to analyze tasks, automate checks and execute repeatable parts of development under technical supervision.", impact: "Less mechanical work and a faster technical workflow for the team, while preserving human context and accountability.", tags: ["Claude Code", "AI Agents", "Automation", "Workflow"] }
      ]
    },
    troubleshooting: {
      eyebrow: "How I investigate",
      title: "From symptom to root cause.",
      body: "When a failure does not fit within one layer, I follow the technical trace until I find the source—and move through the flow again to validate the fix.",
      chain: ["Mobile", "API", "Business logic", "Database", "External integration", "Infrastructure"],
      signals: ["Observed symptom", "Request context", "Executed rule", "Data state", "Dependency response", "Runtime environment"],
      phases: [
        { title: "Observe", description: "Collect logs, errors, context and the expected behavior." },
        { title: "Isolate", description: "Narrow the hypotheses while moving through each layer." },
        { title: "Validate", description: "Confirm the cause and retrace the path after the fix." }
      ],
      traceLabel: "Investigation trace",
      note: "Logs · configuration · environment · deployment · observability"
    },
    capabilities: {
      eyebrow: "Technical scope",
      title: "The stack changes. Ownership stays.",
      groups: [
        { title: "Backend", items: ["Node.js", "TypeScript", "NestJS", "Prisma", "REST APIs"], description: "APIs, business logic and integrations." },
        { title: "Web & Mobile", items: ["React", "Next.js", "Vue.js", "React Native", "Expo"], description: "Web products and mobile experiences." },
        { title: "Cloud & DevOps", items: ["AWS", "EC2", "RDS", "SSM", "Docker", "PM2", "CI/CD"], description: "Environments, automation and operations." },
        { title: "Engineering", items: ["MySQL", "MariaDB", "Testing", "Security", "Troubleshooting", "AI Agents"], description: "Quality, diagnosis and process evolution." }
      ]
    },
    proof: {
      eyebrow: "Technical collaboration",
      title: "Trust built through real work.",
      intro: "Recommendations from people who worked with me across development, DevOps and product.",
      quotes: [
        { quote: "A dedicated developer, committed to delivery quality and highly responsible with goals and deadlines.", author: "Caique Rechi", role: "Backend Developer" },
        { quote: "An exceptional professional, always willing to help and a key contributor across Development and DevOps.", author: "Leonardo Henrique Da Silva Paixão", role: "QA Engineer" },
        { quote: "A versatile professional, with remarkable growth and the ability to work across back end, front end and mobile development.", author: "Jonathan Cardoso", role: "Full Stack Software Engineer" },
        { quote: "Fundamental to the project, guiding the team, answering questions and demonstrating strong JavaScript and React skills.", author: "Arthur Barros", role: "Full Stack Developer" }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "If the challenge spans software and production, let’s talk.",
      body: "I am open to remote and international roles, as well as projects where software, infrastructure and operations need to move forward together.",
      email: "Send an email"
    },
    footer: "Software engineering across application, infrastructure and production."
  }
};
