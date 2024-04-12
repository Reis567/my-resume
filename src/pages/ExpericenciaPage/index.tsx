import React from 'react';
import {ExperienceContainerS,ExperienceItemS,TitleS,PositionS,CompanyS,DateS,SubTitleS,ParagrafS} from './index.style'


const Experiencia: React.FC = () => {
  return (
    <ExperienceContainerS>
      <TitleS>Experiência Profissional</TitleS>
      <ExperienceItemS>
        <CompanyS>Bugarin Tecnologia</CompanyS>
        <SubTitleS>

        <PositionS>Desenvolvedor Backend</PositionS>
        <DateS>Março/2024 - até o momento</DateS>
        </SubTitleS>
            <ParagrafS>
            
            Responsável pela criação e manutenção de sistemas usando o framework Django. Isso incluiu a concepção, desenvolvimento e implementação de aplicativos web robustos e escaláveis
            </ParagrafS>
            
            <ParagrafS>
            Utilização o Python para realizar webscraping, coletando dados de várias fontes da web. Envolve a escrita de scripts personalizados para extrair informações relevantes de diferentes sites de forma automatizada.
            </ParagrafS>

            <ParagrafS>
            Encarregado do desenvolvimento e manutenção de scripts em Python para automatizar e melhorar a eficiência operacional.
            </ParagrafS>
            <ParagrafS>
            Manutenção e administração de servidores Linux, garantindo sua estabilidade e segurança. Envolvendo configuração, monitoramento e resolução de problemas para garantir a operação contínua dos , incluindo a implementação de certificados HTTPS para garantir a segurança das comunicações.
            </ParagrafS>



      </ExperienceItemS>
    </ExperienceContainerS>
  );
};

export default Experiencia;
