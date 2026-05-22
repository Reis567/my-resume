import styled from 'styled-components';

export const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 100%;
  z-index: 60;
  transform: scaleX(0);
  transform-origin: 0 50%;
  background: linear-gradient(90deg, var(--amber), var(--amber-soft));
  box-shadow: 0 0 10px -1px var(--amber);
  pointer-events: none;
  will-change: transform;
`;
