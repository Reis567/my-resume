import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import { Container,Nav,NavTitle,SLink } from './Header.styles';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavBar = () => {
      setIsNavOpen(!isNavOpen);
    };


  return (
    <Container>

    <NavTitle>
      <Link to={"/"}>
        Matheus dos Reis
      </Link>
    </NavTitle>
    
    <Nav isOpen={isNavOpen} as="div">
        <SLink to="/">Inicio</SLink>
        <SLink to="/sobre">Sobre</SLink>
        <SLink to="/projetos">Projetos</SLink>
        <SLink to="/contatos">Contatos</SLink>
        <button className='nav-btn nav-close-btn' onClick={toggleNavBar}>
            <FaTimes/>
        </button>
    </Nav>

    <button className='nav-btn' onClick={toggleNavBar}>
            <FaBars/>
    </button>

    </Container>
  );
};

export default Header;
