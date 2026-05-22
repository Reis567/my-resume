import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  flex-shrink: 0;
  margin-top: auto;
  background: linear-gradient(160deg, #2a1707 0%, #3d2410 100%);
  color: var(--cream);
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;
  padding: clamp(2.2rem, 5vw, 3rem) clamp(1.4rem, 5vw, 3.5rem) 1.6rem;
`;

export const FooterTop = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FooterBrand = styled.div`
  max-width: 360px;

  .name {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 1.35rem;
    font-weight: 800;
  }
  .mono {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: var(--amber);
    color: #2a1707;
    font-weight: 800;
  }
  p {
    margin-top: 0.8rem;
    color: rgba(247, 242, 238, 0.7);
    font-size: 0.95rem;
    line-height: 1.55;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  .head {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--amber-soft);
    margin-bottom: 0.3rem;
  }
`;

export const FooterLink = styled(NavLink)`
  color: rgba(247, 242, 238, 0.82);
  font-weight: 500;
  transition: color 0.25s ease, padding-left 0.25s ease;

  &:hover {
    color: #fff;
    padding-left: 4px;
  }
  &.active {
    color: var(--amber-soft);
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  .head {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--amber-soft);
  }
  .row {
    display: flex;
    gap: 0.6rem;
  }
  a {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: rgba(247, 242, 238, 0.08);
    border: 1px solid rgba(247, 242, 238, 0.12);
    color: var(--cream);
    font-size: 20px;
    transition: background 0.3s ease, color 0.3s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.3s ease;
  }
  a svg {
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  a:hover {
    background: var(--amber);
    color: #2a1707;
    transform: translateY(-5px);
    box-shadow: 0 12px 22px -10px var(--amber);
  }
  a:hover svg {
    transform: scale(1.18) rotate(-8deg);
  }
  a:focus-visible {
    outline: 3px solid var(--amber);
    outline-offset: 3px;
  }
`;

export const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 1.8rem auto 0;
  padding-top: 1.4rem;
  border-top: 1px solid rgba(247, 242, 238, 0.12);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: rgba(247, 242, 238, 0.6);
`;
