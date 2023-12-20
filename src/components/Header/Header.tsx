import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import { Container,Nav,NavLink } from './Header.styles';

const Header: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavBar = () => {
      setIsNavOpen(!isNavOpen);
    };


  return (
    <Container>
    <h3>
        Matheus dos Reis
    </h3>
    <Nav isOpen={isNavOpen} as="div">
        <NavLink href="#">Inicio</NavLink>
        <NavLink href="#">Sobre</NavLink>
        <NavLink href="#">Projetos</NavLink>
        <NavLink href="#">Contatos</NavLink>
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
