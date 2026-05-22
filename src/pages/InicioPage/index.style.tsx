import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SInicio = styled.section`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding: clamp(2.5rem, 6vw, 5.5rem) clamp(1rem, 4vw, 3rem) 4rem;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: clamp(2rem, 5vw, 4rem);

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
  }
`;

export const SDivTitle = styled.div``;

export const SEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text);
  background: color-mix(in srgb, var(--amber) 16%, transparent);
  border: 1px solid color-mix(in srgb, var(--amber) 38%, transparent);
  padding: 0.45rem 0.95rem;
  border-radius: 99px;
  margin-bottom: 1.4rem;
  opacity: 0;
  animation: fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.05s both;

  .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #2faa5e;
    box-shadow: 0 0 0 0 rgba(47, 170, 94, 0.5);
    animation: pulse-dot 2s infinite;
  }

  @keyframes pulse-dot {
    0% { box-shadow: 0 0 0 0 rgba(47, 170, 94, 0.5); }
    70% { box-shadow: 0 0 0 9px rgba(47, 170, 94, 0); }
    100% { box-shadow: 0 0 0 0 rgba(47, 170, 94, 0); }
  }
`;

export const STitle1 = styled.h2`
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 500;
  color: var(--text-muted);
  opacity: 0;
  animation: fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
`;

export const SName = styled.h1`
  font-size: clamp(2.8rem, 8vw, 5.4rem);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.02em;
  color: var(--text-strong);
  margin-block: 0.2rem 0.5rem;

  .word {
    display: inline-block;
    margin-right: 0.28em;
    opacity: 0;
    transform: translateY(0.5em);
    animation: name-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  @keyframes name-in {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const STitle3 = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.6rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  width: fit-content;
  background: linear-gradient(
    100deg,
    var(--amber) 0%,
    var(--text) 35%,
    var(--amber-soft) 55%,
    var(--text) 75%,
    var(--amber) 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer-text 6s linear infinite, fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.55s both;

  @media only screen and (max-width: 1024px) {
    margin-inline: auto;
  }
`;

export const SSeniority = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.9rem;
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: var(--text-strong);
  background: color-mix(in srgb, var(--amber) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--amber) 36%, transparent);
  padding: 0.4rem 0.85rem;
  border-radius: 99px;
  opacity: 0;
  animation: fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.62s both;

  svg {
    color: var(--amber);
    flex-shrink: 0;
  }
`;

export const SLead = styled.p`
  margin-top: 1.4rem;
  max-width: 540px;
  font-size: clamp(1rem, 1.4vw, 1.18rem);
  line-height: 1.6;
  color: var(--text-muted);
  opacity: 0;
  animation: fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.7s both;

  strong {
    color: var(--text-strong);
    font-weight: 700;
  }

  @media only screen and (max-width: 1024px) {
    margin-inline: auto;
  }
`;

export const SDivButton = styled.div`
  margin-top: 2.2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  opacity: 0;
  animation: fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.85s both;

  @media only screen and (max-width: 1024px) {
    justify-content: center;
  }
  @media only screen and (max-width: 425px) {
    gap: 0.6rem;
  }
`;

export const SGhostLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  height: 2.85rem;
  padding-inline: 1.4rem;
  border-radius: 0.7rem;
  font-weight: 700;
  color: var(--text-strong);
  border: 1.5px solid var(--border);
  background: transparent;
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);

  svg {
    transition: transform 0.25s ease;
  }
  &:hover {
    border-color: var(--amber);
    background: var(--surface-2);
    transform: translateY(-3px);
  }
  &:hover svg {
    transform: translateX(3px);
  }
`;

export const SStats = styled.div`
  margin-top: 2.6rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem 1.8rem;
  padding-top: 1.6rem;
  border-top: 1px solid var(--border);
  opacity: 0;
  animation: fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) 1s both;

  @media only screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

export const SStat = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  .num {
    font-size: 1.7rem;
    font-weight: 800;
    color: var(--text-strong);
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }
  .num .accent {
    color: var(--amber);
  }
  .label {
    margin-top: 0.3rem;
    font-size: 0.85rem;
    color: var(--text-muted);
  }

  @media only screen and (max-width: 1024px) {
    text-align: center;
  }
`;

/* ── Foto: glow + tilt ── */
export const SPhotoWrap = styled.div`
  justify-self: center;
  position: relative;
  width: min(380px, 80vw);
  opacity: 0;
  animation: fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both;
  perspective: 1000px;

  @media only screen and (max-width: 425px) {
    width: 72vw;
  }
`;

export const SPhotoGlow = styled.div`
  position: absolute;
  inset: -14% -14% -10%;
  z-index: 0;
  border-radius: 50%;
  background: radial-gradient(
    closest-side,
    color-mix(in srgb, var(--amber) 55%, transparent),
    transparent 72%
  );
  filter: blur(26px);
  opacity: 0.85;
  animation: glow-pulse 5s ease-in-out infinite;

  @keyframes glow-pulse {
    0%, 100% { transform: scale(0.96); opacity: 0.65; }
    50% { transform: scale(1.06); opacity: 0.95; }
  }
`;

export const SDivImg = styled.div`
  position: relative;
  z-index: 1;
  aspect-ratio: 4 / 5;
  border-radius: 32px;
  overflow: hidden;
  background: linear-gradient(160deg, #3d2410 0%, #1f1206 100%);
  border: 6px solid var(--surface);
  box-shadow: 0 30px 60px -28px rgba(0, 0, 0, 0.6);
  transform: perspective(1000px) rotateX(var(--tilt-rx, 0deg)) rotateY(var(--tilt-ry, 0deg))
    scale(var(--tilt-scale, 1));
  transform-style: preserve-3d;
  transition: transform 0.25s ease, box-shadow 0.4s ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 26px;
    box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--amber) 45%, transparent);
    pointer-events: none;
  }
  /* brilho que segue o mouse */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    background: radial-gradient(
      circle at var(--glow-x, 50%) var(--glow-y, 50%),
      rgba(255, 240, 220, 0.28),
      transparent 45%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:hover::before {
    opacity: 1;
  }
`;

export const Simg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

export const SImgBadge = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 1rem;
  border-radius: 16px;
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  backdrop-filter: blur(8px);
  font-size: 0.85rem;
  color: var(--text-strong);
  box-shadow: 0 10px 24px -14px rgba(0, 0, 0, 0.5);

  svg {
    color: var(--amber);
    flex-shrink: 0;
  }
  strong {
    font-weight: 700;
  }
`;
