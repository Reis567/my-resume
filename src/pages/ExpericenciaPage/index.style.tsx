import styled from 'styled-components';

export const ExperienceContainerS = styled.section`
  max-width: 900px;
  margin-inline: auto;
  padding: clamp(2.5rem, 6vw, 4.5rem) clamp(1rem, 4vw, 3rem) 4rem;
`;

export const EyebrowS = styled.span`
  display: block;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 0.6rem;
`;

export const TitleS = styled.h2`
  font-size: clamp(2.2rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-strong);
  line-height: 1.05;
  margin-bottom: 2.6rem;
`;

export const TimelineS = styled.div`
  position: relative;
  padding-left: 2.2rem;

  &::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(var(--amber), var(--border));
  }

  @media only screen and (max-width: 480px) {
    padding-left: 1.6rem;
  }
`;

export const ExperienceItemS = styled.article`
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: clamp(1.4rem, 3vw, 2rem);
  box-shadow: 0 22px 50px -38px rgba(0, 0, 0, 0.55);

  &::before {
    content: '';
    position: absolute;
    left: -2.2rem;
    top: 1.9rem;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--amber);
    border: 3px solid var(--bg);
    box-shadow: 0 0 0 3px var(--amber-soft);
  }

  @media only screen and (max-width: 480px) {
    &::before {
      left: -1.6rem;
    }
  }
`;

export const SubTitleS = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  margin-block: 0.3rem 1.2rem;
`;

export const CompanyS = styled.h3`
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 800;
  color: var(--text-strong);
`;

export const PositionS = styled.h4`
  font-weight: 700;
  color: var(--amber);
  font-size: clamp(1rem, 2vw, 1.2rem);
`;

export const DateS = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 600;
  background: var(--surface-2);
  border: 1px solid var(--border);
  padding: 0.35rem 0.8rem;
  border-radius: 99px;
`;

export const ListS = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

export const ParagrafS = styled.li`
  position: relative;
  padding-left: 1.6rem;
  color: var(--text-muted);
  font-size: clamp(0.95rem, 1.4vw, 1.05rem);
  line-height: 1.55;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 8px;
    height: 8px;
    border-radius: 2px;
    background: var(--amber);
    transform: rotate(45deg);
  }

  strong {
    color: var(--text-strong);
    font-weight: 700;
  }
`;

export const DomainsHeadS = styled.p`
  margin-top: 1.8rem;
  margin-bottom: 0.8rem;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
`;

export const DomainsS = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const DomainPillS = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--bg);
  background: var(--text-strong);
  padding: 0.35rem 0.85rem;
  border-radius: 99px;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;
