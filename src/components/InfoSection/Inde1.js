import React from 'react';
import { FaRegEnvelope, FaSmile } from 'react-icons/fa';
import { FiZap, FiCommand, FiMessageCircle } from "react-icons/fi";
import { RiBarChartFill,  } from "react-icons/ri";
import { IconContext } from 'react-icons';
import { 
    InfoContainer,
    InfoRo,
    InfoRow,
    InfoRow1,
    Column1,
    
    
    Heading,
    Subtitle,
    ImgWrap,
    Img,
    TopLine,
    ContentHeading,
    ContentDescription,
    Circle
 } from './InfoElements';

 export const Info = ({ headline3,  img1,alt1, headline1, topline, description1, contentdescription1, contentdescription2,contentdescription3, contentheading1, contentheading2, contentheading3, contentdescription4, contentdescription5, contentdescription6, contentheading4, contentheading5,contentheading6, post, name1}) => {
  return (
    <>
     <InfoContainer id="features">
              <InfoRow>
                <TopLine>{topline}</TopLine>
                <Heading>{headline1}</Heading>
                <Subtitle>{description1}</Subtitle>
              </InfoRow>
              </InfoContainer>
              <IconContext.Provider value={{ color:"#0082FF", size:"2em"}}>
              <InfoRow1>
                <Column1><Circle>
                  <FaRegEnvelope /></Circle>
                  <ContentHeading>{contentheading1}</ContentHeading>
                  <ContentDescription>{contentdescription1}</ContentDescription>
                </Column1>
                <Column1><Circle>
                <FiZap /></Circle>
                  <ContentHeading>{contentheading2}</ContentHeading>
                  <ContentDescription>{contentdescription2}</ContentDescription>
                </Column1>
                <Column1><Circle>
                <RiBarChartFill /></Circle>
                  <ContentHeading>{contentheading3}</ContentHeading>
                  <ContentDescription>{contentdescription3}</ContentDescription>
                </Column1>
              </InfoRow1>


               <InfoRow1>
                <Column1><Circle>
                <FaSmile /></Circle>
                  <ContentHeading>{contentheading4}</ContentHeading>
                  <ContentDescription>{contentdescription4}</ContentDescription>
                </Column1>
                <Column1><Circle>
                <FiCommand /></Circle>
                  <ContentHeading>{contentheading5}</ContentHeading>
                  <ContentDescription>{contentdescription5}</ContentDescription>
                </Column1>
                <Column1><Circle>
                <FiMessageCircle /></Circle>
                  <ContentHeading>{contentheading6}</ContentHeading>
                  <ContentDescription>{contentdescription6}</ContentDescription>
                </Column1>
              </InfoRow1> 
            </IconContext.Provider>
            


           <InfoContainer>
            <InfoRo>
              <Heading>{headline3}</Heading>
            
                <ImgWrap>
                    <Img src={img1} alt={alt1}/>
                    </ImgWrap>
                    <ContentHeading>{name1}</ContentHeading>
                    <ContentDescription>{post}</ContentDescription>
            </InfoRo>
          </InfoContainer> 

    </>
  )
}
