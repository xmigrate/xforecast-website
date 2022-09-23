import React from 'react';
import {
    InfoContainer,
    InfoRow,
    InfoRow1,
    Heading,
    Description,
    InfoColumn1,
    Row1,
    Column1,
    Column2,
    InfoColumn2,
    SubHeading,
    SubDescription,
    ImgWrap,
    ImgA,
    TopHeader,
    ColHeader

       } from './InfoElements2';

const InfoSection4 = ({topline, heading, description, colheading1, colheading2, colheading3, colheading4, subheading1, subheading2, subheading3, subheading4, subdes1, subdes2, subdes3, subdes4, img, alt}) => {
  return (
    <>
        <InfoContainer>
            <InfoRow1>
                <TopHeader>{topline}</TopHeader>
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
            </InfoRow1>
        </InfoContainer>

        <InfoContainer>
            <InfoRow >
                <InfoColumn1>
                    <Row1>
                        <Column1>
                            <ColHeader>{colheading1}</ColHeader>
                            <SubHeading>{subheading1}</SubHeading>
                            <SubDescription>{subdes1}</SubDescription>
                        </Column1>
                            
                        <Column1>
                            <ColHeader>{colheading2}</ColHeader>
                            <SubHeading>{subheading2}</SubHeading>
                            <SubDescription>{subdes2}</SubDescription>
                        </Column1>
                    </Row1>

                    <Row1>
                        <Column1>
                            <ColHeader>{colheading3}</ColHeader>
                            <SubHeading>{subheading3}</SubHeading>
                            <SubDescription>{subdes3}</SubDescription>
                        </Column1>

                        <Column1>
                            <ColHeader>{colheading4}</ColHeader>
                            <SubHeading>{subheading4}</SubHeading>
                            <SubDescription>{subdes4}</SubDescription>
                        </Column1>

                    </Row1>
                </InfoColumn1>

                <InfoColumn2>
                {/* <ColHeader>{colheading4}</ColHeader>
                            <SubHeading>{subheading4}</SubHeading>
                            <SubDescription>{subdes4}</SubDescription> */}
                    
                     <ImgA src={img} alt={alt} />  
                    
                </InfoColumn2>
            </InfoRow>
        </InfoContainer>
        
    
    </>
  )
}

export default InfoSection4