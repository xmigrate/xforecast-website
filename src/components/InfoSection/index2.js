import React from 'react';

import {  FaRegEnvelope, FaArrowRight } from 'react-icons/fa';
import { FiZap,  } from "react-icons/fi";
import { RiBarChartFill } from "react-icons/ri";
import { IconContext } from 'react-icons';
import { 
    InfoContainer,
    InfoRow,
    InfoRow1,
    Column1,
    Column2,
    Column3,
    TextWrapper,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    TopLine,
    ContentHeading,
    ContentDescription,
    Circle
 } from './InfoElements';

const InfoSection2 = ({line1,
    heading,
    subtitle,
    img2,
    alt2,
    contentdescription1,
    contentdescription2,
    contentdescription3,
    contentheading1,
    contentheading2,
    contentheading3
}) => {
  return (
    <>
        <InfoContainer>
            <InfoRow>
                <TopLine>{line1}</TopLine>
                <Heading>{heading}</Heading>
                <Subtitle>{subtitle}</Subtitle>
            </InfoRow>
            <InfoRow>
                
                    <Img src={img2} alt={alt2}/>
                    
                </InfoRow>
        </InfoContainer>
        
            <InfoRow1>
                <Column1><Circle>
                  <FaRegEnvelope /></Circle>
                  <ContentHeading>{contentheading1}</ContentHeading>
                  <ContentDescription>{contentdescription1}</ContentDescription>
                  <TopLine>Learn More <FaArrowRight /></TopLine>
                </Column1>
                <Column1><Circle>
                <FiZap /></Circle>
                  <ContentHeading>{contentheading2}</ContentHeading>
                  <ContentDescription>{contentdescription2}</ContentDescription>
                  <TopLine>Learn More <FaArrowRight /></TopLine>
                </Column1>
                <Column1><Circle>
                <RiBarChartFill /></Circle>
                  <ContentHeading>{contentheading3}</ContentHeading>
                  <ContentDescription>{contentdescription3}</ContentDescription>
                  <TopLine>Learn More <FaArrowRight /></TopLine>
                </Column1>
              </InfoRow1>
    
    </>
  )
}

export default InfoSection2