import styled from 'styled-components';

export const Segmented = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 3px;
  border-radius: 99px;
  background: rgba(247, 242, 238, 0.12);
  border: 1px solid rgba(247, 242, 238, 0.24);

  button {
    appearance: none;
    border: none;
    cursor: pointer;
    background: transparent;
    color: rgba(247, 242, 238, 0.65);
    font-weight: 700;
    font-size: 0.78rem;
    letter-spacing: 0.03em;
    padding: 0.28rem 0.6rem;
    border-radius: 99px;
    line-height: 1;
    transition: color 0.25s ease, background 0.3s ease, transform 0.2s ease;
  }
  button:hover {
    color: var(--cream);
  }
  button[data-active='true'] {
    background: var(--amber);
    color: #2a1707;
  }
  button:focus-visible {
    outline: 2px solid var(--amber);
    outline-offset: 2px;
  }
  button:active {
    transform: scale(0.94);
  }
`;
