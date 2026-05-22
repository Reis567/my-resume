import styled, { css } from 'styled-components';

export const SContatos = styled.section`
  max-width: 980px;
  margin-inline: auto;
  padding: clamp(2.5rem, 6vw, 4.5rem) clamp(1rem, 4vw, 3rem) 4rem;
  text-align: center;
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

export const SLead = styled.p`
  margin: 1rem auto 0;
  max-width: 560px;
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  line-height: 1.6;
  color: var(--text-muted);
`;

export const SLinks = styled.div`
  margin-top: 2.6rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.1rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SContactCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  text-align: left;
  padding: 1.4rem;
  border-radius: 20px;
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text-strong);
  box-shadow: 0 18px 40px -38px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  /* faixa de destaque no topo, revelada no hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0 0 auto 0;
    height: 3px;
    background: linear-gradient(90deg, var(--amber), transparent 80%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: var(--amber-soft);
    box-shadow: 0 26px 50px -36px rgba(0, 0, 0, 0.45);
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover .icon {
    transform: rotate(-6deg) scale(1.06);
    background: var(--amber);
    color: #2a1707;
  }

  .head {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const LinkIcon = styled.div`
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 14px;
  background: var(--brown);
  color: var(--cream);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease, color 0.3s ease;

  svg {
    font-size: 26px;
  }
`;

export const LinkInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;

  .label {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--amber);
  }
  .value {
    font-size: 1.02rem;
    font-weight: 600;
    line-height: 1.3;
    color: var(--text-strong);
    overflow-wrap: anywhere;
  }
`;

export const SActions = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: auto;
`;

const actionStyles = css`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  height: 42px;
  padding-inline: 0.9rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface-2);
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.25s ease, color 0.25s ease,
    border-color 0.25s ease;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    background: var(--amber);
    color: #2a1707;
    border-color: var(--amber);
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const SActionLink = styled.a`
  ${actionStyles}

  svg {
    transition: transform 0.2s ease;
  }
  &:hover svg {
    transform: translate(2px, -2px);
  }
`;

export const SActionBtn = styled.button`
  ${actionStyles}

  &.copied,
  &.copied:hover {
    background: #2faa5e;
    color: #07210f;
    border-color: #2faa5e;
    transform: none;
  }
`;
