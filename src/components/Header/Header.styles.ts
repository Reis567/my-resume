import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  background: #341d08;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 2rem;
  color: #f7f2ee;

  &.responsive_nav {
    transform:none;
  }
`;

export const Nav = styled.nav<{isOpen:boolean}>`


    @media only screen and  (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    background-color: #341d08;
    transition: 1s;
    transform: translateY(${(props) => (props.isOpen ? '0' : '-100vh')});
    }
`


export const NavLink = styled.a`
margin: 0 2rem;
color: #f7f2ee;
`