import styled from 'styled-components';



export const InfoContainer = styled.div`
    
    
    margin20px;
    
    background:#fff;
    align-items:left;
    text-align:left;
    
    
    `;

    export const InfoRow1 = styled.div`
    background:${({ primary }) => (primary ? '#F9FAFB' : '#fff')};
    margin:4%;
    align-items:left;
    text-align: left;
    
    display: grid;

    }
`;


    export const InfoRow = styled.div`
    @media only screen (min-width = 530px) { 
    display: flex;
    flex-direction:column;
    }
    //  @media screen (max-width = 530px) { 
                display:flex;
    //         flex-direction:column;
    //         align-content:center;
    //      }
    
    
`;

export const InfoColumn1 = styled.div`
    display:flex;
    flex-direction:column;
    
    flex:;
    
`;
export const Row1 = styled.div`
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  gap:15px;
  


`;

export const Column1 = styled.div`
    text-align: center;
    display: flex;
    flex-direction:column;
    align-items:center;
    
    
    
    
`;



export const InfoColumn2 = styled.div`
    
    display:flex;
    
    
    align-self:stretch
    justify-content:center;
    flex:;
    


    
`;

export const TopHeader = styled.h3`
    
    font-size: 16px;
    font-family: 'Inter';
    line-height: 24px;
    color: #0082FF;
    align-self: stretch;
`

export const Heading = styled.h1`
    margin-bottom: 16px;
    font-family:Inter;
    text-align:left;
    align-items:center;
    font-family: 'Inter';
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color:010606;

`;

export const Description = styled.p`
    align-items:left;
    text-align:left;
    font-family: 'Inter';
    max-width:570px;
    font-size: 20px;
    line-height:24px;
    color:#667085;
`;

export const ColHeader = styled.h4`
    font-weight: 600;
    font-size: 60px;
    font-family: 'Inter';
    
    text-align:center;
    letter-spacing: -0.0.em;
    color: #0082FF;
    max-width:264px
`

export const SubHeading = styled.h2`
    align-items: center;
    font-size: 20px;
    
    font-weight: 500;
    font-family: 'Inter';
    font-style: normal;
    color:#010606;
    max-width:264px;
`;

export const SubDescription = styled.p`
    align-items:center;
    max-width:264px;
    font-family: 'Inter';
    margin-right: auto;
    margin-left: auto;
    font-size: 16px;
    
    font-weight:400;
    color:#667085;

    
`;

export const ImgWrap = styled.div`
    display:flex;
    margin-right: auto;
    margin-left: auto;
    
`;

export const ImgA = styled.img`
    
    width:100%;
    justify-content:center;
    margin:0;
    padding-right: 0px;

    // @media screen and (max-width = 560px) {
    //     width:auto;
    //     height:auto;
    //     align-content:center;
    // }
`;

