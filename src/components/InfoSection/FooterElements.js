import styled from "styled-components";
import { Link } from "react-scroll";



export const InfoContainer = styled.div`
    margin: 11%;
    
    background:#fff;
    align-items: center;
    text-align: center;

    

`;

export const InfoRow1 = styled.div`
    background:${({ primary }) => (primary ? '#F9FAFB' : '#fff')};
    justify-content:center;
    gap:20px;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding:20px;
    

    
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
    line-height: auto;
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
    line-height:auto;
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

export const Container = styled.div`
    margin:11px;
    align-items:center;
    width:100%;
    height:auto;
    padding:12px;
    border-style: solid;
  border-width: 1px 0px 0px 0px;
    color: rgba(0, 0, 0, 0.1);
`;

export const Row = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    
    align-content:center;

    @media screen and (max-width:920px) {
        grid-template-columns:1fr 1fr;
    }

`;

export const Column = styled.div`
    flex-direction:row;
    flex:1;
    text-align:center;
    color:#0082FF;
    justify-content:center;
    gap:100px;
`;

export const Col = styled(Link)`
color:#8A8A8E;
font-family:'inter';
cursor:pointer;
gap: 100px;
`;