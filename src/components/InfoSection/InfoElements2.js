import styled from 'styled-components';



export const InfoContainer = styled.div`
    display: flex;
    width:100%
    margin:80px;
    flex-direction: column;
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
    
    display: flex;
    flex-direction: row;
    align-items:center;
`;

export const InfoColumn1 = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    
`;
export const Row1 = styled.div`
  display: flex;
  flex-direction:row;
  align-items:flex-start;
`;

export const Column1 = styled.div`
    text-align: center;
    display: flex;
    flex-direction:column;

    
`;

export const Column2 = styled.div`
    text-align: center;
    display:flex;
    flex-direction: column;
    
    
`

export const InfoColumn2 = styled.div`
    margin-top: 5px;
    display:flex;
    flex-direction:column;
    padding: 0 px;
    align-items:flex-start;
    text-align: center;
    


    
`;

export const TopHeader = styled.h3`
    font-weight: 600;
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
    line-height: 72px;
    text-align:center;
    letter-spacing: -0.0.em;
    color: #0082FF
`

export const SubHeading = styled.h2`
    align-items: center;
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
    font-family: 'Inter';
    font-style: normal;
    color:010606;
`;

export const SubDescription = styled.p`
    align-items:center;
    width:700px;
    font-family: 'Inter';
    margin-right: auto;
    margin-left: auto;
    font-size: 16px;
    line-height:24px;
    font-weight:400;
    color:#667085;

    @media screen and (max-width:1130px) {
        width:auto;
    }
`;

export const Img = styled.img`
    width: 100%;
    margin:0;
    padding-right: 0px;
`;

export const ImgWrap = styled.div`
    width: 15%;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    height: 100%;
`;

export const ImgA = styled.img`
    align-items: center;
    width: 100%;
    margin:0;
    padding-right: 0px;

    @media screen and (max-width:1080px) {
        width:auto;
    }
    @media screen and (max-width:920px) {
        width:auto;
    }
    @media screen and (max-width:730px) {
        width:auto;
    }
`;

