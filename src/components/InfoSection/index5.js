import React from 'react';

import { InfoContainer, Heading, Description, Button } from './InfoElements';

const FooterSection = ({heading, description, button1, button2}) => {
  return (
    <>

      <InfoContainer>
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
        <Button>{button1}</Button>
        <Button>{button2}</Button>
      </InfoContainer>

    </>
  )
}

export default FooterSection