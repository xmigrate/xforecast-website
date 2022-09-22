import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`

    background: ${({ primary }) => (primary ? '#ffffff' : '#000000')};
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#344054' : '#ffffff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1px;

    margin: 10px;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    border-width: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    


`;