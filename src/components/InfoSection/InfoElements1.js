import styled from 'styled-components';
import { Link } from "react-scroll";

export const Button = styled(Link)`
    
    background: ${({ primary }) => (primary ? '#ffffff' : '#0082FF')};
    padding:10px 18px;
    color: ${({ dark }) => (dark ? '#344054' : '#ffffff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    font-family: 'Inter';
    outline: none;
    border: 1px;

    
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    width: 130px;
    margin-right: auto;
    margin-left: auto;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    


`;


export const InfoContainer = styled.div`

    margin:4%;
    
    background:#fff;
    align-items: center;
    text-align: center;

   

    `;

  
export const InfoRow1 = styled.div`
    background:${({ primary }) => (primary ? '#F9FAFB' : '#fff')};

    align-items: center;
    
    display: flex;
    flex-direction:column

    
`;


    export const InfoRow = styled.div`
    
    
    align-items:center;
    
    display: flex;
    flex-direction: row;
    
    gap:20px;
    padding: 0px;
    
    
`;

export const InfoColumn1 = styled.div`
    margin-bottom: 10px;
    padding: 0 px;
    text-align: left;
    align-items:center;
    
    flex:2;
    
`;

export const InfoColumn2 = styled.div`

    padding: 0 px;
    align-self:center;
    text-align: left;
    
    flex:1;
    
`;

export const Heading = styled.h1`
    margin-bottom: 16px;
    font-family:Inter;
    text-align: center;
    align-items:center;
    
    font-size: 48px;
    font-family: 'Inter';
    line-height: 1.1;
    font-weight: 600;
    color:010606;

`;

export const Description = styled.p`
    align-items:center;
    text-align:center;
    margin-right: auto;
    margin-left: auto;
    max-width:570px;
    font-size: 18px;
    font-family: 'Inter';
    line-height:14px;
    color:#667085;
`;

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
    align-items:left;
    text-align:left;
    font-family: 'Inter';
    
    // margin-right: auto;
    // margin-left: auto;
    font-size: 16px;
    line-height:24px;
    font-weight:400;
    color:#667085;
    

    `;

export const Img = styled.img`
    width: 100%;
    margin:0;
    padding-right: 0px;
`;

export const ImgWrap = styled.div`
    
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    height: 100%;
`;

export const ImgA = styled.img`
    align-items: center;
    width:auto;
    margin:0;
    padding-right: 0px;

    // @media screen and (max-width:345px) {
    //     width:auto;
    // }
    // @media screen (max-width: 1080px) {
    //     width:auto;
    // }
    // @media screen (max-width: 920px) {
    //     width:auto;
    // }
`;

