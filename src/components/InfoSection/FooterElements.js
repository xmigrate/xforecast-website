import styled from "styled-components";
import { Link } from "react-scroll";

export const InfoContainer = styled.div`
    margin: 11%;
    background:#fff;
    align-items: center;
    text-align: center;

    @media screen (max-width: 330px) {
        width:auto;
    }
    @media screen (max-width: 1080px) {
        width:auto;
    }
    @media screen (max-width: 920px) {
        width:auto;
    }

`;

export const InfoRow1 = styled.div`
    background:${({ primary }) => (primary ? '#F9FAFB' : '#fff')};
    justify-content:center;
    gap:20px;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    

    @media screen (max-width: 340px) {
        width:auto;
    }   
    @media screen (max-width: 1080px) {
        width:auto;
    }
    @media screen (max-width: 920px) {
        width:auto;
    }
`;

export const InfoRow = styled.div`
    background:${({ primary }) => (primary ? '#F9FAFB' : '#fff')};
    margin: 20px;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction:row;
    gap:15px;
    justify-content:center;

    @media screen (max-width: 345px) {
        width:auto;
    }   
    @media screen (max-width: 1080px) {
        width:auto;
    }
    @media screen (max-width: 920px) {
        width:auto;
    }
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
export const Wrap = styled.div`
    display:flex;
    flex-direction:row;
    gap:8px;
    align-items:center;
    justify-content: center;
    
`;

export const Button = styled(Link)`
    
    background: ${({ primary }) => (primary ? '#ffffff' : '#0082FF')};
    padding:10px;
    color: ${({ dark }) => (dark ? '#344054' : '#ffffff')};
    font-size:16px;
    font-family: 'Inter';
    outline: none;
    border: 1px;

    
    margin: 10px;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    border-width: 20px;
    cursor: pointer;
    
    justify-content: center;
    align-items: center;
    


`;