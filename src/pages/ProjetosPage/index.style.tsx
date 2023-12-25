import styled from "styled-components";
import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"

  export const STitle = styled.h2`
  font-size : 90px;
  font-weight: bolder;
  margin-block: 30px;
  @media only screen and  (max-width: 425px){
        font-size: 35px;
        margin-block: 10px;
    }

    @media only screen and  (min-width: 426px) and (max-width:1024px){
        font-size: 40px;
    }
`

export const SProjetos = styled.div`
    min-height: 100vh;
    text-align: center;
    margin-bottom:60px;
        .Btn-vermais{
            margin-top:50px;
    }
`
export const SCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-left:40px;
    @media only screen and  (max-width: 425px){
        margin-left:0;
    }
    @media only screen and  (max-width: 425px){
        margin-left:0;
    }

`


export const SCard = styled(Card)`
    max-width:380px;
    border:3px solid #341d08;
    padding: 15px;
    @media only screen and  (max-width: 425px){
        max-width:100%;
        margin-inline: 5px;
    }

    @media only screen and  (min-width: 426px) and (max-width:1024px){
        max-width: 45%;
    }
    `
export const SContent = styled(CardContent)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    `
export const SImg = styled.img`
    border-radius: 10px;
    border: 2px solid #341d08;
    max-width:60%;
    max-height:30%;
    `

export const SFooter = styled(CardFooter)`
display: flex;
text-align: center;
flex-direction: column;
gap: 10px;
width: 100%;
padding:0;
    Button{
        margin-top:15px;
    }
`
export const SDesc = styled.h3`
width: 100%;
`
export const SDivIcons = styled.div`
display: flex;
gap: 5px;
    i{
        padding:3px;
        color: #f7f2ee;
        background-color: #341d08;
        font-size: 20px;
        border-radius:5px;     
    }
`
