import React from 'react';

/**
 * Renderiza texto com marcadores **negrito** como nós React,
 * envolvendo os trechos marcados em <strong>. O estilo do <strong>
 * vem do componente pai (ex.: SLead strong, SBText strong).
 */
export function rich(text: string): React.ReactNode {
  return text.split('**').map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i}>{part}</strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}
