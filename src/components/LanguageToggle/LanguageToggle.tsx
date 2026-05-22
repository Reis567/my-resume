import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Segmented } from './LanguageToggle.styles';

const LanguageToggle: React.FC = () => {
  const { lang, setLanguage, t } = useLanguage();

  return (
    <Segmented role="group" aria-label={t.aria.langToggle}>
      <button
        type="button"
        data-active={lang === 'pt'}
        aria-pressed={lang === 'pt'}
        aria-label={t.aria.langPt}
        onClick={() => setLanguage('pt')}
      >
        PT
      </button>
      <button
        type="button"
        data-active={lang === 'en'}
        aria-pressed={lang === 'en'}
        aria-label={t.aria.langEn}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </Segmented>
  );
};

export default LanguageToggle;
