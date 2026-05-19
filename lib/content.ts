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
    nav: ["Sobre", "Servicos", "Processo", "Experiencia", "FAQ", "Contato"],
    hero: {
      eyebrow: "Sistemas web, automacoes e produtos digitais",
      title: "Thiago Zardo",
      subtitle:
        "Crio sistemas web e automacoes que economizam tempo e aumentam a produtividade de pequenas empresas.",
      primaryCta: "Solicitar orcamento",
      secondaryCta: "Ver experiencia",
      metrics: [
        ["SaaS real", "experiencia em produtos usados por empresas"],
        ["60 mil+", "organizacoes impactadas em plataforma global"],
        ["-90%", "tempo em simulacao critica otimizada"],
        ["30%", "reducao de custos de infraestrutura"]
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
        "Vivencia com SaaS, ciberseguranca, automacao, mobile, APIs, cloud e sistemas legados.",
        "Postura consultiva para entender processo, prioridade e retorno antes de implementar."
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
    projectsTitle: "Experiencia em produtos e empresas reais",
    projects: [
      {
        name: "Mosyle",
        tag: "Ciberseguranca e Apple Device Management",
        context: "Plataforma cloud-native para gerenciamento e seguranca de dispositivos Apple.",
        problem: "Produtos globais precisam evoluir funcionalidades criticas sem comprometer estabilidade, seguranca e continuidade operacional.",
        solution: "Atuacao full stack em funcionalidades, integracoes e modernizacao de base legada com foco em confiabilidade.",
        results: "Contribuicao em plataforma usada por mais de 60 mil organizacoes em mais de 100 paises.",
        tech: ["React Native", "Node.js", "PHP", ".NET", "C#", "AWS", "Microservices"],
        website: "https://mosyle.com/"
      },
      {
        name: "SolarMarket",
        tag: "SaaS e automacao para energia solar",
        context: "Plataforma para integradores e distribuidores solares com processos de venda, financiamento, compras e simulacao.",
        problem: "A operacao precisava escalar deploys, reduzir custos e melhorar performance de fluxos criticos.",
        solution: "Atuacao full stack e DevOps com React, Vue, Node.js, NestJS, AWS, GCP, Docker, Kubernetes e Terraform.",
        results: "Deploys 2x mais frequentes, custos de infraestrutura 30% menores e simulacao critica mais de 90% mais rapida.",
        tech: ["TypeScript", "Node.js", "NestJS", "React", "Vue", "AWS", "GCP", "Kubernetes"],
        website: "https://www.solarmarket.com.br/"
      },
      {
        name: "Control 361",
        tag: "Desenvolvimento full stack",
        context: "Empresa de tecnologia e servicos digitais com demandas web, mobile e integracoes.",
        problem: "Projetos com diferentes stacks exigiam velocidade de entrega e capacidade de atuar entre frontend, backend e mobile.",
        solution: "Desenvolvimento full stack com React Native, Node.js, PHP, .NET e C#.",
        results: "Entrega de funcionalidades em ambiente de produto e servicos, conectando experiencia do usuario e regras de negocio.",
        tech: ["React Native", "Node.js", "PHP", ".NET", "C#"],
        website: "https://control361.com.br/"
      },
      {
        name: "UNEX",
        tag: "Experiencia internacional",
        context: "Empresa com presenca digital na Argentina e demandas de tecnologia para negocios.",
        problem: "Ambientes digitais exigem comunicacao clara, confiabilidade e evolucao continua.",
        solution: "Experiencia aplicada em desenvolvimento e suporte a solucoes digitais com foco em usabilidade e manutencao.",
        results: "Vivencia em contexto internacional, colaborando com produtos e processos voltados a operacao real.",
        tech: ["Web", "Sistemas", "Processos", "Integracoes"],
        website: "https://unex.ar/"
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
      title: "Vamos simplificar um processo que hoje toma tempo da sua equipe?",
      body: "Conte onde a operacao trava, quais tarefas ainda sao manuais e que resultado voce espera melhorar. Eu ajudo a desenhar uma solucao objetiva.",
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
    nav: ["About", "Services", "Process", "Experience", "FAQ", "Contact"],
    hero: {
      eyebrow: "Web systems, automation and digital products",
      title: "Thiago Zardo",
      subtitle:
        "I build web systems and automations that save time and increase productivity for small businesses.",
      primaryCta: "Request a quote",
      secondaryCta: "View experience",
      metrics: [
        ["Real SaaS", "experience in products used by companies"],
        ["60k+", "organizations impacted in a global platform"],
        ["-90%", "runtime in optimized critical simulation"],
        ["30%", "reduction in infrastructure costs"]
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
        "Hands-on experience with SaaS, cybersecurity, automation, mobile, APIs, cloud and legacy systems.",
        "Consultative approach to understand workflow, priority and ROI before implementation."
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
    projectsTitle: "Experience in real products and companies",
    projects: [
      {
        name: "Mosyle",
        tag: "Cybersecurity and Apple Device Management",
        context: "Cloud-native platform for Apple device management and security.",
        problem: "Global products need to evolve critical features without compromising stability, security and operational continuity.",
        solution: "Full stack work on features, integrations and legacy modernization with a reliability focus.",
        results: "Contribution to a platform used by more than 60,000 organizations in over 100 countries.",
        tech: ["React Native", "Node.js", "PHP", ".NET", "C#", "AWS", "Microservices"],
        website: "https://mosyle.com/"
      },
      {
        name: "SolarMarket",
        tag: "SaaS and automation for solar energy",
        context: "Platform for solar integrators and distributors across sales, financing, purchasing and simulation workflows.",
        problem: "The operation needed to scale deployments, reduce costs and improve performance in critical flows.",
        solution: "Full stack and DevOps work with React, Vue, Node.js, NestJS, AWS, GCP, Docker, Kubernetes and Terraform.",
        results: "2x deployment frequency, 30% lower infrastructure costs and a critical simulation over 90% faster.",
        tech: ["TypeScript", "Node.js", "NestJS", "React", "Vue", "AWS", "GCP", "Kubernetes"],
        website: "https://www.solarmarket.com.br/"
      },
      {
        name: "Control 361",
        tag: "Full stack development",
        context: "Technology and digital services company with web, mobile and integration demands.",
        problem: "Projects across different stacks required delivery speed and the ability to work across frontend, backend and mobile.",
        solution: "Full stack development with React Native, Node.js, PHP, .NET and C#.",
        results: "Feature delivery in product and services environments, connecting user experience and business rules.",
        tech: ["React Native", "Node.js", "PHP", ".NET", "C#"],
        website: "https://control361.com.br/"
      },
      {
        name: "UNEX",
        tag: "International experience",
        context: "Company with digital presence in Argentina and technology demands for business operations.",
        problem: "Digital environments require clear communication, reliability and continuous evolution.",
        solution: "Applied experience in development and support for digital solutions focused on usability and maintenance.",
        results: "Experience in an international context, collaborating with products and processes tied to real operations.",
        tech: ["Web", "Systems", "Processes", "Integrations"],
        website: "https://unex.ar/"
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
      title: "Let's simplify a process that currently takes time from your team.",
      body: "Tell me where the operation slows down, which tasks are still manual and what result you want to improve. I will help shape an objective solution.",
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
    nav: ["Sobre mi", "Servicios", "Proceso", "Experiencia", "FAQ", "Contacto"],
    hero: {
      eyebrow: "Sistemas web, automatizaciones y productos digitales",
      title: "Thiago Zardo",
      subtitle:
        "Creo sistemas web y automatizaciones que ahorran tiempo y aumentan la productividad de pequenas empresas.",
      primaryCta: "Solicitar presupuesto",
      secondaryCta: "Ver experiencia",
      metrics: [
        ["SaaS real", "experiencia en productos usados por empresas"],
        ["60 mil+", "organizaciones impactadas en plataforma global"],
        ["-90%", "tiempo en simulacion critica optimizada"],
        ["30%", "reduccion de costos de infraestructura"]
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
        "Experiencia practica con SaaS, ciberseguridad, automatizacion, mobile, APIs, cloud y sistemas legados.",
        "Enfoque consultivo para entender procesos, prioridades y retorno antes de implementar."
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
    projectsTitle: "Experiencia en productos y empresas reales",
    projects: [
      {
        name: "Mosyle",
        tag: "Ciberseguridad y Apple Device Management",
        context: "Plataforma cloud-native para gestion y seguridad de dispositivos Apple.",
        problem: "Productos globales necesitan evolucionar funcionalidades criticas sin comprometer estabilidad, seguridad y continuidad operativa.",
        solution: "Actuacion full stack en funcionalidades, integraciones y modernizacion de base legada con foco en confiabilidad.",
        results: "Contribucion en plataforma usada por mas de 60 mil organizaciones en mas de 100 paises.",
        tech: ["React Native", "Node.js", "PHP", ".NET", "C#", "AWS", "Microservices"],
        website: "https://mosyle.com/"
      },
      {
        name: "SolarMarket",
        tag: "SaaS y automatizacion para energia solar",
        context: "Plataforma para integradores y distribuidores solares con procesos de venta, financiamiento, compras y simulacion.",
        problem: "La operacion necesitaba escalar deploys, reducir costos y mejorar performance en flujos criticos.",
        solution: "Actuacion full stack y DevOps con React, Vue, Node.js, NestJS, AWS, GCP, Docker, Kubernetes y Terraform.",
        results: "Deploys 2x mas frecuentes, costos de infraestructura 30% menores y simulacion critica mas de 90% mas rapida.",
        tech: ["TypeScript", "Node.js", "NestJS", "React", "Vue", "AWS", "GCP", "Kubernetes"],
        website: "https://www.solarmarket.com.br/"
      },
      {
        name: "Control 361",
        tag: "Desarrollo full stack",
        context: "Empresa de tecnologia y servicios digitales con demandas web, mobile e integraciones.",
        problem: "Proyectos con diferentes stacks exigian velocidad de entrega y capacidad de actuar entre frontend, backend y mobile.",
        solution: "Desarrollo full stack con React Native, Node.js, PHP, .NET y C#.",
        results: "Entrega de funcionalidades en ambiente de producto y servicios, conectando experiencia de usuario y reglas de negocio.",
        tech: ["React Native", "Node.js", "PHP", ".NET", "C#"],
        website: "https://control361.com.br/"
      },
      {
        name: "UNEX",
        tag: "Experiencia internacional",
        context: "Empresa con presencia digital en Argentina y demandas de tecnologia para negocios.",
        problem: "Ambientes digitales exigen comunicacion clara, confiabilidad y evolucion continua.",
        solution: "Experiencia aplicada en desarrollo y soporte a soluciones digitales con foco en usabilidad y mantenimiento.",
        results: "Vivencia en contexto internacional, colaborando con productos y procesos orientados a operacion real.",
        tech: ["Web", "Sistemas", "Procesos", "Integraciones"],
        website: "https://unex.ar/"
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
      title: "Vamos a simplificar un proceso que hoy le quita tiempo a tu equipo?",
      body: "Cuentame donde la operacion se frena, que tareas siguen siendo manuales y que resultado quieres mejorar. Te ayudo a disenar una solucion objetiva.",
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
