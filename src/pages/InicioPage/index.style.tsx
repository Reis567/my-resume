import styled from 'styled-components'

export const Simg = styled.img`
    max-height:100%;
    max-width: 100%;
`
export const SDivImg = styled.div`
    margin-top:150px;
    max-height:500px;
    height:500px;
    width:380px;
    background:#341d08;
    text-align:center;
    border-radius:90px;
    overflow:hidden;
    border: 10px solid #000000;
    transition:0.3s ease-in-out;
    box-shadow: 1px 1px 10px #000000;
    &:hover{
        border:10px solid #f7f2ee;
    }
`
export const SDivTitle = styled.div`
    margin-top:150px;
`

export const SDivButton = styled.div`
    margin-top:50px;
    Button{
        margin-inline: 20px;
        font-weight:bolder;
    }
`


export const STitle1 = styled.h2`
  font-size : 25px;
  font-weight: bolder;
`

export const STitle2 = styled.h2`
    font-size : 65px;
  font-weight: bolder;
`
export const STitle3 = styled.h2`
      font-size : 25px;
  font-weight: bolder;
`

export const SInicio = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;

`