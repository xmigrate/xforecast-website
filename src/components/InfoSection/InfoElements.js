import styled from 'styled-components';


export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    background:#fff;
    align-items: center;
    text-align: center;
    `;

export const InfoWrapper = styled.div`
    align-items: center;
    background: #E4F4FF;
    z-index: 1;
    text-align: center:
    width:100%;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding:0;
    justify-content: center;
`;

export const InfoRow = styled.div`
    background:{({Primary}) => (Primary ? '#fff' : '#E4F4FF')};
    
    align-items: center;
    
    display: grid;

    }
`;


export const InfoRow1 = styled.div`
    
    width: 100%;
    align-items:center;
    background: #fff;
    display: grid;
    
    grid-template-columns: 2fr 2fr 2fr;
    grid-gap:20px;
    padding: 0 200px;
    }
`;

export const Column1 = styled.div`
    margin-bottom: 10px;
    padding: 0 px;
    align-items: center;
    grid-area: 2fr;
    
`;

export const Column2 = styled.div`
    margin-bottom: 10px;
    padding: 0 px;
    align-items: center;
    grid-area: 2fr;
    
`;

export const Column3 = styled.div`
    margin-bottom: 10px;
    
    align-items: center;
    grid-area: 2fr;
    
`;

export const TextWrapper = styled.div`
    text-align: center;
    padding-top: 0;
    padding-bottom: 60px;
    font-family: 'Inter';
`;

export const TopLine = styled.p`
    color: #1DA1F2;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    letter-spacing: 1.4px;
    margin-bottom: 0;
    font-family: 'Inter';
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    text-align: center;
    align-items:center;
    margin-right: auto;
    margin-left: auto;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color:010606;
    font-family: 'Inter';

`;

export const Subtitle = styled.p`
    align-items:center;
    text-align:center;
    margin-right: auto;
    margin-left: auto;
    max-width:570px;
    font-size: 20px;
    line-height:24px;
    color:#667085;
    font-family: 'Inter';
`;

export const BtnWrap = styled.div`
    display: flex;
    margin: 10px;
    justify-content: center;
    
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    margin-right: auto;
    margin-left: auto;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin:0;
    padding-right: 0px;

    @media screen (max-width: 800px) {
        width:auto;
    }
    @media screen (max-width: 720px) {
        width:auto;
    }
    @media screen (max-width: 1080px) {
        width:auto;
    }
`;

export const ContentHeading = styled.h2`
    align-items: center;
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
    font-family: 'Inter';
    font-style: normal;
    color:010606;
`;

export const ContentDescription = styled.p`
    align-items:center;
    margin-right: auto;
    margin-left: auto;
    max-width:300px;
    font-size: 16px;
    line-height:24px;
    font-family: 'Inter';
    font-weight:400;
    color:#667085;
`;

export const Circle = styled.div`
    width: 48px;
    height: 48px;
    background: #C6E7FD;
    border: 8px solid #E4F4FF;
    border-radius:28px;
    align-items:center;
`;

export const FaRegEnvelope = styled.div` 
    width: 48px;
    height: 48px;
    background: #C6E7FD;
    border: 8px solid #E4F4FF;
    border-radius:28px;
    align-items:center;
`;