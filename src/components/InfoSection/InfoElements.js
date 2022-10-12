import styled from 'styled-components';


export const InfoContainer = styled.div`
    
    width:100%;
    background:#fff;
    align-items: center;
    text-align: center;
    `;

export const InfoWrapper = styled.div`
    align-items: center;
    background: #E4F4FF;
    width:100%;
    text-align: center:
    
    
    
    padding:0;
    justify-content: center;
`;

export const InfoRow = styled.div`
    background:{({Primary}) => (Primary ? '#fff' : '#E4F4FF')};
    
    align-items: center;
    
    display:flex ;
    flex-direction:column;

    }
`;

export const InfoRo = styled.div`
    background:{({Primary}) => (Primary ? '#fff' : '#E4F4FF')};
    
    align-items: center;
    
    display: flex;
    flex-direction:column;

    }
`;

export const InfoRow1 = styled.div`
    
    // width: 80%;
    margin-top:10px;
    align-items:center;
    background: #fff;
    display: flex;
    flex-direction:row;
    flex:1;

    
`;

export const Column1 = styled.div`
    
    margin-bottom: 10px;
    padding: 0 px;
    align-items: center;
    flex:1;
    flex-direction:column;
    

`;

export const Column2 = styled.div`
    margin-bottom: 10px;
    
    padding: 0 px;
    align-items: center;
    text-align:center;
    display:flex;
    flex-direction:column;
    
`;

export const Column3 = styled.div`
    margin-bottom: 10px;

    align-items: center;
    
    
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
    text-align:center
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    text-align: center;
    align-items:center;
    margin-right: auto;
    margin-left: auto;
    font-size: 48px;
    line-height: 1.1;
    
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
    
    justify-content: center;
    
`;

export const ImgWrap = styled.div`
    display:flex;
    margin-right: auto;
    margin-left: auto;
    
`;

export const Img = styled.img`
    
    width:80%;
    margin:0;
    padding-right: 0px;

    // @media screen and (max-width = 450px) {
    //     width:auto;
    //     height:auto;
    //     align-content:center;
    // }
`;

export const ContentHeading = styled.h2`
    text-align: center;
    font-size: 20px;
    line-height: 30px;
    
    font-family: 'Inter';
    font-style: normal;
    color:010606;
`;

export const ContentDescription = styled.p`
    text-align:center;
    margin-right: auto;
    margin-left: auto;
    max-width:300px;
    font-size: 16px;
    line-height:24px;
    font-family: 'Inter';
    
    color:#667085;
`;

export const Circle = styled.div`
    width: 48px;
    height: 48px;
    margin: auto;
    background: #C6E7FD;
    border: 8px solid #E4F4FF;
    border-radius:28px;
    text-align: center;
    padding-top: 8px;
    
    color:#0059FF;
    size:2em;
    
`;

