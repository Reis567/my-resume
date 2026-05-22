import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface TiltOptions {
  /** Inclinação máxima em graus. */
  max?: number;
  /** Escala ao passar o mouse. */
  scale?: number;
}

/**
 * Tilt/parallax suave seguindo o mouse. Define as CSS custom properties
 * --tilt-rx, --tilt-ry (graus) e --glow-x/--glow-y (% para o brilho) no elemento.
 * Ignorado em ponteiros grosseiros (toque) e com prefers-reduced-motion.
 */
export function useTilt<T extends HTMLElement = HTMLElement>({ max = 9, scale = 1.02 }: TiltOptions = {}) {
  const ref = useRef<T | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reduced) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let frame = 0;

    const set = (rx: number, ry: number, gx: number, gy: number, s: number) => {
      node.style.setProperty('--tilt-rx', `${rx.toFixed(2)}deg`);
      node.style.setProperty('--tilt-ry', `${ry.toFixed(2)}deg`);
      node.style.setProperty('--tilt-scale', `${s}`);
      node.style.setProperty('--glow-x', `${gx.toFixed(1)}%`);
      node.style.setProperty('--glow-y', `${gy.toFixed(1)}%`);
    };

    const onMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        set((0.5 - py) * max * 2, (px - 0.5) * max * 2, px * 100, py * 100, scale)
      );
    };

    const onLeave = () => {
      cancelAnimationFrame(frame);
      set(0, 0, 50, 50, 1);
    };

    node.addEventListener('mousemove', onMove);
    node.addEventListener('mouseleave', onLeave);
    onLeave();

    return () => {
      cancelAnimationFrame(frame);
      node.removeEventListener('mousemove', onMove);
      node.removeEventListener('mouseleave', onLeave);
    };
  }, [max, scale, reduced]);

  return ref;
}
