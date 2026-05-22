import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { dictionaries } from '@/i18n';
import type { Dictionary, Lang } from '@/i18n';

interface LanguageContextValue {
  lang: Lang;
  t: Dictionary;
  setLanguage: (l: Lang) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLang(): Lang {
  try {
    const forced = new URLSearchParams(window.location.search).get('lang');
    if (forced === 'pt' || forced === 'en') return forced;
    const stored = localStorage.getItem('lang');
    if (stored === 'pt' || stored === 'en') return stored;
  } catch {
    /* localStorage indisponível */
  }
  if (typeof navigator !== 'undefined' && navigator.language) {
    return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }
  return 'pt';
}

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const apply = useCallback((next: Lang) => {
    const t = dictionaries[next];
    document.documentElement.lang = next === 'pt' ? 'pt-BR' : 'en';
    document.title = t.meta.title;
    setMeta('description', t.meta.description);
    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogTitle) ogTitle.setAttribute('content', t.meta.title);
    if (ogDesc) ogDesc.setAttribute('content', t.meta.description);
    if (ogLocale) ogLocale.setAttribute('content', next === 'pt' ? 'pt_BR' : 'en_US');
    try {
      localStorage.setItem('lang', next);
    } catch {
      /* ignora */
    }
  }, []);

  const setLanguage = useCallback(
    (next: Lang) => {
      setLangState(next);
      apply(next);
    },
    [apply]
  );

  const toggleLanguage = useCallback(() => {
    setLangState((prev) => {
      const next = prev === 'pt' ? 'en' : 'pt';
      apply(next);
      return next;
    });
  }, [apply]);

  useEffect(() => {
    apply(lang);
  }, [lang, apply]);

  return (
    <LanguageContext.Provider
      value={{ lang, t: dictionaries[lang], setLanguage, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage deve ser usado dentro de <LanguageProvider>');
  return ctx;
}
