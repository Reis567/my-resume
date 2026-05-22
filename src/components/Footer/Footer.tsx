import React from 'react';
import { FaGithub, FaCodepen, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useReveal } from '@/hooks/useReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  FooterContainer,
  FooterTop,
  FooterBrand,
  FooterNav,
  FooterLink,
  FooterSocials,
  FooterBottom,
} from './Footer.styles';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const top = useReveal<HTMLDivElement>();

  return (
    <FooterContainer>
      <FooterTop ref={top.ref} className={`stagger ${top.inView ? 'is-visible' : ''}`}>
        <FooterBrand>
          <span className="name">
            <span className="mono">M</span>
            Matheus dos Reis
          </span>
          <p>{t.footer.tagline}</p>
        </FooterBrand>

        <FooterNav>
          <span className="head">{t.footer.navHead}</span>
          <FooterLink to="/" end>
            {t.nav.inicio}
          </FooterLink>
          <FooterLink to="/sobre">{t.nav.sobre}</FooterLink>
          <FooterLink to="/experiencia">{t.nav.experiencia}</FooterLink>
          <FooterLink to="/projetos">{t.nav.projetos}</FooterLink>
          <FooterLink to="/contatos">{t.nav.contatos}</FooterLink>
        </FooterNav>

        <FooterSocials>
          <span className="head">{t.footer.socialsHead}</span>
          <div className="row">
            <a
              href="https://www.linkedin.com/in/matheus-dos-reis-08b74b1a4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Reis567"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://codepen.io/reis567"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodePen"
            >
              <FaCodepen />
            </a>
            <a href="mailto:matheusdosreis9@gmail.com" aria-label="E-mail">
              <FaEnvelope />
            </a>
          </div>
        </FooterSocials>
      </FooterTop>

      <FooterBottom>
        <span>© {year} Matheus dos Reis. {t.footer.rights}</span>
        <span>{t.footer.madeWith}</span>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
