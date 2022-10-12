import React from 'react';
import  { useState } from 'react';
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { NavBtn } from '../Navbar/NavbarElements';
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
     Button,
     Icon

        } from './InfoElements1';

const InfoSection3 = ({toggle, heading, description, subheading1, subheading2, subheading3, subheading4, subheading5, subheading6, subdescription1,img, alt, heading1,description1,button}) => {
    const [show,setShow] =useState(false);
    const [show1,setShow1] =useState(false);
    const [show2,setShow2] =useState(false);
    const [show3,setShow3] =useState(false);
    const [show4,setShow4] =useState(false);
    const [show5,setShow5] =useState(false);
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
                {
                    show && <SubDescription>{subdescription1}</SubDescription>
                }
                </InfoColumn1>
                <InfoColumn2>
                <Button primary={true}onClick={() => setShow(!show)}>
                    {
                        show === false ? <BiPlusCircle color='black'/> : <BiMinusCircle color='black'/>
                    }
                </Button>
                </InfoColumn2>
               
                
            </InfoRow>

             <InfoRow>
                <InfoColumn1>
                <SubHeading>{subheading2}</SubHeading>
                {
                    show1 && <SubDescription>{subdescription1}</SubDescription>
                }
                </InfoColumn1>
                <InfoColumn2>
                <Button primary={true} onClick={() => setShow1(!show1)}>
                    {
                        show1 === false ? <BiPlusCircle color='black'/> : <BiMinusCircle color='black'/>
                    }
                </Button>
                </InfoColumn2>
            </InfoRow>

             <InfoRow>
                <InfoColumn1>
                <SubHeading>{subheading3}</SubHeading>
                {
                    show2 && <SubDescription>{subdescription1}</SubDescription>
                }
                </InfoColumn1>
                <InfoColumn2>
                <Button primary={true} onClick={() => setShow2(!show2)}>
                    {
                        show2 === false ? <BiPlusCircle color='black'/> : <BiMinusCircle color='black'/>
                    }
                </Button>
                </InfoColumn2>
            </InfoRow>

            <InfoRow>
                <InfoColumn1>
                <SubHeading>{subheading4}</SubHeading>
                {
                    show3 && <SubDescription>{subdescription1}</SubDescription>
                }
                </InfoColumn1>
                <InfoColumn2>
                <Button primary={true} onClick={() => setShow3(!show3)}>
                    {
                        show3 === false ? <BiPlusCircle color='black'/> : <BiMinusCircle color='black'/>
                    }
                </Button>
                </InfoColumn2>
            </InfoRow>

            <InfoRow>
                <InfoColumn1>
                <SubHeading>{subheading5}</SubHeading>
                {
                    show4 && <SubDescription>{subdescription1}</SubDescription>
                }
                </InfoColumn1>
                <InfoColumn2>
                <Button primary={true} onClick={() => setShow4(!show4)}>
                    {
                        show4 === false ? <BiPlusCircle color='black'/> : <BiMinusCircle color='black'/>
                    }
                </Button>
                </InfoColumn2>
            </InfoRow>

            <InfoRow>
                <InfoColumn1>
                <SubHeading>{subheading6}</SubHeading>
                {
                    show5 && <SubDescription>{subdescription1}</SubDescription>
                }
                </InfoColumn1>
                <InfoColumn2>
                <Button primary={true} onClick={() => setShow5(!show5)}>
                    {
                        show5 === false ? <BiPlusCircle color='black'/> : <BiMinusCircle color='black'/>
                    }
                </Button>
                </InfoColumn2>
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