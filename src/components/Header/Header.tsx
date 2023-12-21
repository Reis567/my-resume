import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import { Container,Nav,NavTitle } from './Header.styles';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavBar = () => {
      setIsNavOpen(!isNavOpen);
    };


  return (
    <Container>

    <NavTitle>
        Matheus dos Reis
    </NavTitle>
    
    <Nav isOpen={isNavOpen} as="div">
        <Link to="/">Inicio</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contatos">Contatos</Link>
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
