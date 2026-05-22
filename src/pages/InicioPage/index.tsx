import React from 'react';
import { ArrowRight, MapPin, BadgeCheck } from 'lucide-react';
import { SButton } from '@/components/Buttons/SButton';
import { useReveal } from '@/hooks/useReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { useTilt } from '@/hooks/useTilt';
import { useLanguage } from '@/contexts/LanguageContext';
import { rich } from '@/i18n/rich';
import {
  SDivImg,
  SInicio,
  STitle1,
  SName,
  STitle3,
  Simg,
  SDivTitle,
  SDivButton,
  SEyebrow,
  SLead,
  SStats,
  SStat,
  SGhostLink,
  SImgBadge,
  SPhotoWrap,
  SPhotoGlow,
  SSeniority,
} from './index.style';

const curriculoPdfUrl = '/curriculos/curriculo.pdf';
const resumePdfUrl = '/curriculos/resume.pdf';

const nameWords = ['Matheus', 'dos', 'Reis'];

// Início na Bugarin: março/2024. Calcula os anos vividos para o número nunca vencer.
const CAREER_START = new Date(2024, 2, 1);
const yearsOfExp = Math.max(
  1,
  Math.floor((Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000))
);

const Inicio: React.FC = () => {
  const { t } = useLanguage();
  const photoRef = useTilt<HTMLDivElement>({ max: 8, scale: 1.03 });

  const stats = useReveal<HTMLDivElement>();
  const projetos = useCountUp(8, { start: stats.inView });
  const setores = useCountUp(3, { start: stats.inView });
  const anos = useCountUp(yearsOfExp, { start: stats.inView, duration: 1200 });

  const handleDownloadCurriculo = (pdfUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <SInicio>
      <SDivTitle>
        <SEyebrow>
          <span className="dot" />
          {t.inicio.badge}
        </SEyebrow>

        <STitle1>{t.inicio.greeting}</STitle1>
        <SName aria-label="Matheus dos Reis">
          {nameWords.map((w, i) => (
            <span className="word" key={w} style={{ animationDelay: `${0.25 + i * 0.12}s` }}>
              {w}
            </span>
          ))}
        </SName>
        <STitle3>{t.inicio.role}</STitle3>

        <SSeniority>
          <BadgeCheck size={16} />
          {t.inicio.seniority}
        </SSeniority>

        <SLead>{rich(t.inicio.lead)}</SLead>

        <SDivButton>
          <SButton onClick={() => handleDownloadCurriculo(curriculoPdfUrl, 'curriculo.pdf')}>
            {t.inicio.btnCvPt}
          </SButton>
          <SButton
            className="ghost"
            onClick={() => handleDownloadCurriculo(resumePdfUrl, 'resume.pdf')}
          >
            {t.inicio.btnCvEn}
          </SButton>
          <SGhostLink to="/projetos">
            {t.inicio.ctaProjects} <ArrowRight size={18} />
          </SGhostLink>
        </SDivButton>

        <SStats ref={stats.ref}>
          <SStat>
            <span className="num">
              {projetos}
              <span className="accent">+</span>
            </span>
            <span className="label">{t.inicio.stat1}</span>
          </SStat>
          <SStat>
            <span className="num">{setores}</span>
            <span className="label">{t.inicio.stat2}</span>
          </SStat>
          <SStat>
            <span className="num">
              {anos}
              <span className="accent">+</span>
            </span>
            <span className="label">{t.inicio.stat3}</span>
          </SStat>
        </SStats>
      </SDivTitle>

      <SPhotoWrap>
        <SPhotoGlow aria-hidden="true" />
        <SDivImg ref={photoRef}>
          <Simg src="/imgs/desenho.png" alt="Matheus dos Reis" />
          <SImgBadge>
            <MapPin size={18} />
            <span>{rich(t.inicio.imgBadge)}</span>
          </SImgBadge>
        </SDivImg>
      </SPhotoWrap>
    </SInicio>
  );
};

export default Inicio;
