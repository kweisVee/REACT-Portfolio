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
    AboutMeBottom,
    AboutMeBottomTempContainer,
    AboutMeBottomRight,
    AboutMePhoneInfo,
    AboutMePhoneInfoTitle,
    AboutMePhoneInfoNumber,
    AboutMeEmailInfo,
    AboutMeEmailInfoTitle,
    AboutMeEmailInfoMail,
} from './AboutMeElements'

const AboutMe = ({
    img,
    intro,
    name,
    occupation,
    phone,
    email,
    description,
}) => {
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
                            <AboutMeIntro>
                                {name}
                                {/* {intro}
                                <span
                                    style={{
                                        color: '#f7b26d',
                                        fontWeight: 700,
                                    }}
                                >
                                    CHRISSY
                                </span>
                                . */}
                            </AboutMeIntro>
                            {/* <AboutMeName>{name}</AboutMeName> */}
                        </AboutMeIntroName>
                        <AboutMeOccupation>{occupation}</AboutMeOccupation>
                        <AboutMeDescription>{description}</AboutMeDescription>
                        {/* <AboutMeBottomRight>
                            <AboutMePhoneInfo>
                                <AboutMePhoneInfoTitle>
                                    Phone
                                </AboutMePhoneInfoTitle>
                                <AboutMePhoneInfoNumber>
                                    {phone}
                                </AboutMePhoneInfoNumber>
                            </AboutMePhoneInfo>
                            <AboutMeEmailInfo>
                                <AboutMeEmailInfoTitle>
                                    Email
                                </AboutMeEmailInfoTitle>
                                <AboutMeEmailInfoMail>
                                    {email}
                                </AboutMeEmailInfoMail>
                            </AboutMeEmailInfo>
                        </AboutMeBottomRight> */}
                    </AboutMeIntroContainer>
                </AboutMeTopFirst>
            </AboutMeTop>

            {/* <AboutMeBottom>
                <AboutMeBottomTempContainer></AboutMeBottomTempContainer>
                <AboutMeBottomRight>
                    <AboutMePhoneInfo>
                        <AboutMePhoneInfoTitle>Phone</AboutMePhoneInfoTitle>
                        <AboutMePhoneInfoNumber>{phone}</AboutMePhoneInfoNumber>
                    </AboutMePhoneInfo>
                    <AboutMeEmailInfo>
                        <AboutMeEmailInfoTitle>Email</AboutMeEmailInfoTitle>
                        <AboutMeEmailInfoMail>{email}</AboutMeEmailInfoMail>
                    </AboutMeEmailInfo>
                </AboutMeBottomRight>
            </AboutMeBottom> */}
        </AboutMeContainer>
    )
}

export default AboutMe
