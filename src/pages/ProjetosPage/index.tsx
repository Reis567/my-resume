import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Eye,
  Scale,
  Shield,
  BadgeCheck,
  BarChart3,
  MapPin,
  Radio,
  Landmark,
  Building2,
  Check,
  Lock,
  Github,
  ArrowUpRight,
} from 'lucide-react';
import { SButton } from '@/components/Buttons/SButton';
import { useReveal } from '@/hooks/useReveal';
import { useTilt } from '@/hooks/useTilt';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ProjectId, AcademicId, FilterKey } from '@/i18n';
import {
  SProjetos,
  SEyebrow,
  STitle,
  SLead,
  SFilter,
  SFilterBtn,
  SCards,
  SProCard,
  SProBody,
  SProHead,
  SPrivateTag,
  SProName,
  SProClient,
  SProDesc,
  SHighlights,
  STechRow,
  STechPill,
  SDivider,
  SAcademicGrid,
  SAcaCard,
  SAcaMedia,
  SAcaImg,
  SAcaPlaceholder,
  SAcaOverlay,
  SAcaChips,
  SAcaChip,
  SAcaCodeLink,
  SAcaBody,
  SAcaTitle,
  SAcaDesc,
  SVerMaisWrap,
} from './index.style';

type IconType = React.ComponentType<{ size?: number | string }>;

interface ProBase {
  id: ProjectId;
  icon: IconType;
  accent: string;
  tech: string[];
  tags: FilterKey[];
}

// Dados estruturais (não traduzíveis); textos vêm do i18n via id.
const proBase: ProBase[] = [
  {
    id: 'pulsooh',
    icon: Eye,
    accent: '#b9762e',
    tech: ['Python', 'Django', 'DRF', 'YOLO / Ultralytics', 'MySQL', 'BigQuery', 'Leaflet', 'Docker'],
    tags: ['ai', 'geo', 'data'],
  },
  {
    id: 'seop',
    icon: Shield,
    accent: '#45617d',
    tech: ['Python', 'Django', 'Channels', 'DRF', 'Leaflet', 'MySQL', 'Gemini'],
    tags: ['realtime', 'geo', 'gov', 'ai'],
  },
  {
    id: 'sidec',
    icon: MapPin,
    accent: '#3f7a4f',
    tech: ['Python', 'Django', 'Channels', 'GeoPy', 'WeasyPrint', 'FCM'],
    tags: ['geo', 'realtime', 'gov'],
  },
  {
    id: 'hive',
    icon: Radio,
    accent: '#8a4f6d',
    tech: ['Python', 'Django', 'Channels', 'WebSockets', 'AI'],
    tags: ['realtime', 'gov', 'ai'],
  },
  {
    id: 'sispd',
    icon: Scale,
    accent: '#c0563c',
    tech: ['Python', 'Django', 'MySQL', 'Claude', 'Gemini', 'Web scraping'],
    tags: ['legal', 'ai'],
  },
  {
    id: 'pirelli',
    icon: Landmark,
    accent: '#9a4a4a',
    tech: ['Python', 'Django', 'MySQL', 'Claude', 'Chart.js', 'Pandas'],
    tags: ['legal', 'data', 'ai'],
  },
  {
    id: 'aval',
    icon: BadgeCheck,
    accent: '#6f7d3a',
    tech: ['Python', 'Django', 'MySQL', 'Gemini', 'Google Maps', 'Pandas'],
    tags: ['ai', 'data'],
  },
  {
    id: 'pesquisa',
    icon: BarChart3,
    accent: '#2f7d77',
    tech: ['Python', 'FastAPI', 'SQLite', 'NumPy', 'Pandas', 'SciPy', 'Highcharts'],
    tags: ['data'],
  },
];

const filterKeys: FilterKey[] = ['all', 'ai', 'realtime', 'geo', 'gov', 'legal', 'data'];

interface AcademicBase {
  id: AcademicId;
  image?: string;
  logo?: string;
  tech: string[];
  githubLink: string;
}

// 5 projetos curados — variedade de stack/feature, sem CRUDs duplicados.
const academicBase: AcademicBase[] = [
  {
    id: 'chat',
    image: '/projetos/chat.PNG',
    tech: ['Python', 'Django', 'PostgreSQL', 'JavaScript'],
    githubLink: 'https://github.com/Reis567/chat3Django',
  },
  {
    id: 'parkapi',
    logo: 'devicon-spring-plain colored',
    tech: ['Java', 'Spring Boot', 'MySQL'],
    githubLink: 'https://github.com/Reis567/park-api',
  },
  {
    id: 'ecommerce',
    image: '/projetos/home.PNG',
    tech: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    githubLink: 'https://github.com/Reis567/ecommerce-django',
  },
  {
    id: 'classvision',
    image: '/projetos/classvision.PNG',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL'],
    githubLink: 'https://github.com/Reis567/class_vision',
  },
  {
    id: 'reactcrud',
    image: '/projetos/leste.JPG',
    tech: ['React', 'JavaScript', 'Tailwind'],
    githubLink: 'https://github.com/Reis567/lestereact2',
  },
];

const AcademicCard: React.FC<{ base: AcademicBase }> = ({ base }) => {
  const { t } = useLanguage();
  const tr = t.projetos.academic[base.id];
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const tiltRef = useTilt<HTMLDivElement>({ max: 6, scale: 1.02 });

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <SAcaCard ref={tiltRef}>
      <SAcaMedia>
        {base.image ? (
          <SAcaImg
            ref={imgRef}
            src={base.image}
            alt={tr.title}
            loading="lazy"
            className={loaded ? 'loaded' : ''}
            onLoad={() => setLoaded(true)}
          />
        ) : (
          <SAcaPlaceholder aria-hidden="true">
            <i className={base.logo} />
          </SAcaPlaceholder>
        )}
        <SAcaOverlay>
          <SAcaChips>
            {base.tech.map((x) => (
              <SAcaChip key={x}>{x}</SAcaChip>
            ))}
          </SAcaChips>
          <SAcaCodeLink href={base.githubLink} target="_blank" rel="noopener noreferrer">
            <Github size={15} />
            {t.projetos.verCodigo}
          </SAcaCodeLink>
        </SAcaOverlay>
      </SAcaMedia>
      <SAcaBody>
        <SAcaTitle>{tr.title}</SAcaTitle>
        <SAcaDesc>{tr.description}</SAcaDesc>
      </SAcaBody>
    </SAcaCard>
  );
};

const Projetos: React.FC = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState<FilterKey>('all');
  const proGrid = useReveal<HTMLDivElement>();
  const acaGrid = useReveal<HTMLDivElement>();

  const filtered = useMemo(
    () => (active === 'all' ? proBase : proBase.filter((p) => p.tags.includes(active))),
    [active]
  );

  const openLink = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

  return (
    <SProjetos>
      <SEyebrow>{t.projetos.eyebrow}</SEyebrow>
      <STitle>{t.projetos.title}</STitle>
      <SLead>{t.projetos.lead}</SLead>

      <SFilter>
        {filterKeys.map((f) => (
          <SFilterBtn key={f} active={active === f} onClick={() => setActive(f)}>
            {t.projetos.filters[f]}
          </SFilterBtn>
        ))}
      </SFilter>

      <SCards ref={proGrid.ref} className={`stagger ${proGrid.inView ? 'is-visible' : ''}`}>
        {filtered.map((p) => {
          const tr = t.projetos.pro[p.id];
          const Icon = p.icon;
          return (
            <SProCard key={p.id} style={{ '--accent': p.accent } as React.CSSProperties}>
              <SProBody>
                <SProHead>
                  <span className="ico">
                    <Icon size={24} />
                  </span>
                  <span className="cat">{tr.category}</span>
                  <SPrivateTag>
                    <Lock size={11} /> {t.projetos.privateTag}
                  </SPrivateTag>
                </SProHead>

                <SProName>{tr.name}</SProName>
                <SProClient>
                  <Building2 size={15} />
                  {tr.client}
                </SProClient>

                <SProDesc>{tr.description}</SProDesc>

                <SHighlights>
                  {tr.highlights.map((h) => (
                    <li key={h}>
                      <Check size={16} />
                      {h}
                    </li>
                  ))}
                </SHighlights>

                <STechRow>
                  {p.tech.map((tech) => (
                    <STechPill key={tech}>{tech}</STechPill>
                  ))}
                </STechRow>
              </SProBody>
            </SProCard>
          );
        })}
      </SCards>

      <SDivider>
        <SEyebrow>{t.projetos.academicEyebrow}</SEyebrow>
        <STitle>{t.projetos.academicTitle}</STitle>
        <SLead>{t.projetos.academicLead}</SLead>
      </SDivider>

      <SAcademicGrid
        ref={acaGrid.ref}
        className={`stagger-fade ${acaGrid.inView ? 'is-visible' : ''}`}
      >
        {academicBase.map((p) => (
          <AcademicCard key={p.id} base={p} />
        ))}
      </SAcademicGrid>

      <SVerMaisWrap>
        <SButton onClick={() => openLink('https://github.com/Reis567')}>
          {t.projetos.verMais}
          <ArrowUpRight size={18} style={{ marginLeft: 8 }} />
        </SButton>
      </SVerMaisWrap>
    </SProjetos>
  );
};

export default Projetos;
