import React from 'react';

import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import {
     InfoContainer,
     InfoRow,
     InfoRow1,
     Heading,
     Description,
     InfoColumn1,
     InfoColumn2,
     SubHeading,
     SubDescription,
     ImgWrap,
     ImgA,
     Button

        } from './InfoElements1';

const InfoSection3 = ({heading, description, subheading1, subheading2, subheading3, subheading4, subheading5, subheading6, subdescription1,img, alt, heading1,description1,button}) => {
  return (
    <>
        <InfoContainer>
            <InfoRow1>
                
                    <Heading>{heading}</Heading>
                    <Description>{description}</Description>
                
            </InfoRow1>
            </InfoContainer>

            
            <InfoContainer>
            <InfoRow>
                <InfoColumn1>
                <SubHeading>{subheading1}</SubHeading>
                <SubDescription>{subdescription1}</SubDescription>
                </InfoColumn1>
                <InfoColumn2><BiMinusCircle /></InfoColumn2>
            </InfoRow>

            <InfoRow>
                <InfoColumn1>
                <SubHeading>{subheading2}</SubHeading>
                
                </InfoColumn1>
                <InfoColumn2><BiPlusCircle /></InfoColumn2>
            </InfoRow>

            <InfoRow>
                <InfoColumn1>
                <SubHeading>{subheading3}</SubHeading>
                
                </InfoColumn1>
                <InfoColumn2><BiPlusCircle /></InfoColumn2>
            </InfoRow>

            <InfoRow>
                <InfoColumn1>
                <SubHeading>{subheading4}</SubHeading>
                
                </InfoColumn1>
                <InfoColumn2><BiPlusCircle /></InfoColumn2>
            </InfoRow>

            <InfoRow>
                <InfoColumn1>
                <SubHeading>{subheading5}</SubHeading>
                
                </InfoColumn1>
                <InfoColumn2><BiPlusCircle /></InfoColumn2>
            </InfoRow>

            <InfoRow>
                <InfoColumn1>
                <SubHeading>{subheading6}</SubHeading>
                
                </InfoColumn1>
                <InfoColumn2><BiPlusCircle /></InfoColumn2>
            </InfoRow>
        </InfoContainer>

         <InfoContainer>
            <InfoRow1 primary={true}>
                <ImgWrap>
                <ImgA src={img} alt={alt} />
                </ImgWrap>
                <SubHeading>{heading1}</SubHeading>
                <SubDescription>{description1}</SubDescription>
                <Button>{button}</Button>
            </InfoRow1>
        </InfoContainer> 
    </>
  )
}

export default InfoSection3