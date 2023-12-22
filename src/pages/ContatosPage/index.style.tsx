import styled from "styled-components";

export const SContatos = styled.div`
    min-height: 100vh;
    text-align:center;
`

export const STitle = styled.h2`
    font-size : 90px;
  font-weight: bolder;
`

export const SLinks = styled.div`
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;

`
export const LinkIcon = styled.div`
padding: 15px;
background-color:#341d08;
border-radius:90px;
color:#f7f2ee;
  svg{
    font-size: 50px;
  }
`
export const LinkUrl = styled.a`
font-size: 30px;
padding: 15px;
background: #341d08;
border-radius:20px;
color:#f7f2ee;
margin-inline: 10px;
`

export const LinkDiv = styled.div`
display: flex;
`