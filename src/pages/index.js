import React, { useState } from 'react'
import { PagesContainer } from './PagesElement'
import AboutMe from '../components/AboutMe'
import { aboutMeData } from '../components/AboutMe/Data'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'
import Contact from '../components/Contact'
import Resume from '../components/Resume'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <PagesContainer>
                <AboutMe {...aboutMeData} />
                <Projects />
                <Resume />
                <Contact />
            </PagesContainer>
        </>
    )
}

export default Home
