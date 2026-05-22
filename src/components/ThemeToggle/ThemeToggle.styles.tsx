import styled from 'styled-components';

export const ToggleButton = styled.button`
  display: inline-grid;
  place-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 99px;

  .track {
    position: relative;
    width: 52px;
    height: 28px;
    border-radius: 99px;
    background: rgba(247, 242, 238, 0.16);
    border: 1px solid rgba(247, 242, 238, 0.28);
    transition: background 0.3s ease;
  }

  .thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 22px;
    height: 22px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--amber);
    color: #2a1707;
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease;
  }
  .thumb[data-dark='true'] {
    transform: translateX(24px);
    background: var(--cream);
  }

  &:hover .track {
    background: rgba(247, 242, 238, 0.24);
  }
  &:active .thumb {
    transform: scale(0.92);
  }
  &:active .thumb[data-dark='true'] {
    transform: translateX(24px) scale(0.92);
  }
`;
