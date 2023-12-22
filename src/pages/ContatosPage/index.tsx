import React from 'react';
import { SContatos, SLinks, STitle,LinkIcon, LinkUrl, LinkDiv } from './index.style';
import { FaGithub, FaCodepen, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contatos: React.FC = () => {
  return (
    <SContatos>
      <STitle>Contatos</STitle>
    <SLinks>
      <LinkDiv>
      
      <LinkIcon>
        <FaLinkedin/>
      </LinkIcon>
          <LinkUrl target='_blank' href="https://www.linkedin.com/in/matheus-dos-reis-08b74b1a4/7">
          linkedin.com/in/matheus-dos-reis-08b74b1a4/
          </LinkUrl>
      </LinkDiv>

      <LinkDiv>
      
      <LinkIcon>
        <FaEnvelope/>
      </LinkIcon>
          <LinkUrl target='_blank'  href="mailto:matheusdosreis9@gmail.com">
          matheusdosreis9@gmail.com
          </LinkUrl>
      </LinkDiv>

      <LinkDiv>
      
      <LinkIcon>
        <FaGithub/>
      </LinkIcon>
          <LinkUrl target='_blank'  href="https://github.com/Reis567">
            github.com/Reis567
          </LinkUrl>
      </LinkDiv>

      <LinkDiv>
      
      <LinkIcon>
        <FaCodepen/>
      </LinkIcon>
          <LinkUrl target='_blank'  href="https://codepen.io/reis567">
          codepen.io/reis567
          </LinkUrl>
      </LinkDiv>

    </SLinks>
    </SContatos>
  );
};

export default Contatos;
