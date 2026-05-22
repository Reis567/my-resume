import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Container, Nav, NavTitle, SLink, Actions } from './Header.styles.tsx';
import { Link } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeNav = () => setIsNavOpen(false);
  const toggleNavBar = () => setIsNavOpen((v) => !v);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // bloqueia o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isNavOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  return (
    <Container scrolled={scrolled}>
      <NavTitle>
        <Link to="/" onClick={closeNav}>
          <span className="mono">M</span>
          Matheus dos Reis
        </Link>
      </NavTitle>

      <Nav isOpen={isNavOpen}>
        <SLink to="/" end onClick={closeNav}>
          {t.nav.inicio}
        </SLink>
        <SLink to="/sobre" onClick={closeNav}>
          {t.nav.sobre}
        </SLink>
        <SLink to="/experiencia" onClick={closeNav}>
          {t.nav.experiencia}
        </SLink>
        <SLink to="/projetos" onClick={closeNav}>
          {t.nav.projetos}
        </SLink>
        <SLink to="/contatos" onClick={closeNav}>
          {t.nav.contatos}
        </SLink>
        <button className="nav-btn nav-close-btn" onClick={toggleNavBar} aria-label={t.aria.menuClose}>
          <FaTimes />
        </button>
      </Nav>

      <Actions>
        <LanguageToggle />
        <ThemeToggle />
        <button className="nav-btn" onClick={toggleNavBar} aria-label={t.aria.menuOpen}>
          <FaBars />
        </button>
      </Actions>
    </Container>
  );
};

export default Header;
