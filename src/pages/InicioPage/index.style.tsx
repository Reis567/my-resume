import styled from 'styled-components'

export const Simg = styled.img`
    max-height:100%;
    max-width: 100%;
    @media only screen and  (max-width: 425px){
        display: none;
    }
`
export const SDivImg = styled.div`
    margin-top:150px;
    max-height:500px;
    height:500px;
    width:380px;
    max-width:380px;
    background:#341d08;
    text-align:center;
    border-radius:430px;
    overflow:hidden;
    border: 10px solid #000000;
    transition:0.3s ease-in-out;
    box-shadow: 1px 1px 10px #000000;
    &:hover{
        border:10px solid #f7f2ee;
    }
    @media only screen and  (max-width: 425px){
        display: none;
    }    
    @media only screen and  (min-width: 426px) and (max-width:1024px){
        margin-top: 50px;
        max-height: 400px;
        display: flex;
        justify-content:center;

    }


`
export const SDivTitle = styled.div`
    margin-top:150px;
    @media only screen and  (max-width: 425px){
        margin-top: 30px;
        padding: 10px;
    }
    @media only screen and  (min-width: 426px) and (max-width:1024px){
        margin-top: 30px;
        padding: 10px;

    }
`

export const SDivButton = styled.div`
    margin-top:50px;
    Button{
        margin-inline: 20px;
        font-weight:bolder;
    }
    @media only screen and  (max-width: 425px){
        margin-top: 20px;
        display: flex;
        Button{
            margin-inline: 1px;
            
        }
    }

`


export const STitle1 = styled.h2`
  font-size : 35px;
  font-weight: bolder;
  @media only screen and  (max-width: 425px){
        font-size: 25px;
    }
`

export const STitle2 = styled.h2`
    font-size : 90px;
  font-weight: bolder;
  @media only screen and  (max-width: 425px){
        font-size: 40px;
    }
`
export const STitle3 = styled.h2`
      font-size : 40px;
  font-weight: bolder;
  @media only screen and  (max-width: 425px){
        font-size: 27px;
    }
`

export const SInicio = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;

`