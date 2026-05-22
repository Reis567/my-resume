import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { ToggleButton } from './ThemeToggle.styles';

const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === 'dark';

  return (
    <ToggleButton
      type="button"
      onClick={toggleTheme}
      className={className}
      aria-label={isDark ? t.aria.themeLight : t.aria.themeDark}
      title={isDark ? t.aria.themeLight : t.aria.themeDark}
    >
      <span className="track">
        <span className="thumb" data-dark={isDark}>
          {isDark ? <Moon size={14} /> : <Sun size={14} />}
        </span>
      </span>
    </ToggleButton>
  );
};

export default ThemeToggle;
