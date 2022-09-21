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
    display: flex;
    margin:100px;
    flex-direction: column;
    background:#fff;
    align-items: center;
    text-align: center;
    `;

    export const InfoRow1 = styled.div`
    background:${({ primary }) => (primary ? '#F9FAFB' : '#fff')};
    
    align-items: center;
    
    display: grid;

    }
`;


    export const InfoRow = styled.div`
    
    width: 100%;
    max-width:1100px;
    align-items:flex-start;
    background: #fff;
    display: grid;
    flex-direction: row;
    grid-template-columns: 1fr 1fr ;
    grid-gap:20px;
    padding: 0 200px;
    
    }
`;

export const InfoColumn1 = styled.div`
    margin-bottom: 10px;
    padding: 0 px;
    text-align: left;
    align-items:flex-start;
    grid-area: 1fr;
    
    
`;

export const InfoColumn2 = styled.div`
    margin-top: 15px;
    padding: 0 px;
    align-items:flex-start;
    text-align: left;
    grid-area: 1fr;
    
`;

export const Heading = styled.h1`
    margin-bottom: 16px;
    font-family:Inter;
    text-align: center;
    align-items:center;
    margin-right: auto;
    margin-left: auto;
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
    align-items:center;
    font-family: 'Inter';
    width:700px;
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
    
    margin:0;
    padding-right: 0px;

    @media screen and (max-width:800px) {
        width:auto;
    }
    @media screen (max-width: 1080px) {
        width:auto;
    }
    @media screen (max-width: 920px) {
        width:auto;
    }
`;

