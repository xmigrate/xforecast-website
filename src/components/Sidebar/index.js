import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
 } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
           <CloseIcon /> 
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="features" onClick={toggle}>
                   Features 
                </SidebarLink>
                <SidebarLink to="usecases" onClick={toggle}>
                   Use Cases 
                </SidebarLink>
                <SidebarLink to="documentation" onClick={toggle}>
                   Documentation 
                </SidebarLink>
                <SidebarLink to="pricing" onClick={toggle}>
                   Pricing 
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='github.com'>Get Started on Github <FaGithub /></SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar