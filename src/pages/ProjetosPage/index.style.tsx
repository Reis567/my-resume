import styled from 'styled-components';
import { Card } from '@/components/ui/card';

export const SProjetos = styled.section`
  max-width: 1200px;
  margin-inline: auto;
  padding: clamp(2.5rem, 6vw, 4.5rem) clamp(1rem, 4vw, 3rem) 4rem;
`;

export const SEyebrow = styled.span`
  display: block;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 0.6rem;
`;

export const STitle = styled.h2`
  font-size: clamp(2.2rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-strong);
  line-height: 1.05;
`;

export const SLead = styled.p`
  margin-top: 1rem;
  max-width: 640px;
  font-size: clamp(1rem, 1.4vw, 1.12rem);
  line-height: 1.6;
  color: var(--text-muted);
`;

/* ── Filtro ── */
export const SFilter = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`;

export const SFilterBtn = styled.button<{ active: boolean }>`
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  padding: 0.45rem 1rem;
  border-radius: 99px;
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 1.5px solid ${(p) => (p.active ? 'var(--amber)' : 'var(--border)')};
  background: ${(p) => (p.active ? 'var(--amber)' : 'transparent')};
  color: ${(p) => (p.active ? '#2a1707' : 'var(--text)')};

  &:hover {
    border-color: var(--amber);
    transform: translateY(-2px);
  }
`;

/* ── Grid profissional ── */
export const SCards = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.4rem;

  @media only screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const SProCard = styled(Card)`
  --accent: var(--amber);
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 22px;
  background: var(--surface);
  padding: 0;
  box-shadow: 0 24px 50px -40px rgba(0, 0, 0, 0.5);
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0 0 auto 0;
    height: 5px;
    background: linear-gradient(90deg, var(--accent), transparent 85%);
  }

  &:hover {
    transform: translateY(-8px);
    border-color: var(--accent);
    box-shadow: 0 38px 64px -38px rgba(0, 0, 0, 0.5);
  }
  &:hover .ico {
    transform: scale(1.08) rotate(-4deg);
  }
`;

export const SProBody = styled.div`
  padding: 1.5rem 1.4rem 1.4rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SProHead = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1.1rem;

  .ico {
    display: grid;
    place-items: center;
    width: 46px;
    height: 46px;
    border-radius: 13px;
    background: color-mix(in srgb, var(--accent) 16%, transparent);
    color: var(--accent);
    flex-shrink: 0;
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .cat {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--accent);
    line-height: 1.2;
  }
`;

export const SPrivateTag = styled.span`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--surface-2);
  border: 1px solid var(--border);
  padding: 0.25rem 0.6rem;
  border-radius: 99px;
  align-self: flex-start;
`;

export const SProName = styled.h3`
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--text-strong);
  letter-spacing: -0.01em;
`;

export const SProClient = styled.p`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.3rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-muted);

  svg {
    flex-shrink: 0;
    color: var(--accent);
  }
`;

export const SProDesc = styled.p`
  margin-top: 0.9rem;
  font-size: 0.96rem;
  line-height: 1.55;
  color: var(--text-muted);
`;

export const SHighlights = styled.ul`
  margin-top: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  list-style: none;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.55rem;
    font-size: 0.9rem;
    color: var(--text);
    font-weight: 500;

    svg {
      margin-top: 1px;
      color: var(--accent);
      flex-shrink: 0;
    }
  }
`;

export const STechRow = styled.div`
  margin-top: 1.3rem;
  padding-top: 1.1rem;
  border-top: 1px dashed var(--border);
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const STechPill = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text);
  background: var(--surface-2);
  border: 1px solid var(--border);
  padding: 0.28rem 0.62rem;
  border-radius: 7px;
`;

/* ── Divisor entre seções ── */
export const SDivider = styled.div`
  margin: clamp(3.5rem, 7vw, 5.5rem) 0 0;
  text-align: left;
`;

/* ── Projetos acadêmicos (compactos, com overlay) ── */
export const SAcademicGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1.2rem;

  @media only screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const SAcaCard = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: var(--surface);
  padding: 0;
  box-shadow: 0 18px 40px -38px rgba(0, 0, 0, 0.5);
  transform: perspective(900px) rotateX(var(--tilt-rx, 0deg)) rotateY(var(--tilt-ry, 0deg))
    scale(var(--tilt-scale, 1));
  transform-style: preserve-3d;
  transition: transform 0.2s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    border-color: var(--amber-soft);
    box-shadow: 0 30px 54px -36px rgba(0, 0, 0, 0.5);
  }
`;

export const SAcaMedia = styled.div`
  position: relative;
  width: 100%;
  height: 188px;
  overflow: hidden;
  background: linear-gradient(135deg, var(--surface-2), var(--border-soft));
`;

export const SAcaPlaceholder = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  gap: 0.4rem;

  i {
    font-size: 62px;
    color: var(--brown-soft);
    opacity: 0.9;
  }
`;

export const SAcaImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  filter: blur(16px);
  transform: scale(1.05);
  transition: opacity 0.6s ease, filter 0.6s ease, transform 0.5s ease;

  &.loaded {
    opacity: 1;
    filter: blur(0);
    transform: scale(1);
  }
  ${SAcaCard}:hover &.loaded {
    transform: scale(1.07);
  }
`;

export const SAcaOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.7rem;
  padding: 1rem;
  background: linear-gradient(to top, rgba(18, 11, 4, 0.9) 0%, rgba(18, 11, 4, 0.35) 55%, transparent 100%);
  opacity: 0;
  transition: opacity 0.35s ease;

  ${SAcaCard}:hover & {
    opacity: 1;
  }
  @media (hover: none) {
    opacity: 1;
  }
`;

export const SAcaChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

export const SAcaChip = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  color: #fff;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.26);
  padding: 0.22rem 0.55rem;
  border-radius: 99px;
  backdrop-filter: blur(4px);
`;

export const SAcaCodeLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  align-self: flex-start;
  font-size: 0.85rem;
  font-weight: 700;
  color: #2a1707;
  background: var(--amber);
  padding: 0.42rem 0.85rem;
  border-radius: 0.6rem;
  transform: translateY(8px);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.25s ease;

  ${SAcaCard}:hover & {
    transform: translateY(0);
  }
  &:hover {
    background: var(--amber-soft);
  }
`;

export const SAcaBody = styled.div`
  padding: 1.1rem 1.2rem 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
`;

export const SAcaTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-strong);
  line-height: 1.25;
`;

export const SAcaDesc = styled.p`
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--text-muted);
`;

export const SVerMaisWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;
