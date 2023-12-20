import React from 'react';
import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import { Container } from './Header.styles';

const Header: React.FC = () => {
    const navRef = useRef<HTMLDivElement | null>(null);
    
    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive_nav")
    }


  return (
    <Container>
    <h3>
        Matheus dos Reis
    </h3>
    <nav ref={navRef}>
        <a href="#">Inicio</a>
        <a href="#">Sobre</a>
        <a href="#">Projetos</a>
        <a href="#">Contatos</a>
        <button className='nav-btn nav-close-btn' onClick={showNavBar}>
            <FaTimes/>
        </button>
    </nav>

    <button className='nav-btn' onClick={showNavBar}>
            <FaBars/>
    </button>

    </Container>
  );
};

export default Header;
