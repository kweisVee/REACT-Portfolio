import React, { useState, useEffect } from 'react'
import { PagesContainer, PagesScrollButton } from './PagesElement'
import AboutMe from '../components/AboutMe'
import { aboutMeData } from '../components/AboutMe/Data'
import { FaChevronUp } from 'react-icons/fa'
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

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const scrollBackToTop = () => {
            window.scrollY > 40 ? setIsVisible(true) : setIsVisible(false)
        }

        window.addEventListener('scroll', scrollBackToTop)
    }, [])

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Nav toggle={toggle} />
            <PagesContainer>
                <PagesScrollButton onClick={scrollUp} isVisible={isVisible}>
                    <FaChevronUp />
                </PagesScrollButton>
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
