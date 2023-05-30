import React, { useState } from 'react'
import { PagesContainer } from './PagesElement'
import AboutMe from '../components/AboutMe'
import { aboutMeData } from '../components/AboutMe/Data'
import Navbar from '../components/Navbar'
import Nav from '../components/Nav'
import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'
import Contact from '../components/Contact'
import Timeline from '../components/Timeline'
import Blog from '../components/Blog'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            {/* <Navbar toggle={toggle} /> */}
            <Nav />
            <PagesContainer>
                <AboutMe {...aboutMeData} />
                <Projects />
                <Timeline />
                <Blog />
                <Contact />
            </PagesContainer>
        </>
    )
}

export default Home
