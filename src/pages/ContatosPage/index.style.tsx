import styled from "styled-components";

export const SContatos = styled.div`
    min-height: 100vh;
    text-align:center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media only screen and  (max-width: 425px){
        justify-content: space-evenly;
    }

    @media only screen and  (min-width: 426px) and (max-width:1024px){
        justify-content: space-evenly;
    }
`

export const STitle = styled.h2`
    font-size : 90px;
  font-weight: bolder;
  @media only screen and  (max-width: 425px){
        font-size: 55px;
    }

    @media only screen and  (min-width: 426px) and (max-width:1024px){
        font-size: 70px;
    }
`

export const SLinks = styled.div`
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
margin-bottom:50px;
@media only screen and  (max-width: 425px){
  gap: 10px;
  margin-bottom: 5px;
    }

    @media only screen and  (min-width: 426px) and (max-width:1024px){
      gap: 15px;
      margin-bottom: 5px;
    }
`
export const LinkIcon = styled.div`
padding: 15px;
background-color:#341d08;
border-radius:90px;
color:#f7f2ee;
    svg{
      font-size: 50px;
    }

  @media only screen and  (max-width: 425px){
  padding: 10px;
  display: flex;
  align-items: center;

    svg{
      font-size: 30px;
    }
    }

    @media only screen and  (min-width: 426px) and (max-width:1024px){
      padding: 13px;
    display: flex;
    align-items: center;

    svg{
      font-size: 50px;
    }
    }
  
`
export const LinkUrl = styled.a`
font-size: 30px;
padding: 15px;
background: #341d08;
border-radius:20px;
color:#f7f2ee;
margin-inline: 10px;

@media only screen and  (max-width: 425px){
  font-size:15px;
  padding: 6px;
  display: flex;
  align-items: center;
    }

    @media only screen and  (min-width: 426px) and (max-width:1024px){
      font-size:29px;
  padding: 12px;
  display: flex;
  align-items: center;
    }
`

export const LinkDiv = styled.div`
display: flex;

@media only screen and  (max-width: 425px){
    width: 100%;
    padding: 5px;
    }

    @media only screen and  (min-width: 426px) and (max-width:1024px){
      width: 100%;
      justify-content: center;
    align-items: center;
    padding: 5px;
    }
`