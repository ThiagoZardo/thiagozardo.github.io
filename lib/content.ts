import {
  BarChart3,
  Bot,
  CalendarCheck,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Smartphone,
  Workflow,
  Wrench
} from "lucide-react";

export type Locale = "pt" | "en" | "es";

export const locales: Locale[] = ["pt", "en", "es"];

export const profile = {
  name: "Thiago Zardo",
  role: {
    pt: "Desenvolvedor Full Stack Freelancer",
    en: "Freelance Full Stack Developer",
    es: "Desarrollador Full Stack Freelancer"
  },
  email: "tzardo.developer@gmail.com",
  phone: "+55 13 98877-0538",
  github: "https://github.com/ThiagoZardo",
  linkedin: "https://www.linkedin.com/in/thiago-jarilho-zardo/",
  location: {
    pt: "Brasil, GMT-3",
    en: "Brazil, GMT-3",
    es: "Brasil, GMT-3"
  }
};

export const content = {
  pt: {
    nav: ["Sobre", "Servicos", "Processo", "Projetos", "FAQ", "Contato"],
    hero: {
      eyebrow: "Sistemas web, automacoes e produtos digitais",
      title: "Thiago Zardo",
      subtitle:
        "Crio sistemas web e automacoes que economizam tempo e aumentam a produtividade de pequenas empresas.",
      primaryCta: "Solicitar orcamento",
      secondaryCta: "Ver projetos",
      metrics: [
        ["4+ anos", "em desenvolvimento full stack"],
        ["60 mil+", "organizacoes impactadas em produto SaaS"],
        ["-90%", "tempo em simulacao critica otimizada"],
        ["99,9%", "continuidade operacional em plataforma critica"]
      ]
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Tecnologia com mentalidade de negocio, nao apenas codigo.",
      body:
        "Sou desenvolvedor full stack com experiencia em React, React Native, Node.js, TypeScript, NestJS, cloud e automacao. Atuei em produtos SaaS, plataformas de ciberseguranca, sistemas distribuidos e modernizacao de legados, sempre conectando engenharia a resultado operacional.",
      bullets: [
        "Experiencia em produtos usados por milhares de usuarios e organizacoes.",
        "Background forte em frontend, backend, mobile, APIs, DevOps e cloud.",
        "Formacao full stack pela Trybe e Desenvolvimento de Sistemas pela Estacio.",
        "Postura consultiva para entender processo, gargalo e retorno antes de implementar."
      ]
    },
    servicesTitle: "Servicos para empresas que querem operar melhor",
    services: [
      ["Landing pages de alta conversao", "Paginas rapidas, persuasivas e preparadas para transformar visitantes em contatos qualificados.", Globe2],
      ["Sistemas de agendamento", "Fluxos para clinicas, consultorios, oficinas, academias e servicos locais reduzirem mensagens manuais.", CalendarCheck],
      ["CRM simples", "Controle de leads, clientes, etapas, historico e proximas acoes sem planilhas espalhadas.", Layers3],
      ["Dashboards gerenciais", "Indicadores claros para acompanhar vendas, agenda, estoque, financeiro e operacao.", BarChart3],
      ["Integracoes com APIs", "Conexao entre pagamentos, ERPs, CRMs, WhatsApp, ferramentas internas e bancos de dados.", GitBranch],
      ["Automacao de WhatsApp", "Atendimento inicial, notificacoes, lembretes e coleta de dados com menos retrabalho.", MessageCircle],
      ["Sistemas sob medida", "Aplicativos web para processos especificos que uma ferramenta pronta nao resolve bem.", Code2],
      ["Aplicativos web", "Experiencias responsivas, seguras e prontas para crescer com o negocio.", Smartphone]
    ],
    process: {
      title: "Processo claro, previsivel e focado em resultado",
      steps: [
        ["Diagnostico", "Mapeio o problema, publico, fluxo atual e criterio de sucesso."],
        ["Proposta", "Defino escopo, entregaveis, prioridades, prazo e investimento."],
        ["Design e arquitetura", "Organizo a experiencia, dados, integracoes e caminhos criticos."],
        ["Desenvolvimento", "Construo em ciclos curtos, com checkpoints e ajustes objetivos."],
        ["Entrega e evolucao", "Publico, acompanho metricas, corrijo atritos e planejo melhorias."]
      ]
    },
    projectsTitle: "Projetos em destaque",
    projects: [
      {
        name: "AutoFlex",
        tag: "Projeto real",
        context: "Sistema web e API para gestao operacional de oficinas mecanicas.",
        problem: "Oficinas pequenas dependem de mensagens soltas, planilhas e controle manual de ordens de servico.",
        solution: "Aplicacao full stack com fluxo de clientes, veiculos, servicos, status e historico centralizado.",
        results: "Reduz retrabalho administrativo e entrega uma visao unica da operacao.",
        tech: ["TypeScript", "React", "Node.js", "API REST"],
        github: "https://github.com/ThiagoZardo/autoflex-web",
        demo: "https://github.com/ThiagoZardo/autoflex-api"
      },
      {
        name: "RAG Lab",
        tag: "Projeto real",
        context: "Laboratorio de IA para busca e respostas com base em documentos.",
        problem: "Empresas perdem tempo procurando informacao em PDFs, politicas internas e bases dispersas.",
        solution: "Experimento TypeScript para estruturar consultas, contexto e respostas assistidas por IA.",
        results: "Base conceitual para assistentes internos, atendimento e automacao de conhecimento.",
        tech: ["TypeScript", "IA", "RAG", "Node.js"],
        github: "https://github.com/ThiagoZardo/rag-lab",
        demo: "https://github.com/ThiagoZardo/rag-lab"
      },
      {
        name: "SolarMarket Platform",
        tag: "Experiencia profissional",
        context: "Plataforma SaaS para integradores e distribuidores solares.",
        problem: "Processos de venda, financiamento, compras e simulacao precisavam de escala e estabilidade.",
        solution: "Atuacao full stack e DevOps com React, Vue, Node.js, NestJS, microservicos, AWS, GCP e Kubernetes.",
        results: "Deploys 2x mais frequentes, custos de infraestrutura 30% menores e simulacao critica mais de 90% mais rapida.",
        tech: ["React", "Node.js", "NestJS", "AWS", "GCP", "Kubernetes"],
        github: "https://github.com/ThiagoZardo/solar-market",
        demo: "https://github.com/ThiagoZardo/solar-market"
      },
      {
        name: "ClinicFlow",
        tag: "Case conceitual",
        context: "Sistema de agendamento para clinicas e consultorios.",
        problem: "Recepcao sobrecarregada com confirmacoes, remarcacoes e faltas.",
        solution: "Agenda online com notificacoes por WhatsApp, painel de pacientes e relatorios de comparecimento.",
        results: "Menos mensagens manuais, menor taxa de falta e atendimento mais organizado.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "WhatsApp API"],
        github: "https://github.com/ThiagoZardo",
        demo: "#contact"
      }
    ],
    technologies: ["Next.js", "React", "React Native", "TypeScript", "Node.js", "NestJS", "Vue.js", "PHP", ".NET", "C#", "Python", "REST APIs", "GraphQL", "MySQL", "MongoDB", "AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD", "Jest"],
    testimonials: [
      {
        quote:
          "Thiago e um desenvolvedor extremamente dedicado e comprometido com a qualidade das entregas, com responsabilidade sobre metas e prazos.",
        author: "Caique Rechi",
        role: "Recomendacao no LinkedIn"
      },
      {
        quote:
          "Sempre disposto a ajudar e colaborar com a equipe, teve papel fundamental nas areas de Desenvolvimento e DevOps.",
        author: "Leonardo Henrique D.",
        role: "Recomendacao no LinkedIn"
      }
    ],
    faq: [
      ["Voce atende projetos pequenos?", "Sim. Landing pages, automacoes e MVPs sao otimos pontos de partida quando existe um problema claro."],
      ["Voce trabalha com contrato mensal?", "Sim. Posso atuar por projeto fechado ou recorrencia para manutencao, melhorias e evolucao."],
      ["Consigo integrar WhatsApp, CRM ou sistema atual?", "Na maioria dos casos, sim. Primeiro avalio a API, permisssoes, volume e regras do processo."],
      ["O site sera rapido e otimizado para SEO?", "Sim. A base usa Next.js, metadata tecnica, estrutura semantica, responsividade e boas praticas de performance."]
    ],
    cta: {
      title: "Vamos transformar um gargalo do seu negocio em um sistema simples de usar?",
      body: "Conte o que hoje toma tempo, gera erro ou fica espalhado em planilhas. Eu ajudo a desenhar uma solucao objetiva.",
      button: "Falar pelo WhatsApp"
    },
    contact: {
      title: "Solicite um orcamento",
      body: "Preencha o formulario ou chame direto no WhatsApp. Quanto mais contexto voce enviar, mais precisa fica a proposta.",
      name: "Nome",
      email: "E-mail",
      company: "Empresa",
      message: "Conte sobre o projeto",
      submit: "Enviar por e-mail"
    },
    footer: "Desenvolvido com Next.js, TypeScript, Tailwind CSS e foco em conversao."
  },
  en: {
    nav: ["About", "Services", "Process", "Projects", "FAQ", "Contact"],
    hero: {
      eyebrow: "Web systems, automation and digital products",
      title: "Thiago Zardo",
      subtitle:
        "I build web systems and automations that save time and increase productivity for small businesses.",
      primaryCta: "Request a quote",
      secondaryCta: "View projects",
      metrics: [
        ["4+ years", "in full stack development"],
        ["60k+", "organizations impacted in SaaS product"],
        ["-90%", "runtime in optimized critical simulation"],
        ["99.9%", "operational continuity in critical platform"]
      ]
    },
    about: {
      eyebrow: "About me",
      title: "Business-minded technology, not just code.",
      body:
        "I am a full stack developer experienced with React, React Native, Node.js, TypeScript, NestJS, cloud and automation. I have worked on SaaS products, cybersecurity platforms, distributed systems and legacy modernization, always connecting engineering decisions to operational results.",
      bullets: [
        "Experience with products used by thousands of users and organizations.",
        "Strong background across frontend, backend, mobile, APIs, DevOps and cloud.",
        "Full stack training at Trybe and Systems Development degree at Estacio.",
        "Consultative approach to understand workflows, bottlenecks and ROI before implementation."
      ]
    },
    servicesTitle: "Services for companies that want to operate better",
    services: [
      ["High-conversion landing pages", "Fast, persuasive pages built to turn visitors into qualified leads.", Globe2],
      ["Scheduling systems", "Flows for clinics, offices, repair shops, gyms and local services to reduce manual messaging.", CalendarCheck],
      ["Simple CRM", "Lead, client, stage, history and next-action management without scattered spreadsheets.", Layers3],
      ["Management dashboards", "Clear metrics to track sales, appointments, inventory, finance and operations.", BarChart3],
      ["API integrations", "Connections between payments, ERPs, CRMs, WhatsApp, internal tools and databases.", GitBranch],
      ["WhatsApp automation", "Initial support, notifications, reminders and data collection with less rework.", MessageCircle],
      ["Custom systems", "Web applications for specific processes that off-the-shelf tools do not solve well.", Code2],
      ["Web applications", "Responsive, secure experiences ready to grow with the business.", Smartphone]
    ],
    process: {
      title: "A clear, predictable and outcome-focused process",
      steps: [
        ["Discovery", "I map the problem, audience, current workflow and success criteria."],
        ["Proposal", "I define scope, deliverables, priorities, timeline and investment."],
        ["Design and architecture", "I organize UX, data, integrations and critical paths."],
        ["Development", "I build in short cycles with checkpoints and objective adjustments."],
        ["Launch and evolution", "I publish, monitor metrics, fix friction and plan improvements."]
      ]
    },
    projectsTitle: "Featured projects",
    projects: [
      {
        name: "AutoFlex",
        tag: "Real project",
        context: "Web system and API for repair shop operations.",
        problem: "Small shops rely on scattered messages, spreadsheets and manual work-order control.",
        solution: "Full stack app with client, vehicle, service, status and history workflows in one place.",
        results: "Reduces administrative rework and creates one operational source of truth.",
        tech: ["TypeScript", "React", "Node.js", "REST API"],
        github: "https://github.com/ThiagoZardo/autoflex-web",
        demo: "https://github.com/ThiagoZardo/autoflex-api"
      },
      {
        name: "RAG Lab",
        tag: "Real project",
        context: "AI lab for document-based search and answers.",
        problem: "Companies waste time searching across PDFs, policies and scattered knowledge bases.",
        solution: "TypeScript experiment to structure retrieval, context and AI-assisted answers.",
        results: "A foundation for internal assistants, support workflows and knowledge automation.",
        tech: ["TypeScript", "AI", "RAG", "Node.js"],
        github: "https://github.com/ThiagoZardo/rag-lab",
        demo: "https://github.com/ThiagoZardo/rag-lab"
      },
      {
        name: "SolarMarket Platform",
        tag: "Professional experience",
        context: "SaaS platform for solar integrators and distributors.",
        problem: "Sales, financing, purchasing and simulation processes needed scale and stability.",
        solution: "Full stack and DevOps work with React, Vue, Node.js, NestJS, microservices, AWS, GCP and Kubernetes.",
        results: "2x deployment frequency, 30% lower infrastructure costs and a critical simulation over 90% faster.",
        tech: ["React", "Node.js", "NestJS", "AWS", "GCP", "Kubernetes"],
        github: "https://github.com/ThiagoZardo/solar-market",
        demo: "https://github.com/ThiagoZardo/solar-market"
      },
      {
        name: "ClinicFlow",
        tag: "Concept case",
        context: "Scheduling system for clinics and medical offices.",
        problem: "Front desks are overloaded with confirmations, rescheduling and no-shows.",
        solution: "Online scheduling with WhatsApp notifications, patient panel and attendance reports.",
        results: "Less manual messaging, fewer no-shows and a more organized operation.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "WhatsApp API"],
        github: "https://github.com/ThiagoZardo",
        demo: "#contact"
      }
    ],
    technologies: ["Next.js", "React", "React Native", "TypeScript", "Node.js", "NestJS", "Vue.js", "PHP", ".NET", "C#", "Python", "REST APIs", "GraphQL", "MySQL", "MongoDB", "AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD", "Jest"],
    testimonials: [
      {
        quote:
          "Thiago is extremely dedicated and committed to delivery quality, with strong responsibility around goals and deadlines.",
        author: "Caique Rechi",
        role: "LinkedIn recommendation"
      },
      {
        quote:
          "Always willing to help and collaborate with the team, he played a key role in Development and DevOps.",
        author: "Leonardo Henrique D.",
        role: "LinkedIn recommendation"
      }
    ],
    faq: [
      ["Do you work on small projects?", "Yes. Landing pages, automations and MVPs are excellent starting points when there is a clear problem."],
      ["Can you work on a monthly retainer?", "Yes. I can work on fixed-scope projects or ongoing maintenance, improvements and evolution."],
      ["Can you integrate WhatsApp, CRMs or existing systems?", "In most cases, yes. I first assess the API, permissions, volume and business rules."],
      ["Will the site be fast and SEO optimized?", "Yes. The foundation uses Next.js, technical metadata, semantic structure, responsiveness and performance best practices."]
    ],
    cta: {
      title: "Let's turn one business bottleneck into a simple system your team can actually use.",
      body: "Tell me what currently takes time, creates errors or lives in spreadsheets. I will help shape an objective solution.",
      button: "Message on WhatsApp"
    },
    contact: {
      title: "Request a quote",
      body: "Fill out the form or message me directly on WhatsApp. The more context you send, the more precise the proposal will be.",
      name: "Name",
      email: "Email",
      company: "Company",
      message: "Tell me about the project",
      submit: "Send by email"
    },
    footer: "Built with Next.js, TypeScript, Tailwind CSS and conversion-first thinking."
  },
  es: {
    nav: ["Sobre mi", "Servicios", "Proceso", "Proyectos", "FAQ", "Contacto"],
    hero: {
      eyebrow: "Sistemas web, automatizaciones y productos digitales",
      title: "Thiago Zardo",
      subtitle:
        "Creo sistemas web y automatizaciones que ahorran tiempo y aumentan la productividad de pequenas empresas.",
      primaryCta: "Solicitar presupuesto",
      secondaryCta: "Ver proyectos",
      metrics: [
        ["4+ anos", "en desarrollo full stack"],
        ["60 mil+", "organizaciones impactadas en producto SaaS"],
        ["-90%", "tiempo en simulacion critica optimizada"],
        ["99,9%", "continuidad operativa en plataforma critica"]
      ]
    },
    about: {
      eyebrow: "Sobre mi",
      title: "Tecnologia con mentalidad de negocio, no solo codigo.",
      body:
        "Soy desarrollador full stack con experiencia en React, React Native, Node.js, TypeScript, NestJS, cloud y automatizacion. He trabajado en productos SaaS, plataformas de ciberseguridad, sistemas distribuidos y modernizacion de legados, siempre conectando ingenieria con resultados operativos.",
      bullets: [
        "Experiencia en productos usados por miles de usuarios y organizaciones.",
        "Base solida en frontend, backend, mobile, APIs, DevOps y cloud.",
        "Formacion full stack en Trybe y Desarrollo de Sistemas en Estacio.",
        "Enfoque consultivo para entender procesos, cuellos de botella y retorno antes de implementar."
      ]
    },
    servicesTitle: "Servicios para empresas que quieren operar mejor",
    services: [
      ["Landing pages de alta conversion", "Paginas rapidas, persuasivas y preparadas para convertir visitantes en contactos calificados.", Globe2],
      ["Sistemas de agenda", "Flujos para clinicas, consultorios, talleres, gimnasios y servicios locales que reducen mensajes manuales.", CalendarCheck],
      ["CRM simple", "Control de leads, clientes, etapas, historial y proximas acciones sin planillas dispersas.", Layers3],
      ["Dashboards gerenciales", "Indicadores claros para acompanhar ventas, agenda, inventario, finanzas y operacion.", BarChart3],
      ["Integraciones con APIs", "Conexion entre pagos, ERPs, CRMs, WhatsApp, herramientas internas y bases de datos.", GitBranch],
      ["Automatizacion de WhatsApp", "Atencion inicial, notificaciones, recordatorios y recoleccion de datos con menos retrabajo.", MessageCircle],
      ["Sistemas a medida", "Aplicaciones web para procesos especificos que una herramienta lista no resuelve bien.", Code2],
      ["Aplicaciones web", "Experiencias responsivas, seguras y listas para crecer con el negocio.", Smartphone]
    ],
    process: {
      title: "Proceso claro, previsible y enfocado en resultados",
      steps: [
        ["Diagnostico", "Mapeo el problema, publico, flujo actual y criterio de exito."],
        ["Propuesta", "Defino alcance, entregables, prioridades, plazo e inversion."],
        ["Diseno y arquitectura", "Organizo experiencia, datos, integraciones y caminos criticos."],
        ["Desarrollo", "Construyo en ciclos cortos, con checkpoints y ajustes objetivos."],
        ["Entrega y evolucion", "Publico, acompanho metricas, corrijo fricciones y planifico mejoras."]
      ]
    },
    projectsTitle: "Proyectos destacados",
    projects: [
      {
        name: "AutoFlex",
        tag: "Proyecto real",
        context: "Sistema web y API para gestion operativa de talleres mecanicos.",
        problem: "Talleres pequenos dependen de mensajes dispersos, planillas y control manual de ordenes de servicio.",
        solution: "Aplicacion full stack con flujo de clientes, vehiculos, servicios, estados e historial centralizado.",
        results: "Reduce retrabajo administrativo y entrega una vision unica de la operacion.",
        tech: ["TypeScript", "React", "Node.js", "API REST"],
        github: "https://github.com/ThiagoZardo/autoflex-web",
        demo: "https://github.com/ThiagoZardo/autoflex-api"
      },
      {
        name: "RAG Lab",
        tag: "Proyecto real",
        context: "Laboratorio de IA para busqueda y respuestas basadas en documentos.",
        problem: "Empresas pierden tiempo buscando informacion en PDFs, politicas internas y bases dispersas.",
        solution: "Experimento TypeScript para estructurar consultas, contexto y respuestas asistidas por IA.",
        results: "Base conceptual para asistentes internos, soporte y automatizacion del conocimiento.",
        tech: ["TypeScript", "IA", "RAG", "Node.js"],
        github: "https://github.com/ThiagoZardo/rag-lab",
        demo: "https://github.com/ThiagoZardo/rag-lab"
      },
      {
        name: "SolarMarket Platform",
        tag: "Experiencia profesional",
        context: "Plataforma SaaS para integradores y distribuidores solares.",
        problem: "Procesos de venta, financiamiento, compras y simulacion necesitaban escala y estabilidad.",
        solution: "Actuacion full stack y DevOps con React, Vue, Node.js, NestJS, microservicios, AWS, GCP y Kubernetes.",
        results: "Deploys 2x mas frecuentes, costos de infraestructura 30% menores y simulacion critica mas de 90% mas rapida.",
        tech: ["React", "Node.js", "NestJS", "AWS", "GCP", "Kubernetes"],
        github: "https://github.com/ThiagoZardo/solar-market",
        demo: "https://github.com/ThiagoZardo/solar-market"
      },
      {
        name: "ClinicFlow",
        tag: "Case conceptual",
        context: "Sistema de agenda para clinicas y consultorios.",
        problem: "Recepciones sobrecargadas con confirmaciones, remarcaciones y ausencias.",
        solution: "Agenda online con notificaciones por WhatsApp, panel de pacientes e informes de asistencia.",
        results: "Menos mensajes manuales, menor tasa de ausencias y atencion mas organizada.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "WhatsApp API"],
        github: "https://github.com/ThiagoZardo",
        demo: "#contact"
      }
    ],
    technologies: ["Next.js", "React", "React Native", "TypeScript", "Node.js", "NestJS", "Vue.js", "PHP", ".NET", "C#", "Python", "REST APIs", "GraphQL", "MySQL", "MongoDB", "AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD", "Jest"],
    testimonials: [
      {
        quote:
          "Thiago es un desarrollador extremadamente dedicado y comprometido con la calidad de las entregas, con responsabilidad sobre metas y plazos.",
        author: "Caique Rechi",
        role: "Recomendacion en LinkedIn"
      },
      {
        quote:
          "Siempre dispuesto a ayudar y colaborar con el equipo, tuvo un papel fundamental en Desarrollo y DevOps.",
        author: "Leonardo Henrique D.",
        role: "Recomendacion en LinkedIn"
      }
    ],
    faq: [
      ["Trabajas en proyectos pequenos?", "Si. Landing pages, automatizaciones y MVPs son excelentes puntos de partida cuando existe un problema claro."],
      ["Trabajas con contrato mensual?", "Si. Puedo trabajar por proyecto cerrado o de forma recurrente para mantenimiento, mejoras y evolucion."],
      ["Puedo integrar WhatsApp, CRM o mi sistema actual?", "En la mayoria de los casos, si. Primero evaluo la API, permisos, volumen y reglas del proceso."],
      ["El sitio sera rapido y optimizado para SEO?", "Si. La base usa Next.js, metadata tecnica, estructura semantica, responsividad y buenas practicas de performance."]
    ],
    cta: {
      title: "Vamos a transformar un cuello de botella de tu negocio en un sistema simple de usar?",
      body: "Cuentame que hoy consume tiempo, genera errores o queda disperso en planillas. Te ayudo a disenar una solucion objetiva.",
      button: "Hablar por WhatsApp"
    },
    contact: {
      title: "Solicita un presupuesto",
      body: "Completa el formulario o escribeme directamente por WhatsApp. Cuanto mas contexto envies, mas precisa sera la propuesta.",
      name: "Nombre",
      email: "E-mail",
      company: "Empresa",
      message: "Cuentame sobre el proyecto",
      submit: "Enviar por e-mail"
    },
    footer: "Desarrollado con Next.js, TypeScript, Tailwind CSS y foco en conversion."
  }
} satisfies Record<Locale, unknown>;

export const capabilityIcons = [Rocket, Wrench, Workflow, Database, ShieldCheck, Bot];
