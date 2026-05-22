import { useEffect, useRef, useState } from 'react';

interface RevealOptions {
  /** Fração visível para disparar (0–1). */
  threshold?: number;
  /** Margem do root (ex.: '0px 0px -10% 0px' antecipa o disparo). */
  rootMargin?: string;
  /** Revela apenas uma vez (padrão) ou re-anima ao sair/entrar. */
  once?: boolean;
}

/**
 * Observa um elemento e indica quando ele entra na viewport.
 * Use o `ref` no elemento e aplique a classe `is-visible` quando `inView`.
 *
 *   const { ref, inView } = useReveal();
 *   <Section ref={ref} className={`reveal ${inView ? 'is-visible' : ''}`} />
 */
export function useReveal<T extends HTMLElement = HTMLElement>(options: RevealOptions = {}) {
  const { threshold = 0.18, rootMargin = '0px 0px -8% 0px', once = true } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
