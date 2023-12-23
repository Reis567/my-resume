import React from 'react';
import { SCard, SCards, SContent, SDesc, SDivIcons, SFooter, SImg, SProjetos,STitle } from './index.style';
import { SButton } from '@/components/Buttons/SButton';

type TechIcons = Record<string, string>;

const techIcons: TechIcons = {
  Python: 'devicon-python-plain',
  Django: 'devicon-django-plain',
  PostgreSQL: 'devicon-postgresql-plain',
  HTML5: 'devicon-html5-plain',
  CSS3: 'devicon-css3-plain',
  JavaScript: 'devicon-javascript-plain',
  Bootstrap: 'devicon-bootstrap-plain',
  'Tailwind CSS': 'devicon-tailwindcss-plain',
  React: 'devicon-react-plain',
  'Node.js': 'devicon-nodejs-plain',
};

const Projetos: React.FC = () => {

  const projetosData = [
    {
      title: 'Salas de chat de comunicação simultânea',
      description: 'Salas de chat de comunicação simultânea com Django channels e Websocket (Js)',
      technologies: ['Python', 'Django', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript'],
      image: '/projetos/chat.PNG',
      githubLink: 'https://github.com/Reis567/chat3Django',
    },
    {
      title: 'Sistema web de gerenciamento de estoque',
      description: 'Sistema web de gerenciamento de estoque',
      technologies: ['Python', 'Django', 'HTML5', 'CSS3'],
      image: '/projetos/storage.png',
      githubLink: 'https://github.com/Reis567/storage-management',
    },
    {
      title: 'Gerenciamento de contatos',
      description: 'Gerenciamento de contatos, permitindo ao usuário criar, visualizar, atualizar e excluir contatos',
      technologies: ['Python', 'Django', 'HTML5', 'CSS3', 'Bootstrap'],
      image: '/projetos/agenda.PNG',
      githubLink: 'https://github.com/Reis567/agenda-django',
    },
    {
      title: 'Sistema de login e cadastro de usuários',
      description: 'Sistema de login e cadastro de usuários em Django',
      technologies: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript'],
      image: '/projetos/login1.PNG',
      githubLink: 'https://github.com/Reis567/login-django',
    },
    {
      title: 'Chat de comunicação',
      description: 'Chat de comunicação com Django channels e Websocket (Js)',
      technologies: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript'],
      image: '/projetos/chat2.PNG',
      githubLink: 'https://github.com/Reis567/chat-django',
    },
    {
      title: 'Marketplace',
      description: 'Marketplace com login e cadastro de usuários, além de comunicação entre vendedor e comprador',
      technologies: ['Python', 'Django', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
      image: '/projetos/marketplace.PNG',
      githubLink: 'https://github.com/Reis567/marketplace-django',
    },
    {
      title: 'Lista de Tarefas',
      description: 'Lista de Tarefas construída em Django, permite que os usuários criem, atualizem e excluam tarefas',
      technologies: ['Python', 'Django', 'HTML5', 'CSS3'],
      image: '/projetos/to_do_django.PNG',
      githubLink: 'https://github.com/Reis567/django_todo_list',
    },
    {
      title: 'Blog',
      description: 'Blog que permite criar, publicar postagens, gerenciar categorias, tags e exibir páginas com conteúdo personalizado',
      technologies: ['Python', 'Django', 'PostgreSQL', 'HTML5', 'CSS3', 'Docker'],
      image: '/projetos/blog.PNG',
      githubLink: 'https://github.com/Reis567/django-blog',
    },
    {
      title: 'Plataforma E-commerce',
      description: 'Plataforma E-commerce em Django, Docker e PostgreSQL',
      technologies: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'HTML5', 'CSS3', 'Docker'],
      image: '/projetos/home.PNG',
      githubLink: 'https://github.com/Reis567/ecommerce-django',
    },
    {
      title: 'Landing page de Provedor de internet',
      description: 'Landing page de Provedor de internet',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      image: '/projetos/lpprice.PNG',
      githubLink: 'https://codepen.io/reis567/pen/PoXpxed',
    },
    {
      title: 'Sessão de contact us',
      description: 'Sessão de contact us',
      technologies: ['HTML5', 'CSS3'],
      image: '/projetos/contactus.PNG',
      githubLink: 'https://codepen.io/reis567/pen/bGQXezB',
    },
    {
      title: 'Aplicativo web de pesquisa de imagens',
      description: 'Aplicativo web de pesquisa de imagens',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      image: '/projetos/pesquisaimg.PNG',
      githubLink: 'https://codepen.io/reis567/pen/yLGywjB',
    },
    {
      title: 'CRUD de contatos em React',
      description: 'CRUD de contatos em React, com opção de diversos filtros e estatísticas',
      technologies: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
      image: '/projetos/leste.JPG',
      githubLink: 'https://github.com/Reis567/lestereact2',
    },
    {
      title: 'Pagina de Login e Registro',
      description: 'Pagina de Login e Registro',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      image: '/projetos/logreg.PNG',
      githubLink: 'https://codepen.io/reis567/pen/zYMBdWa',
    },
    {
      title: 'Gerador de senha forte',
      description: 'Gerador de senha forte',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      image: '/projetos/passgen.PNG',
      githubLink: 'https://codepen.io/reis567/pen/OJrBJOp',
    },
  ];

  const mapTechToIcon = (technologies: string[]) => {
    return technologies.map((tech, index) => (
      <i key={index} className={techIcons[tech]}></i>
    ));
  };

  const redirectToGitHub = (githubLink: string) => {
    window.location.href = githubLink;
  };

  

  return (
    <SProjetos>
      <STitle>Projetos</STitle>
      <SCards>
        {projetosData.map((projeto, index) => (
          <SCard key={index}>
            <SContent>
              <SImg src={projeto.image} alt={projeto.title} />
            </SContent>
            <SFooter>
              <SDesc>{projeto.description}</SDesc>
              <SDivIcons>{mapTechToIcon(projeto.technologies)}</SDivIcons>
              <SButton onClick={() => redirectToGitHub(projeto.githubLink)}>
                Ver código
              </SButton>
            </SFooter>
          </SCard>
        ))}
      </SCards>
    </SProjetos>
  );
};

export default Projetos;