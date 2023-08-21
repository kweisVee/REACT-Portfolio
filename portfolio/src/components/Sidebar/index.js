import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarText,
} from './SidebarElements'
// import { FaBars } from 'react-icons/fa'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        <SidebarText>About Me</SidebarText>
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>
                        <SidebarText>Projects</SidebarText>
                    </SidebarLink>
                    <SidebarLink to="timeline" onClick={toggle}>
                        <SidebarText>Experience</SidebarText>
                    </SidebarLink>
                    <SidebarLink to="blog" onClick={toggle}>
                        <SidebarText>Blog</SidebarText>
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        <SidebarText>Contact</SidebarText>
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
