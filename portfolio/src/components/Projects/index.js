import React from 'react'
import {
    ProjectsContainer,
    ProjectsTitleContainer,
    ProjectsTitle,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsIcon, 
    ProjectName, 
    ProjectDesc
} from './ProjectsElements'
import Icon1 from '../../images/Icon1.svg'
import Icon2 from '../../images/Icon2.svg'
import Icon3 from '../../images/Icon3.svg'
import Icon4 from '../../images/Icon4.svg'
import Icon5 from '../../images/Icon5.svg'

const Projects = () => {
    const handleClick = (projectName) => {
        if (projectName === 's12g9') {
            window.open(`https://github.com/ccapdev1920T2/${projectName}`);
        } else if(projectName === 'MOBDEVE-S15-Group-9') {
            window.open(`https://github.com/gwyneth-ang/${projectName}`);
        } else {
            window.open(`https://github.com/kweisVee/${projectName}`);
        }
    }

    return (
        // check 2:34:20 for the id
        <ProjectsContainer>
            <ProjectsTitleContainer>
                <ProjectsTitle>My Projects</ProjectsTitle>
                <ProjectsWrapper>
                    <ProjectsCard onClick={() => handleClick("HollywoodTheater")}>
                        <ProjectName>HOLLYWOOD THEATER</ProjectName>
                        <ProjectsIcon src={Icon1} />
                        <ProjectDesc>A booking reservation app using Mongodb, Express.js, React.js, and Node.js. </ProjectDesc> 
                    </ProjectsCard>
                    <ProjectsCard onClick={() => handleClick("iOS-Mood-Tracker")}>
                        <ProjectName>MOOD TRACKER</ProjectName>
                        <ProjectsIcon src={Icon2} />
                        <ProjectDesc>An iOs project built with Swift, SwiftUI, Texture, Node.js, Express.js and MongoDB</ProjectDesc> 
                    </ProjectsCard>
                    <ProjectsCard onClick={() => handleClick("Treater")}>
                        <ProjectName>TREATER</ProjectName>
                        <ProjectsIcon src={Icon3} />
                        <ProjectDesc>A social media web application like Twitter built with the Django framework, HTML, CSS, Javascript, and SQLite.</ProjectDesc> 
                    </ProjectsCard>
                    <ProjectsCard onClick={() => handleClick("s12g9")}>
                        <ProjectName>HOTEL PARAISO</ProjectName>
                        <ProjectsIcon src={Icon4} />
                        <ProjectDesc>A hotel booking system built with Node.js, Express.js, HTML, CSS, Javascript, and MongoDB.</ProjectDesc> 
                    </ProjectsCard>
                    <ProjectsCard onClick={() => handleClick("MOBDEVE-S15-Group-9")}>
                        <ProjectName>BOOKBAY</ProjectName>
                        <ProjectsIcon src={Icon5} />
                        <ProjectDesc>An online bookstore android application built with Java, and MongoDB.</ProjectDesc> 
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsTitleContainer>
        </ProjectsContainer>
    )
}

export default Projects
