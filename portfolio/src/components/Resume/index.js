import React from 'react'
// import kweisImg from '../../images/kweis.jpeg'
import resumeIcon from '../../images/resumeIcon.svg'
import { FaBuilding } from 'react-icons/fa'
import { 
    ResumeContainer,
    ResumeTitle,
    ResumeBodyContainer,
    ResumeImageContainer,
    ResumeImage,
    ResumeWorkEducationContainer,
    ResumeDetailsContainer,
    ResumeDetailsTypeTitle,
    ResumeWorkDetailsContainer, 
    ResumeWorkDetailsTopContainer,
    ResumeJobTitle,
    ResumeJobDates,
    ResumeWorkDetailsBottomContainer,
    ResumeWorkCompany, 
    ResumeWorkIcon,
    ResumeWorkDescription
} from './ResumeElements'

const Resume = () => {
  return (
    <ResumeContainer id="resume">
        {/* <ResumeTitle>
            <em>RESUME</em>
        </ResumeTitle> */}
        <ResumeBodyContainer>
            <ResumeImageContainer>
                <ResumeImage alt="ResumeImage" src={resumeIcon} />
            </ResumeImageContainer>
            <ResumeWorkEducationContainer>
                <ResumeDetailsContainer>
                    <ResumeTitle>
                        <em>RESUME</em>
                    </ResumeTitle>
                    <ResumeDetailsTypeTitle>
                        WORK EXPERIENCE
                    </ResumeDetailsTypeTitle>
                    <ResumeWorkDetailsContainer>
                        <ResumeWorkDetailsTopContainer>
                            <ResumeJobTitle>
                                Software Engineer Intern
                            </ResumeJobTitle>
                            <ResumeJobDates>
                                <em>July 2022 - September 2022</em>
                            </ResumeJobDates>
                        </ResumeWorkDetailsTopContainer>
                        <ResumeWorkDetailsBottomContainer>
                            <ResumeWorkCompany>
                                <ResumeWorkIcon><FaBuilding /></ResumeWorkIcon>LeapFroggr, Inc.
                            </ResumeWorkCompany>
                            <ResumeWorkDescription>
                            Worked on Frontend for the iOS application with the use of Swift, Texture, Redux, RxSwift, and RxCocoa.
                            </ResumeWorkDescription>
                        </ResumeWorkDetailsBottomContainer>
                        <hr></hr>
                    </ResumeWorkDetailsContainer>

                    <ResumeWorkDetailsContainer>
                        <ResumeWorkDetailsTopContainer>
                            <ResumeJobTitle>
                                Backend Engineer Intern
                            </ResumeJobTitle>
                            <ResumeJobDates>
                                <em>February 2022 - June 2022</em>
                            </ResumeJobDates>
                        </ResumeWorkDetailsTopContainer>
                        <ResumeWorkDetailsBottomContainer>
                            <ResumeWorkCompany>
                                <ResumeWorkIcon><FaBuilding /></ResumeWorkIcon>MoodMe
                            </ResumeWorkCompany>
                            <ResumeWorkDescription>
                            Worked on a full-scale project as being the one in charge of leading the backend team with tasks covering APIs with three-tiered architecture, using serverless, typescript, AWS, and MySQL.
                            </ResumeWorkDescription>
                        </ResumeWorkDetailsBottomContainer>
                        <hr></hr>
                    </ResumeWorkDetailsContainer>
                </ResumeDetailsContainer>

                <ResumeDetailsContainer>
                    <ResumeDetailsTypeTitle>
                        EDUCATION
                    </ResumeDetailsTypeTitle>
                    <ResumeWorkDetailsContainer>
                        <ResumeWorkDetailsTopContainer>
                            <ResumeJobTitle>
                                Bachelor of Science in Computer Science major in Software Technology
                            </ResumeJobTitle>
                            <ResumeJobDates>
                                <em>October 2018 - October 2022</em>
                            </ResumeJobDates>
                        </ResumeWorkDetailsTopContainer>
                        <ResumeWorkDetailsBottomContainer>
                            <ResumeWorkCompany>
                                <ResumeWorkIcon><FaBuilding /></ResumeWorkIcon>De La Salle University - Manila
                            </ResumeWorkCompany>
                            <ResumeWorkDescription>
                            Dean's Lister from 2018 to present, Magna Cum Laude with a GPA of 3.7/4.0, and an active volunteer for For The Kids organization.
                            </ResumeWorkDescription>
                        </ResumeWorkDetailsBottomContainer>
                        <hr></hr>
                    </ResumeWorkDetailsContainer>
                </ResumeDetailsContainer>
            </ResumeWorkEducationContainer>
        </ResumeBodyContainer>
    </ResumeContainer>
  )
}

export default Resume