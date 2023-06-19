import React from 'react'
import {
    AboutMeContainer,
    AboutMeTop,
    AboutMeTopFirst,
    AboutMeImgContainer,
    AboutMeImgBorder,
    AboutMeImage,
    AboutMeIntroContainer,
    AboutMeIntroName,
    AboutMeIntro,
    AboutMeOccupation,
    AboutMeDescription,
} from './AboutMeElements'

const AboutMe = ({ img, name, occupation, description }) => {
    return (
        <AboutMeContainer id="about">
            <AboutMeTop>
                <AboutMeTopFirst>
                    <AboutMeImgContainer>
                        <AboutMeImgBorder>
                            <AboutMeImage alt="AboutMeImage" src={img} />
                        </AboutMeImgBorder>
                    </AboutMeImgContainer>
                    <AboutMeIntroContainer>
                        <AboutMeIntroName>
                            <AboutMeIntro>{name}</AboutMeIntro>
                        </AboutMeIntroName>
                        <AboutMeOccupation>{occupation}</AboutMeOccupation>
                        <AboutMeDescription>{description}</AboutMeDescription>
                    </AboutMeIntroContainer>
                </AboutMeTopFirst>
            </AboutMeTop>
        </AboutMeContainer>
    )
}

export default AboutMe
