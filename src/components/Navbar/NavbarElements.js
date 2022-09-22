import styled from 'styled-components';
import { Link as linkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
background: #E4F4FF;
height:70px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;

top: 0;
z-index:10;

@media screeen and (max-width: 960px){
  transition:0.8s all ease;
}
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index:1;
  width:100%;
  padding: 0 24 px;
  max-width: 1100px;
`;
  
export const NavLogo = styled(linkR)`
color:#0082FF;
display: flex;
align-items: center;
text-decoration:none;
font-weight:bold;
cursor: pointer;
font-size: 1.5rem;
justify-self: flex-start;
margin-left: 12px;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
  display: block;
  position:absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor:pointer;
  color: #fff;
}
`;

export const NavMenu = styled.ul`
display:flex;
align-items: center;
list-style:none;
text-align:center;
margin-right: -22px;


@media screen and (max-width:768px) {
  display: none;
}
`;

export const NavItem = styled.li`
height: 70px;
`;

export const NavLinks = styled(LinkS)`
color:#667085;
display:flex;
align-items: center;
text-decoration: none;
padding:0 1rem;
height: 100%;
cursor: pointer;

&.active {
  border-bottom: 3px solid #01bf71;
}
`;

export const NavBtn = styled.nav`
display:flex;
align-items: center;

@media screen and (max-width: 768px) {
  display: none;
}
`;
export const NavBtnLink = styled(linkR)`
border-radius: 50px;
background:#000;
white-space: nowrap;
padding: 10px 22px;
color:#fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;

text-decoration:none;


`;
