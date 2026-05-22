import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface CountUpOptions {
  from?: number;
  duration?: number;
  /** Só inicia a contagem quando true (ex.: ao entrar na viewport). */
  start?: boolean;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/** Conta de `from` até `to` com easing quando `start` fica true. */
export function useCountUp(to: number, { from = 0, duration = 1500, start = true }: CountUpOptions = {}) {
  const [value, setValue] = useState(from);
  const rafRef = useRef<number | null>(null);
  const doneRef = useRef(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!start || doneRef.current) return;

    if (reduced) {
      setValue(to);
      doneRef.current = true;
      return;
    }

    const t0 = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      setValue(Math.round(from + (to - from) * easeOutCubic(progress)));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        doneRef.current = true;
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, to, from, duration, reduced]);

  return value;
}
