import React from 'react'
import { Button } from '../ButtonElements';
import { FaRegPlayCircle } from 'react-icons/fa';

import { 
    
    InfoWrapper,
    InfoRow,
    
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    
 } from './InfoElements';

const InfoSection = ({headline, headline3, description, buttonLabel, buttonLabel1, img,alt, img1,alt1, headline1, topline, description1, contentdescription1, contentdescription2,contentdescription3, contentheading1, contentheading2, contentheading3, contentdescription4, contentdescription5, contentdescription6, contentheading4, contentheading5,contentheading6, post, name1}) => {
  return (
    <>
        
            <InfoWrapper>
                <InfoRow >
                    
                        
                            
                            <Heading>{headline}</Heading>
                            </InfoRow>
                            <InfoRow>
                            <Subtitle>{description}</Subtitle>
                            </InfoRow>
                            <InfoRow>
                            <BtnWrap>
                                <Button primary={true} dark={true}><FaRegPlayCircle /> {buttonLabel}</Button>
                                 <Button>{buttonLabel1}</Button>
                            </BtnWrap>
                        
                    
                
                
                    <Img src={img} alt={alt}/>
                    
                </InfoRow>
            </InfoWrapper>



    
    </>
  )
}

export default InfoSection;