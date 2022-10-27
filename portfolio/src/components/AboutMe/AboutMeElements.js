import styled from 'styled-components'

export const AboutMeContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
    font-family: 'Montserrat', sans-serif;
    background: #de5542;
    height: 90vh;
    width: 100%;
    padding: 0px 200px;
    font-weight: 150;

    @media screen and (max-width: 770px) {
        flex-direction: 100%;
        padding: 0px 40px;
    }

    @media screen and (max-width: 280px) {
        padding: 0px 0px;
    }
`

export const AboutMeTop = styled.div`
    display: flex;
    flex-direction: column;
`

export const AboutMeTopFirst = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: row;
    @media screen and (max-width: 770px) {
        flex-direction: column;
        justify-content: initial;
        gap: 10px;
    }
`

export const AboutMeImgContainer = styled.div`
    align-items: center;
    padding: 5rem;
    @media screen and (max-width: 770px) {
        padding: 3rem;
    }
    @media screen and (max-width: 280px) {
        padding: 1rem;
    }
`
export const AboutMeImgBorder = styled.div`
    height: 290px;
    width: 280px;
    border-radius: 50%;
    padding: 12px;
    border: 3px solid #fff;
    align-items: center;

    @media screen and (max-width: 688px) {
        height: 240px;
        width: 230px;
    }

    @media screen and (max-width: 280px) {
        /* padding: 14px; */
        height: 210px;
        width: 200px;
        border: 3px solid #fff;
    }
`

export const AboutMeImage = styled.img`
    height: 260px;
    width: 250px;
    border-radius: 50%;
    /* align-self: center; */

    @media screen and (max-width: 688px) {
        height: 210px;
        width: 200px;
    }

    @media screen and (max-width: 280px) {
        height: 180px;
        width: 170px;
    }
`

export const AboutMeIntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 220%;
    @media screen and (max-width: 688px) {
        font-size: 180%;
    }

    @media screen and (max-width: 410px) {
        font-size: 150%;
    }

    @media screen and (max-width: 280px) {
        font-size: 120%;
    }
`
export const AboutMeIntroName = styled.div`
    display: flex;
`
export const AboutMeIntro = styled.p``
export const AboutMeName = styled.p``
export const AboutMeOccupation = styled.div``

export const AboutMeBottom = styled.div`
    display: flex;
    color: #fff;
    text-align: right;
    justify-content: center;

    @media screen and (max-width: 770px) {
        margin-top: 50px;
        /* text-align: center;
        flex-direction: row; */
    }

    @media screen and (max-width: 400px) {
        margin-top: 20px;
        /* text-align: center;
        flex-direction: row; */
    }
`
export const AboutMeBottomTempContainer = styled.div`
    flex-grow: 3;
    @media screen and (max-width: 770px) {
        flex-grow: 0;
    }
`

export const AboutMeBottomRight = styled.div`
    display: flex;
    text-align: right;
    align-items: center;
    justify-content: space-around;
    gap: 50px;
    flex-grow: 1;

    @media screen and (max-width: 770px) {
        margin-top: 10px;
        text-align: center;
        flex-direction: column;
    }
`
export const AboutMePhoneInfo = styled.div`
    display: flex;
    flex-direction: column;
`
export const AboutMePhoneInfoTitle = styled.div``
export const AboutMePhoneInfoNumber = styled.div``

export const AboutMeEmailInfo = styled.div``

export const AboutMeEmailInfoTitle = styled.div``
export const AboutMeEmailInfoMail = styled.div``
