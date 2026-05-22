import React from 'react';
import { Server, Radio, Brain, Map, LayoutGrid, Database, Users, Rocket, RefreshCw } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { rich } from '@/i18n/rich';
import {
  SSobre,
  SEyebrow,
  STitle,
  SBody,
  SBText,
  STraits,
  STrait,
  SSkills,
  SSkillsHead,
  SLegend,
  SLegendItem,
  SCoreGrid,
  SCoreItem,
  SBar,
  SGroups,
  SGroup,
  SPills,
  SPill,
} from './index.style';

type IconType = React.ComponentType<{ size?: number | string }>;

// 0 = Domínio (uso diário) · 1 = Sólido · 2 = Familiar — alinhado a t.sobre.tiers
const coreTiers = [0, 0, 1, 1, 1, 1, 2, 2];
const tierWidth = [100, 72, 48];
const groupIcons: IconType[] = [Server, Radio, Brain, Map, LayoutGrid, Database];
const traitIcons: IconType[] = [Users, Rocket, RefreshCw];

const Sobre: React.FC = () => {
  const { t } = useLanguage();
  const body = useReveal<HTMLDivElement>();
  const core = useReveal<HTMLDivElement>();
  const groups = useReveal<HTMLDivElement>();

  return (
    <SSobre>
      <SEyebrow>{t.sobre.eyebrow}</SEyebrow>
      <STitle>{t.sobre.title}</STitle>

      <SBody ref={body.ref} className={`stagger ${body.inView ? 'is-visible' : ''}`}>
        <SBText>
          <p>{rich(t.sobre.p1)}</p>
          <p>{rich(t.sobre.p2)}</p>
          <p>{rich(t.sobre.p3)}</p>
        </SBText>

        <STraits>
          {t.sobre.traits.map((text, i) => {
            const Icon = traitIcons[i];
            return (
              <STrait key={text}>
                {Icon ? <Icon size={22} /> : null}
                {text}
              </STrait>
            );
          })}
        </STraits>
      </SBody>

      <SSkills>
        <SSkillsHead>
          <SEyebrow>{t.sobre.skillsEyebrow}</SEyebrow>
          <STitle>{t.sobre.skillsTitle}</STitle>
        </SSkillsHead>

        <SLegend>
          <span className="hint">{t.sobre.tiersHint}</span>
          <div className="keys">
            {t.sobre.tiers.map((label, i) => (
              <SLegendItem key={label} data-tier={i}>
                <span className="dot" />
                {label}
              </SLegendItem>
            ))}
          </div>
        </SLegend>

        <SCoreGrid ref={core.ref} className={`stagger ${core.inView ? 'is-visible' : ''}`}>
          {t.sobre.coreNames.map((name, i) => {
            const tier = coreTiers[i] ?? 2;
            return (
              <SCoreItem key={name} data-tier={tier}>
                <div className="row">
                  <span className="name">{name}</span>
                  <span className="lvl">{t.sobre.tiers[tier]}</span>
                </div>
                <SBar>
                  <span style={{ '--w': `${tierWidth[tier]}%` } as React.CSSProperties} />
                </SBar>
              </SCoreItem>
            );
          })}
        </SCoreGrid>

        <SGroups ref={groups.ref} className={`stagger ${groups.inView ? 'is-visible' : ''}`}>
          {t.sobre.groups.map((g, i) => {
            const Icon = groupIcons[i];
            return (
              <SGroup key={g.title}>
                <div className="head">
                  <span className="ico">{Icon ? <Icon size={22} /> : null}</span>
                  <span className="title">{g.title}</span>
                </div>
                <SPills>
                  {g.items.map((it) => (
                    <SPill key={it}>{it}</SPill>
                  ))}
                </SPills>
              </SGroup>
            );
          })}
        </SGroups>
      </SSkills>
    </SSobre>
  );
};

export default Sobre;
