import styled from "styled-components";
import { FaStar } from 'react-icons/fa';

export const SSobre = styled.div`
    min-height: 100vh;
    text-align: center;
`

export const STitle = styled.h2`
    font-size : 90px;
  font-weight: bolder;
  margin-block: 30px;
`

export const SBody = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const SSkills = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-bottom: 90px;
  h2{
    font-size:60px; 
  }
`
export const SBText = styled.p`
font-size: 30px;
width: 60%;
border-radius: 30px;
border:1px solid;
padding: 15px;
`

export const SSTRONG = styled.strong`
font-weight: bolder;
color: #341d08;
font-weight: bolder;
`
  
export const SList = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const SContainer = styled.div`
display: flex;
gap: 10px;
margin-block: 5px;
align-items: center;
padding:10px;
width: 100%;

`
export const SName = styled.h3`
font-size: 50px;
margin-right: 5px;
`

export const StarIcon = styled(FaStar)`
font-size: 50px;
color: #341d08;
`