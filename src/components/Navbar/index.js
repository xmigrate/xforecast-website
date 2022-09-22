import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import {
     Nav,
     NavbarContainer,
     NavLogo,
     MobileIcon,
     NavMenu,
     NavItem,
     NavLinks,
     NavBtn,
     NavBtnLink
} from './NavbarElements';
const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'> Xforecast </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='features'>Features</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='usecases'>Use cases</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='documentation'>Documentation</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='pricing'>Pricing</NavLinks>
                </NavItem>
                <NavBtn>
                    <NavBtnLink to='github.com'>Get Started on Github <FaGithub /></NavBtnLink>
                </NavBtn>
            </NavMenu>
            </NavbarContainer>  
       
        </Nav>
        </>
  )
}

export default Navbar