import type { Dictionary } from './types';

// English dictionary — must match the exact shape of pt.ts (typed as Dictionary).
export const en: Dictionary = {
  meta: {
    title: 'Matheus dos Reis — Full-Stack Developer',
    description:
      'Full-Stack Developer. Production systems for government agencies, companies and research institutes.',
  },

  nav: {
    inicio: 'Home',
    sobre: 'About',
    experiencia: 'Experience',
    projetos: 'Projects',
    contatos: 'Contact',
  },

  aria: {
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light theme',
    themeDark: 'Switch to dark theme',
    langToggle: 'Switch language to Portuguese',
    langPt: 'Switch to Portuguese',
    langEn: 'Switch to English',
  },

  inicio: {
    badge: 'Available for new projects',
    greeting: "Hi, I'm",
    role: 'Full-Stack Developer',
    seniority: 'Mid-Level Developer',
    lead: 'I build **production systems** for government agencies, companies and research institutes — combining a **robust back-end**, real-time data, **computer vision**, geoprocessing and **AI** integration.',
    btnCvPt: 'Download CV (PT)',
    btnCvEn: 'Download Resume',
    ctaProjects: 'View projects',
    stat1: 'production systems',
    stat2: 'sectors: gov · companies · institutes',
    stat3: 'years of experience',
    imgBadge: '**Rio de Janeiro**, Brazil · Full-Stack & AI',
  },

  sobre: {
    eyebrow: 'About me',
    title: 'About',
    p1: '**Full-stack** developer at Bugarin Tecnologia, where I design and maintain production systems for **government agencies**, companies and research institutes.',
    p2: "I work end to end — from the data model and API to the interface — focused on **reliable and scalable** solutions. I'm deeply interested in **computer vision**, geoprocessing, **real-time** systems and **AI** integration.",
    p3: 'I enjoy turning complex real-world problems into products that actually run in production — and taking care of the infrastructure too: Linux servers, Docker and HTTPS deployment.',
    traits: ['Team player', 'Ambitious and results-driven', 'Continuous learning and adaptability'],
    skillsEyebrow: 'What I work with',
    skillsTitle: 'Skills',
    tiers: ['Core', 'Solid', 'Familiar'],
    tiersHint: 'Ranked by real familiarity — from what I use daily to what I know well enough.',
    coreNames: [
      'Python',
      'Django / DRF',
      'FastAPI',
      'JavaScript / TypeScript',
      'AI integration (Gemini / Claude)',
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
        title: 'Real-time & Async',
        items: ['Django Channels', 'WebSockets', 'Daphne', 'Background tasks'],
      },
      {
        title: 'AI & Data',
        items: ['Gemini', 'Claude (Anthropic)', 'YOLO / Computer Vision', 'Pandas', 'NumPy', 'SciPy', 'Web scraping'],
      },
      {
        title: 'Geospatial',
        items: ['Leaflet', 'GeoJSON', 'GeoPy / UTM', 'BigQuery'],
      },
      {
        title: 'Front-end',
        items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap'],
      },
      {
        title: 'Databases & Infra',
        items: ['PostgreSQL', 'MySQL', 'SQLite', 'Docker', 'Linux / Nginx'],
      },
    ],
  },

  experiencia: {
    eyebrow: 'Career',
    title: 'Professional Experience',
    company: 'Bugarin Tecnologia',
    position: 'Full-Stack Developer',
    date: 'March 2024 — present',
    responsibilities: [
      'Design, development and maintenance of **full-stack** web applications with Django, Django REST Framework and FastAPI, serving government agencies, companies and research institutes.',
      'Building **real-time** systems with Django Channels and WebSockets — command centers, crisis rooms and live tracking of field teams.',
      'Integrating **computer vision** (YOLO/Ultralytics) for real-time people detection and counting from camera feeds.',
      'Integrating **AI** models (Google Gemini and Claude/Anthropic) for document analysis, compliance auditing and conversational assistants.',
      '**Geoprocessing** and interactive maps (Leaflet, GeoJSON, BigQuery) for geospatial intelligence and data visualization.',
      '**Web scraping** and data-collection automation across government systems (DETRAN, CNJ, TRT/TST), with scheduling and batch processing.',
      '**Linux server** administration: configuration, monitoring and deployment with Gunicorn/Nginx and HTTPS certificates to ensure stability and security.',
    ],
    domainsHead: "Domains I've worked in",
    domains: [
      'Transit & OOH Media',
      'Public Safety',
      'Civil Defense',
      'Legal',
      'Electoral Research',
      'Compliance & Licensing',
    ],
  },

  projetos: {
    eyebrow: 'Portfolio',
    title: 'Professional Projects',
    lead: 'Systems I designed and maintain in production at Bugarin Tecnologia, serving government agencies, companies and research institutes. As corporate solutions, the source code is private.',
    privateTag: 'Private',
    filters: {
      all: 'All',
      ai: 'AI',
      realtime: 'Real-time',
      geo: 'Geospatial',
      gov: 'Government',
      legal: 'Legal',
      data: 'Data',
    },
    pro: {
      pulsooh: {
        name: 'PulsOOH',
        client: 'Grupo VAMOOH · OOH Media & Transit',
        category: 'AI & Computer Vision',
        description:
          'Real-time intelligence platform that detects and counts people at transit stations and out-of-home media points using computer vision, with a public API, dashboards and geospatial maps.',
        highlights: [
          'Real-time detection and counting with YOLO',
          'Public REST API with time series and alerts',
          'BigQuery integration (official SMTR data)',
        ],
      },
      seop: {
        name: 'SEOP',
        client: 'Public Order Secretariat · Rio de Janeiro',
        category: 'Real-time & Geospatial',
        description:
          "Real-time operational coordination center for Rio de Janeiro's Public Order Secretariat, with geospatial mapping, crime analysis, AI-assisted strategic planning and modules for major events.",
        highlights: [
          'Live command via WebSocket (officers, vehicles, cameras)',
          'Leaflet maps and crime analysis',
          'AI-assisted resource planning (Gemini)',
        ],
      },
      sidec: {
        name: 'SIDEC',
        client: 'Niterói Civil Defense',
        category: 'Geospatial & Government',
        description:
          "Incident management platform for Niterói's Civil Defense, with geolocation, structured field inspections (slopes, buildings, trees), route optimization and automatic generation of official reports.",
        highlights: [
          'Geo-referenced multi-stage workflow',
          'Automatic inspections and interdiction reports',
          'Suggested routes (Waze API) and push notifications',
        ],
      },
      hive: {
        name: 'Hive',
        client: 'Niterói Civil Defense',
        category: 'Real-time & AI',
        description:
          'Crisis command center that coordinates standard operating procedures (SOPs) during disasters, with multi-user crisis rooms, real-time transcription and AI-generated post-incident reports.',
        highlights: [
          'SOPs structured by COBRADE code',
          'Multi-user real-time crisis rooms',
          'AI-generated post-incident reports',
        ],
      },
      sispd: {
        name: 'SISPD',
        client: 'Traffic law sector',
        category: 'Legal & Automation',
        description:
          "Integrated management system for traffic legal proceedings (driver's license), automating case tracking across multiple instances, with AI document reading and data mining from government systems.",
        highlights: [
          'Multi-instance tracking (Defense, JARI, CETRAN)',
          'AI document reading (Claude / Gemini)',
          'Automated collection from DETRAN and CNJ',
        ],
      },
      pirelli: {
        name: 'Pirelli Legal System',
        client: 'Pirelli · Labor litigation',
        category: 'Legal & Analytics',
        description:
          'Management and analytics platform for labor lawsuits at Pirelli, with automated collection from multiple courts, an AI legal assistant and executive dashboards with dozens of indicators.',
        highlights: [
          'Automated case collection (TRT / TST)',
          'Conversational legal assistant (Claude)',
          'Executive dashboards with 50+ KPIs and financial risk',
        ],
      },
      aval: {
        name: 'Aval',
        client: 'COPLAN · License management',
        category: 'Compliance & Automation',
        description:
          'Regulatory license management system for companies, with AI-automated auditing, renewal tracking via government integrations and compliance dashboards.',
        highlights: [
          'AI document auditing (Gemini)',
          'Renewal automation (CREMESP, VISA, REGIN)',
          'Compliance dashboards and Excel reports',
        ],
      },
      pesquisa: {
        name: 'Electoral Survey',
        client: 'Research institute',
        category: 'Data & Statistics',
        description:
          'Complete platform for managing and analyzing electoral surveys: questionnaire generator (CAPI/CATI/IVR/RDR), probability sampling with IBGE data, fraud detection and statistical weighting — compliant with the Brazilian Electoral Court (TSE) resolution.',
        highlights: [
          'Two-stage PPS sampling with IBGE data',
          'Fabrication detection via 5 algorithms',
          'Raking weighting and Highcharts dashboards',
        ],
      },
    },

    academicEyebrow: 'Foundations & learning',
    academicTitle: 'Academic & Personal Projects',
    academicLead:
      'Open-source projects I built while studying and exploring new technologies. Hover to see the stack — the code is on GitHub.',
    academic: {
      chat: {
        title: 'Real-time chat rooms',
        description: 'Chat rooms with simultaneous communication using Django Channels and WebSockets.',
      },
      parkapi: {
        title: 'Park API — parking management',
        description:
          'Back-end API for parking management: spot control, customers and check-in/out, persisted in MySQL.',
      },
      ecommerce: {
        title: 'E-commerce platform',
        description: 'Containerized e-commerce platform built with Django, Docker and PostgreSQL.',
      },
      classvision: {
        title: 'Class Vision API',
        description:
          'Node.js and TypeScript API with user authentication and full CRUD for classrooms and subjects.',
      },
      reactcrud: {
        title: 'Contacts CRUD in React',
        description: 'Contacts CRUD in React, with multiple filters and statistics.',
      },
    },
    verCodigo: 'View code',
    verMais: 'See more on GitHub',
  },

  contatos: {
    eyebrow: "Let's talk",
    title: 'Contact',
    lead: "Open to new projects and opportunities. Pick whichever channel you prefer — I'll get back to you soon.",
    copy: 'Copy',
    copied: 'Copied!',
    open: 'Open',
  },

  footer: {
    tagline:
      'Full-stack developer building production systems for government agencies, companies and research institutes.',
    navHead: 'Navigation',
    socialsHead: 'Where to find me',
    rights: 'All rights reserved.',
    madeWith: 'Built with React, TypeScript & styled-components.',
  },
};
