import React from 'react';
import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'

const Header: React.FC = () => {
    const navRef = useRef<HTMLDivElement | null>(null);
    
    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive_nav")
    }


  return (
    <>
    <h3>
        Matheus dos Reis
    </h3>
    <nav ref={navRef}>
        <a href="#">Inicio</a>
        <a href="#">Sobre</a>
        <a href="#">Projetos</a>
        <a href="#">Contatos</a>
        <button>
            <FaTimes/>
        </button>
    </nav>

    <button>
            <FaBars/>
    </button>
    </>
  );
};

export default Header;
