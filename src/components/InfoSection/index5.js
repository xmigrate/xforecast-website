import React from 'react';
import { FaSlack, FaYoutube, FaSpotify, FaGithub } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { InfoContainer, Heading, Description, Button, InfoRow, InfoRow1 } from './FooterElements';
import { BtnWrap } from './InfoElements';

export const FooterSection = ({heading, description, button1, button2, heading1, description1, description2}) => {
  return (
    <>

      <InfoContainer>
        <InfoRow1 primary={true}>
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
        
        <InfoRow1 primary={true}>
        <BtnWrap>
        <Button primary={true} dark={true}>{button1}</Button>
        <Button>{button2}</Button>
        </BtnWrap>
        </InfoRow1>
        </InfoRow1>
      </InfoContainer>

      <InfoContainer>
        <InfoRow1 >
        <Heading>{heading1}</Heading>
        <Description>{description1}</Description>
        <IconContext.Provider value={{ color:"#89898D", size:"6em", display:"flex", justifyContent:"space-between"}}>
        <InfoRow>
        < FaSlack to="" />
        <FaYoutube /> 
        <FaSpotify />
        <FaGithub />
        </InfoRow>
        </IconContext.Provider>
        <Description>{description2}</Description>
        </InfoRow1>
      </InfoContainer>

    </>
  )
}

