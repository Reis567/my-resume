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
  'Tailwind': 'devicon-tailwindcss-plain',
  React: 'devicon-react-plain',
  'Node': 'devicon-nodejs-plain',
  Docker:'devicon-docker-plain',
  Typescript:'devicon-typescript-plain',
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
      title: 'Portifolio em React',
      description: 'Este meu portifólio é inteiramente feito em React !',
      technologies: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind'],
      image: '/projetos/portifolio.JPG',
      githubLink: 'https://github.com/Reis567/resume-react',
    },
    {
      title: 'Urban pulse API',
      description: 'Api Node.js para gerênciamento de um banco de dados contendo cidades e moradores , com autenticação de usuários',
      technologies: ['Node','Typescript','PostgreSQL'],
      image: '/projetos/apiNode.png',
      githubLink: 'https://github.com/Reis567/node-people-register',
    },
    {
      title: 'Marketplace',
      description: 'Marketplace com login e cadastro de usuários, além de comunicação entre vendedor e comprador',
      technologies: ['Python', 'Django', 'Tailwind', 'HTML5', 'CSS3', 'JavaScript'],
      image: '/projetos/marketplace.PNG',
      githubLink: 'https://github.com/Reis567/marketplace-django',
    },
    

    {
      title: 'Class Vision API',
      description: 'Api em Node.js e Typescript com autenticação de usuários , CRUD Completo de salas de aula e Disciplinas ',
      technologies: ['Node','Typescript','PostgreSQL'],
      image: '/projetos/classvision.PNG',
      githubLink: 'https://github.com/Reis567/class_vision',
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
      title: 'CRUD de contatos em React',
      description: 'CRUD de contatos em React, com opção de diversos filtros e estatísticas',
      technologies: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind'],
      image: '/projetos/leste.JPG',
      githubLink: 'https://github.com/Reis567/lestereact2',
    },
    {
      title: 'Landing page de Provedor de internet',
      description: 'Landing page de Provedor de internet',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      image: '/projetos/lpprice.PNG',
      githubLink: 'https://codepen.io/reis567/pen/PoXpxed',
    },


    {
      title: 'Gerador de senha forte',
      description: 'Gerador de senha forte',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      image: '/projetos/passgen.PNG',
      githubLink: 'https://codepen.io/reis567/pen/OJrBJOp',
    },
    
    {
      title: 'Gerador QR code',
      description: 'Gerador QR code',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      image: '/projetos/pixel.png',
      githubLink: 'https://github.com/Reis567/qr-gen',
    },
  ];

  const mapTechToIcon = (technologies: string[]) => {
    return technologies.map((tech, index) => (
      <i key={index} className={techIcons[tech]}></i>
    ));
  };

  const redirectToGitHub = (githubLink: string) => {
    window.open(githubLink, '_blank');
  };
  const redirectToGitHubProfile = () => {
    window.open('https://github.com/Reis567', '_blank');
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
      <SButton className='Btn-vermais' onClick={redirectToGitHubProfile}>
      Ver mais
    </SButton>
    </SProjetos>
  );
};

export default Projetos;