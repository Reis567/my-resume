// Dicionário PT-BR — fonte de verdade do shape (en.ts deve ter as MESMAS chaves).
// Texto com **negrito** é renderizado via helper rich().

export const pt = {
  meta: {
    title: 'Matheus dos Reis — Desenvolvedor Full-Stack',
    description:
      'Desenvolvedor Full-Stack. Sistemas em produção para órgãos públicos, empresas e institutos de pesquisa.',
  },

  nav: {
    inicio: 'Início',
    sobre: 'Sobre',
    experiencia: 'Experiência',
    projetos: 'Projetos',
    contatos: 'Contatos',
  },

  aria: {
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    themeLight: 'Ativar tema claro',
    themeDark: 'Ativar tema escuro',
    langToggle: 'Mudar idioma para inglês',
    langPt: 'Mudar para português',
    langEn: 'Mudar para inglês',
  },

  inicio: {
    badge: 'Disponível para novos projetos',
    greeting: 'Olá, sou',
    role: 'Desenvolvedor Full-Stack',
    seniority: 'Desenvolvedor Pleno',
    lead: 'Construo **sistemas em produção** para órgãos públicos, empresas e institutos de pesquisa — unindo **back-end robusto**, dados em tempo real, **visão computacional**, geoprocessamento e integração com **IA**.',
    btnCvPt: 'Baixar Currículo',
    btnCvEn: 'Currículo (EN)',
    ctaProjects: 'Ver projetos',
    stat1: 'sistemas em produção',
    stat2: 'setores: gov · empresas · institutos',
    stat3: 'anos de experiência',
    imgBadge: '**Rio de Janeiro**, Brasil · Full-Stack & IA',
  },

  sobre: {
    eyebrow: 'Quem sou',
    title: 'Sobre',
    p1: 'Desenvolvedor **full-stack** na Bugarin Tecnologia, onde projeto e mantenho sistemas em produção para **órgãos públicos**, empresas e institutos de pesquisa.',
    p2: 'Atuo de ponta a ponta — do modelo de dados e da API até a interface — com foco em soluções **confiáveis e escaláveis**. Tenho forte interesse por **visão computacional**, geoprocessamento, sistemas em **tempo real** e integração com **IA**.',
    p3: 'Gosto de transformar problemas complexos do mundo real em produtos que de fato funcionam em produção, e de cuidar também da infraestrutura: servidores Linux, Docker e implantação com HTTPS.',
    traits: [
      'Trabalho em equipe',
      'Ambicioso e orientado a resultados',
      'Aprendizado contínuo e adaptação',
    ],
    skillsEyebrow: 'O que eu uso',
    skillsTitle: 'Skills',
    tiers: ['Domínio', 'Sólido', 'Familiar'],
    tiersHint: 'Classifico por familiaridade real — do que uso todo dia ao que conheço o suficiente.',
    coreNames: [
      'Python',
      'Django / DRF',
      'FastAPI',
      'JavaScript / TypeScript',
      'Integração com IA (Gemini / Claude)',
      'PostgreSQL / MySQL',
      'React',
      'Docker / Linux',
    ],
    groups: [
      {
        title: 'Back-end & APIs',
        items: ['Django', 'Django REST Framework', 'FastAPI', 'Node.js', 'Spring Boot', 'Gunicorn'],
      },
      {
        title: 'Tempo real & Async',
        items: ['Django Channels', 'WebSockets', 'Daphne', 'Tarefas em background'],
      },
      {
        title: 'IA & Dados',
        items: ['Gemini', 'Claude (Anthropic)', 'YOLO / Visão Computacional', 'Pandas', 'NumPy', 'SciPy', 'Web scraping'],
      },
      {
        title: 'Geoespacial',
        items: ['Leaflet', 'GeoJSON', 'GeoPy / UTM', 'BigQuery'],
      },
      {
        title: 'Front-end',
        items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap'],
      },
      {
        title: 'Banco de dados & Infra',
        items: ['PostgreSQL', 'MySQL', 'SQLite', 'Docker', 'Linux / Nginx'],
      },
    ],
  },

  experiencia: {
    eyebrow: 'Trajetória',
    title: 'Experiência Profissional',
    company: 'Bugarin Tecnologia',
    position: 'Desenvolvedor Full-Stack',
    date: 'Março / 2024 — atual',
    responsibilities: [
      'Concepção, desenvolvimento e manutenção de aplicações web **full-stack** com Django, Django REST Framework e FastAPI, atendendo órgãos públicos, empresas e institutos de pesquisa.',
      'Construção de sistemas em **tempo real** com Django Channels e WebSockets — centros de comando, salas de crise e rastreamento ao vivo de equipes em campo.',
      'Integração de **visão computacional** (YOLO/Ultralytics) para detecção e contagem de pessoas em tempo real a partir de câmeras.',
      'Integração com modelos de **IA** (Google Gemini e Claude/Anthropic) para análise de documentos, auditoria de conformidade e assistentes conversacionais.',
      '**Geoprocessamento** e mapas interativos (Leaflet, GeoJSON, BigQuery) para inteligência geoespacial e visualização de dados.',
      '**Web scraping** e automação de coleta de dados em sistemas governamentais (DETRAN, CNJ, TRT/TST), com agendamento e processamento em lote.',
      'Administração de **servidores Linux**: configuração, monitoramento e deploy com Gunicorn/Nginx e certificados HTTPS para garantir estabilidade e segurança.',
    ],
    domainsHead: 'Domínios em que atuei',
    domains: [
      'Transporte & Mídia OOH',
      'Segurança Pública',
      'Defesa Civil',
      'Jurídico',
      'Pesquisa Eleitoral',
      'Compliance & Licenças',
    ],
  },

  projetos: {
    eyebrow: 'Portfólio',
    title: 'Projetos Profissionais',
    lead: 'Sistemas que projetei e mantenho em produção na Bugarin Tecnologia, atendendo órgãos públicos, empresas e institutos de pesquisa. Por serem soluções corporativas, o código é privado.',
    privateTag: 'Privado',
    filters: {
      all: 'Todos',
      ai: 'IA',
      realtime: 'Tempo real',
      geo: 'Geoespacial',
      gov: 'Governo',
      legal: 'Jurídico',
      data: 'Dados',
    },
    pro: {
      pulsooh: {
        name: 'PulsOOH',
        client: 'Grupo VAMOOH · Mídia OOH & Transporte',
        category: 'IA & Visão Computacional',
        description:
          'Plataforma de inteligência em tempo real que detecta e conta pessoas em estações de transporte e pontos de mídia out-of-home usando visão computacional, com API pública, dashboards e mapas geoespaciais.',
        highlights: [
          'Detecção e contagem com YOLO em tempo real',
          'API REST pública com séries temporais e alertas',
          'Integração com BigQuery (dados oficiais SMTR)',
        ],
      },
      seop: {
        name: 'SEOP',
        client: 'Secretaria de Ordem Pública · Rio de Janeiro',
        category: 'Tempo Real & Geoespacial',
        description:
          'Centro de coordenação operacional em tempo real para a Secretaria de Ordem Pública do RJ, com mapeamento geoespacial, análise de criminalidade, planejamento estratégico por IA e módulos para grandes eventos.',
        highlights: [
          'Comando ao vivo via WebSocket (guardas, viaturas, câmeras)',
          'Mapas Leaflet e análise de criminalidade',
          'Planejamento de recursos assistido por IA (Gemini)',
        ],
      },
      sidec: {
        name: 'SIDEC',
        client: 'Defesa Civil de Niterói',
        category: 'Geoespacial & Governo',
        description:
          'Plataforma de gestão de ocorrências da Defesa Civil de Niterói, com geolocalização, vistorias estruturadas (taludes, edificações, árvores), otimização de rotas e geração automática de laudos oficiais.',
        highlights: [
          'Workflow multi-etapa georreferenciado',
          'Vistorias e laudos de interdição automáticos',
          'Rotas sugeridas (API Waze) e notificações push',
        ],
      },
      hive: {
        name: 'Hive',
        client: 'Defesa Civil de Niterói',
        category: 'Tempo Real & IA',
        description:
          'Centro de comando de crises que coordena procedimentos operacionais padronizados (POPs) durante desastres, com salas de crise multiusuário, transcrição em tempo real e relatórios pós-incidente gerados por IA.',
        highlights: [
          'POPs estruturados por código COBRADE',
          'Salas de crise multiusuário em tempo real',
          'Relatórios pós-incidente gerados por IA',
        ],
      },
      sispd: {
        name: 'SISPD',
        client: 'Setor jurídico de trânsito',
        category: 'Jurídico & Automação',
        description:
          'Sistema de gestão integrada de processos jurídicos de trânsito (CNH), automatizando o acompanhamento de casos em múltiplas instâncias, com leitura de documentos por IA e mineração de dados em sistemas governamentais.',
        highlights: [
          'Acompanhamento multi-instância (Defesa, JARI, CETRAN)',
          'Leitura de documentos com IA (Claude / Gemini)',
          'Coleta automatizada em DETRAN e CNJ',
        ],
      },
      pirelli: {
        name: 'Sistema Jurídico Pirelli',
        client: 'Pirelli · Contencioso trabalhista',
        category: 'Jurídico & Analytics',
        description:
          'Plataforma de gestão e analytics de processos trabalhistas para a Pirelli, com coleta automatizada de múltiplos tribunais, assistente jurídico por IA e dashboards executivos com dezenas de indicadores.',
        highlights: [
          'Coleta automatizada de processos (TRT / TST)',
          'Assistente jurídico conversacional (Claude)',
          'Dashboards executivos com 50+ KPIs e risco financeiro',
        ],
      },
      aval: {
        name: 'Aval',
        client: 'COPLAN · Gestão de licenças',
        category: 'Compliance & Automação',
        description:
          'Sistema de gerência de licenças regulatórias para empresas, com auditoria automatizada por IA, rastreamento de renovações via integrações governamentais e dashboards de conformidade.',
        highlights: [
          'Auditoria de documentos por IA (Gemini)',
          'Automação de renovações (CREMESP, VISA, REGIN)',
          'Dashboards de conformidade e relatórios Excel',
        ],
      },
      pesquisa: {
        name: 'Pesquisa Eleitoral',
        client: 'Instituto de pesquisa',
        category: 'Dados & Estatística',
        description:
          'Plataforma completa de gestão e análise de pesquisas eleitorais: gerador de questionários (CAPI/CATI/IVR/RDR), amostragem probabilística com dados do IBGE, detecção de fraude e ponderação estatística — conforme a Resolução TSE.',
        highlights: [
          'Amostragem PPT em dois estágios com dados do IBGE',
          'Detecção de fabricação por 5 algoritmos',
          'Ponderação por raking e dashboards Highcharts',
        ],
      },
    },

    academicEyebrow: 'Base & aprendizado',
    academicTitle: 'Projetos Acadêmicos & Pessoais',
    academicLead:
      'Projetos open-source que construí estudando e explorando novas tecnologias. Passe o mouse para ver a stack — o código está no GitHub.',
    academic: {
      chat: {
        title: 'Salas de chat em tempo real',
        description:
          'Salas de chat com comunicação simultânea usando Django Channels e WebSockets.',
      },
      parkapi: {
        title: 'Park API — gestão de estacionamentos',
        description:
          'API back-end para gerenciamento de estacionamentos: controle de vagas, clientes e check-in/out, com persistência em MySQL.',
      },
      ecommerce: {
        title: 'Plataforma E-commerce',
        description: 'Plataforma de e-commerce containerizada em Django, Docker e PostgreSQL.',
      },
      classvision: {
        title: 'Class Vision API',
        description:
          'API em Node.js e TypeScript com autenticação de usuários e CRUD completo de salas de aula e disciplinas.',
      },
      reactcrud: {
        title: 'CRUD de contatos em React',
        description: 'CRUD de contatos em React, com diversos filtros e estatísticas.',
      },
    },
    verCodigo: 'Ver código',
    verMais: 'Ver mais no GitHub',
  },

  contatos: {
    eyebrow: 'Vamos conversar',
    title: 'Contatos',
    lead: 'Aberto a novos projetos e oportunidades. Escolha o canal que preferir — respondo o quanto antes.',
    copy: 'Copiar',
    copied: 'Copiado!',
    open: 'Abrir',
  },

  footer: {
    tagline:
      'Desenvolvedor full-stack construindo sistemas em produção para órgãos públicos, empresas e institutos de pesquisa.',
    navHead: 'Navegação',
    socialsHead: 'Onde me encontrar',
    rights: 'Todos os direitos reservados.',
    madeWith: 'Feito com React, TypeScript & styled-components.',
  },
};
