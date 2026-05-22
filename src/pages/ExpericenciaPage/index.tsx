import React from 'react';
import { CalendarDays } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { rich } from '@/i18n/rich';
import {
  ExperienceContainerS,
  EyebrowS,
  TitleS,
  TimelineS,
  ExperienceItemS,
  SubTitleS,
  CompanyS,
  PositionS,
  DateS,
  ListS,
  ParagrafS,
  DomainsHeadS,
  DomainsS,
  DomainPillS,
} from './index.style';

const Experiencia: React.FC = () => {
  const { t } = useLanguage();
  const item = useReveal<HTMLElement>();

  return (
    <ExperienceContainerS>
      <EyebrowS>{t.experiencia.eyebrow}</EyebrowS>
      <TitleS>{t.experiencia.title}</TitleS>

      <TimelineS>
        <ExperienceItemS ref={item.ref} className={`reveal ${item.inView ? 'is-visible' : ''}`}>
          <CompanyS>{t.experiencia.company}</CompanyS>
          <SubTitleS>
            <PositionS>{t.experiencia.position}</PositionS>
            <DateS>
              <CalendarDays size={15} />
              {t.experiencia.date}
            </DateS>
          </SubTitleS>

          <ListS>
            {t.experiencia.responsibilities.map((item, i) => (
              <ParagrafS key={i}>{rich(item)}</ParagrafS>
            ))}
          </ListS>

          <DomainsHeadS>{t.experiencia.domainsHead}</DomainsHeadS>
          <DomainsS>
            {t.experiencia.domains.map((d) => (
              <DomainPillS key={d}>{d}</DomainPillS>
            ))}
          </DomainsS>
        </ExperienceItemS>
      </TimelineS>
    </ExperienceContainerS>
  );
};

export default Experiencia;
