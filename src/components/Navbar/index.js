import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
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
                    <NavBtnLink to='github'>Get Started on Github <FaGithub /></NavBtnLink>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                    </a>
           <Routes>
              <Route path="/gitgub" element={<NavBtnLink />} />
           </Routes>
                </NavBtn>
               
            </NavMenu>
            </NavbarContainer>  
       
        </Nav>

        

        
        </>
  )
}

export default Navbar
