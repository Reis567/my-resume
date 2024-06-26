import styled from 'styled-components'




export const ExperienceContainerS = styled.div`
  padding: 16px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ExperienceItemS = styled.div`
  margin-bottom: 16px;
  border: 1px solid #000000;
border-radius: 30px;
width: 650px;
padding: 10px;

@media only screen and  (max-width: 425px){
    width: 100%;
    }

    @media only screen and  (min-width: 426px) and (max-width:1024px){
        width: 650px;
    }
`;
export const TitleS = styled.h4`
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
`;
export const SubTitleS = styled.div`
    display:flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center ;
    gap: 10px;
    margin-block: 10px;
    @media only screen and  (max-width: 425px){
        gap: 0px;
        flex-direction: column  ;
        margin-block: 10px;
    }

    @media only screen and  (min-width: 426px) and (max-width:1024px){
        gap: 10px;
    }
`
export const ParagrafS = styled.li`
    padding: 5px;
    list-style-type: disc;
    color: #000000;
    @media only screen and  (max-width: 425px){
        font-size: 13px;
    }


    `

export const CompanyS = styled.p`
  font-size : 50px;
  font-weight: bolder;
  @media only screen and  (max-width: 425px){
        font-size: 25px;
    }

    @media only screen and  (min-width: 426px) and (max-width:1024px){
        font-size: 28px;
    }
`;

export const PositionS = styled.h5`
  font-weight: bold;
  color: #000000;
  font-size: 25px;

  @media only screen and  (max-width: 425px){
        font-size: 16px;
    }

    @media only screen and  (min-width: 426px) and (max-width:1024px){
        font-size: 19px;
    }
`;


export const DateS = styled.p`
  color: #000000;
  font-size: 20px;
  @media only screen and  (max-width: 425px){
        font-size: 14px;
    }

    @media only screen and  (min-width: 426px) and (max-width:1024px){
        font-size: 19px;
    }
`;

