import styled from 'styled-components';
import { Button } from '@/components/ui/button';

export const SButton = styled(Button)`
  height: 2.85rem;
  padding-inline: 1.5rem;
  border-radius: 0.7rem;
  font-weight: 700;
  font-size: 0.98rem;
  background-color: var(--amber);
  color: #2a1707;
  border: 1.5px solid transparent;
  box-shadow: 0 12px 26px -12px var(--amber);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.25s ease,
    box-shadow 0.25s ease, filter 0.25s ease;

  &:hover {
    background-color: var(--amber-soft);
    transform: translateY(-3px);
    box-shadow: 0 18px 32px -14px var(--amber);
    filter: saturate(1.05);
  }
  &:active {
    transform: translateY(-1px) scale(0.98);
  }
  &:focus-visible {
    outline: 3px solid var(--amber);
    outline-offset: 3px;
  }

  /* variante secundária (contorno) */
  &.ghost {
    background-color: transparent;
    color: var(--text-strong);
    border: 1.5px solid var(--border);
    box-shadow: none;
  }
  &.ghost:hover {
    background-color: var(--surface-2);
    border-color: var(--amber);
    color: var(--text-strong);
    transform: translateY(-3px);
  }
`;
