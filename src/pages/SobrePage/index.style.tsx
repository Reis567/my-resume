import styled from 'styled-components';

export const SSobre = styled.section`
  max-width: 1100px;
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
  font-size: clamp(2.4rem, 7vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-strong);
  line-height: 1.05;
`;

export const SBody = styled.div`
  margin-top: 1.8rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1.6rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SBText = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: clamp(1.4rem, 3vw, 2rem);
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  line-height: 1.65;
  color: var(--text-muted);
  box-shadow: 0 18px 40px -34px rgba(0, 0, 0, 0.5);

  p + p {
    margin-top: 1rem;
  }
  strong {
    color: var(--text-strong);
    font-weight: 700;
  }
`;

export const STraits = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const STrait = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 0.9rem 1.1rem;
  color: var(--text-strong);
  font-weight: 600;
  box-shadow: 0 14px 30px -30px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateX(4px);
    border-color: var(--amber-soft);
  }

  svg {
    color: var(--amber);
    flex-shrink: 0;
  }
`;

/* ── Skills ── */
export const SSkills = styled.div`
  margin-top: clamp(3rem, 6vw, 4.5rem);
`;

export const SSkillsHead = styled.div`
  margin-bottom: 1.8rem;
`;

export const SCoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem 2.4rem;
  margin-bottom: 2.6rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem 1.4rem;
  margin-bottom: 1.6rem;

  .hint {
    font-size: 0.9rem;
    line-height: 1.4;
    color: var(--text-muted);
    flex: 1 1 240px;
  }
  .keys {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
  }
`;

export const SLegendItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--surface-2);
    border: 1px solid var(--border);
  }
  &[data-tier='0'] .dot {
    background: var(--amber);
    border-color: var(--amber);
  }
  &[data-tier='1'] .dot {
    background: color-mix(in srgb, var(--amber) 45%, transparent);
    border-color: color-mix(in srgb, var(--amber) 60%, transparent);
  }
`;

export const SCoreItem = styled.div`
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 0.5rem;
  }
  .name {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--text-strong);
  }
  .lvl {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    white-space: nowrap;
    padding: 0.2rem 0.6rem;
    border-radius: 99px;
    color: var(--text-muted);
    background: var(--surface-2);
    border: 1px solid var(--border);
  }
  &[data-tier='0'] .lvl {
    color: #2a1707;
    background: var(--amber);
    border-color: var(--amber);
  }
  &[data-tier='1'] .lvl {
    color: var(--amber);
    background: color-mix(in srgb, var(--amber) 14%, transparent);
    border-color: color-mix(in srgb, var(--amber) 40%, transparent);
  }
`;

export const SBar = styled.div`
  height: 9px;
  border-radius: 99px;
  background: var(--surface-2);
  overflow: hidden;

  span {
    display: block;
    height: 100%;
    border-radius: 99px;
    background: linear-gradient(90deg, var(--amber) 0%, var(--brown-soft) 100%);
    width: var(--w, 0%);
    transform-origin: left;
    animation: grow-bar 1s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  @keyframes grow-bar {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }
`;

export const SGroups = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.1rem;
`;

export const SGroup = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.3rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  box-shadow: 0 18px 40px -36px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: translateY(-4px);
    border-color: var(--amber-soft);
    box-shadow: 0 26px 50px -34px rgba(0, 0, 0, 0.45);
  }

  .head {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 1rem;
  }
  .ico {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: color-mix(in srgb, var(--amber) 16%, transparent);
    color: var(--amber);
  }
  .title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-strong);
  }
`;

export const SPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SPill = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text);
  background: var(--surface-2);
  border: 1px solid var(--border);
  padding: 0.32rem 0.7rem;
  border-radius: 99px;
  transition: background 0.25s ease, color 0.25s ease;

  &:hover {
    background: var(--amber);
    color: #2a1707;
    border-color: var(--amber);
  }
`;
