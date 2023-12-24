import {  StarIcon ,SBText, SBody, SContainer, SList, SName, SSTRONG, SSkills, SSobre, STitle, EmpStar, Stars } from './index.style';
import React, { useState } from 'react';




const Sobre: React.FC = () => {
  // Estado para armazenar as pontuações de cada tecnologia
  const [skills, setSkills] = useState({
    Django: 4,
    'Django Rest Framework': 3,
    Node: 3,
    React: 2,
    Next: 1,
    TypeScript: 3,
    PostgreSQL: 2,
    MySQL: 2,
    MongoDB: 2,
    Docker: 1,
  });


  const sortedSkills = Object.entries(skills).sort((a, b) => b[1] - a[1]);

  return (
    <SSobre>
      <STitle>Sobre</STitle>

      <SBody>
        <SBText>
          Sou um programador com habilidades de <SSTRONG>trabalho em equipe</SSTRONG>, amor por <SSTRONG>aprendizado</SSTRONG>, facilidade de <SSTRONG>adaptação</SSTRONG> e <SSTRONG>ambicioso.</SSTRONG>
          <br />
          Desenvolvo sistemas <SSTRONG>Full stack</SSTRONG> e tenho noções de criação de ambientes de desenvolvimento com <SSTRONG>Docker</SSTRONG>
        </SBText>
      </SBody>

      <SSkills>
        <STitle>Skills</STitle>
        <SList>
          {/* Mapeie as habilidades ordenadas e renderize as estrelas */}
          {sortedSkills.map(([tech, score]) => (
            <SContainer key={tech}>
              <SName>{tech}</SName>
              <Stars>


              {/* Renderiza o número de estrelas preenchidas */}
              {Array.from({ length: 5 }, (_, index) => (
                <React.Fragment key={index}>
                  {index < score ? <StarIcon key={index} /> : <EmpStar key={index} />}
                </React.Fragment>
              ))}
              </Stars>
            </SContainer>
          ))}
        </SList>
      </SSkills>
    </SSobre>
  );
};

export default Sobre;