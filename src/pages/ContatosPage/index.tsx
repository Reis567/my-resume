import React, { useState } from 'react';
import { FaGithub, FaCodepen, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  SContatos,
  SEyebrow,
  STitle,
  SLead,
  SLinks,
  SContactCard,
  LinkIcon,
  LinkInfo,
  SActions,
  SActionLink,
  SActionBtn,
} from './index.style';

interface Contact {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  /** Texto colocado na área de transferência (URL completa, ou o e-mail puro). */
  copy: string;
}

const contacts: Contact[] = [
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'matheus-dos-reis',
    href: 'https://www.linkedin.com/in/matheus-dos-reis-08b74b1a4/',
    copy: 'https://www.linkedin.com/in/matheus-dos-reis-08b74b1a4/',
  },
  {
    icon: <FaEnvelope />,
    label: 'E-mail',
    value: 'matheusdosreis9@gmail.com',
    href: 'mailto:matheusdosreis9@gmail.com',
    copy: 'matheusdosreis9@gmail.com',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/Reis567',
    href: 'https://github.com/Reis567',
    copy: 'https://github.com/Reis567',
  },
  {
    icon: <FaCodepen />,
    label: 'CodePen',
    value: 'codepen.io/reis567',
    href: 'https://codepen.io/reis567',
    copy: 'https://codepen.io/reis567',
  },
];

const ContactCard: React.FC<{ contact: Contact }> = ({ contact }) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contact.copy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard indisponível (contexto não seguro) — silencioso */
    }
  };

  return (
    <SContactCard>
      <div className="head">
        <LinkIcon className="icon">{contact.icon}</LinkIcon>
        <LinkInfo>
          <span className="label">{contact.label}</span>
          <span className="value">{contact.value}</span>
        </LinkInfo>
      </div>
      <SActions>
        <SActionBtn
          type="button"
          onClick={handleCopy}
          className={copied ? 'copied' : ''}
          aria-label={copied ? t.contatos.copied : `${t.contatos.copy} ${contact.label}`}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? t.contatos.copied : t.contatos.copy}
        </SActionBtn>
        <SActionLink
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.contatos.open} ${contact.label}`}
        >
          {t.contatos.open}
          <ArrowUpRight size={16} />
        </SActionLink>
      </SActions>
    </SContactCard>
  );
};

const Contatos: React.FC = () => {
  const { t } = useLanguage();
  const links = useReveal<HTMLDivElement>();

  return (
    <SContatos>
      <SEyebrow>{t.contatos.eyebrow}</SEyebrow>
      <STitle>{t.contatos.title}</STitle>
      <SLead>{t.contatos.lead}</SLead>

      <SLinks ref={links.ref} className={`stagger ${links.inView ? 'is-visible' : ''}`}>
        {contacts.map((c) => (
          <ContactCard key={c.label} contact={c} />
        ))}
      </SLinks>
    </SContatos>
  );
};

export default Contatos;
