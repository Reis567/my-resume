import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header<{ scrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: ${(p) => (p.scrolled ? '60px' : '76px')};
  padding-inline: clamp(1.2rem, 5vw, 3.5rem);
  color: var(--cream);
  background: ${(p) => (p.scrolled ? 'rgba(33, 18, 5, 0.78)' : 'var(--brown)')};
  backdrop-filter: ${(p) => (p.scrolled ? 'blur(14px) saturate(1.2)' : 'none')};
  -webkit-backdrop-filter: ${(p) => (p.scrolled ? 'blur(14px) saturate(1.2)' : 'none')};
  border-bottom-left-radius: ${(p) => (p.scrolled ? '0' : '34px')};
  border-bottom-right-radius: ${(p) => (p.scrolled ? '0' : '34px')};
  box-shadow: ${(p) =>
    p.scrolled ? '0 10px 30px -12px rgba(0, 0, 0, 0.5)' : '0 6px 18px -14px rgba(0,0,0,0.6)'};
  transition: background 0.35s ease, border-radius 0.35s ease, box-shadow 0.35s ease,
    height 0.35s ease;
`;

export const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @media only screen and (max-width: 1024px) {
    position: fixed;
    inset: 0;
    height: 100dvh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 2.2rem;
    background: linear-gradient(160deg, #2a1707 0%, #4a2e15 100%);
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
    transform: translateY(${(p) => (p.isOpen ? '0' : '-105vh')});
  }
`;

export const SLink = styled(NavLink)`
  position: relative;
  margin: 0 0.85rem;
  padding: 0.35rem 0.2rem;
  color: var(--cream);
  font-weight: 600;
  font-size: 1.05rem;
  letter-spacing: 0.01em;
  opacity: 0.82;
  transition: opacity 0.25s ease, color 0.25s ease;

  &::after {
    position: absolute;
    content: '';
    width: 0;
    height: 2px;
    border-radius: 2px;
    background: var(--amber-soft);
    bottom: -6px;
    left: 0;
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    opacity: 1;
  }
  &:hover::after {
    width: 100%;
  }

  &.active {
    opacity: 1;
    color: #fff;
  }
  &.active::after {
    width: 100%;
    background: var(--amber);
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1.8rem;
    margin: 0;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const NavTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    color: var(--cream);
  }

  .mono {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border-radius: 11px;
    background: var(--amber);
    color: #2a1707;
    font-size: 1.1rem;
    font-weight: 800;
    box-shadow: 0 4px 14px -4px rgba(185, 118, 46, 0.7);
  }

  @media only screen and (max-width: 425px) {
    font-size: 1.15rem;
    .mono {
      width: 32px;
      height: 32px;
      font-size: 0.95rem;
    }
  }
`;
