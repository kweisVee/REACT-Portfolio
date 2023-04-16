import styled from 'styled-components'

export const AboutMeContainer = styled.div`
    /* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap'); */
    font-family: 'Montserrat', sans-serif;
    background: #de5542;
    height: 100vh;
    /* height: 100%; */
    width: 100%;
    display: flex;
    font-weight: 200;
    flex-direction: column;
    padding: 0px 200px;
    font-weight: 150;
    /* height: 100%; */
    padding: 80px 200px 140px 100px;

    @media screen and (max-width: 912px) {
        padding: 30px 40px;
        /* height: 95vh; */
    }

    @media screen and (max-width: 375px) {
        /* height: 89vh; */
        padding: 20px 0px;
        height: 100%;
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
    @media screen and (max-width: 912px) {
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

    /* @media screen and (max-width: 912px) {
        height: 310px;
        width: 300px;
    } */

    @media screen and (max-width: 912px) {
        height: 240px;
        width: 230px;
    }

    @media screen and (max-width: 375px) {
        height: 190px;
        width: 180px;
        border: 3px solid #fff;
    }
`

export const AboutMeImage = styled.img`
    height: 260px;
    width: 250px;
    border-radius: 50%;

    @media screen and (max-width: 912px) {
        height: 210px;
        width: 200px;
    }

    @media screen and (max-width: 375px) {
        height: 160px;
        width: 150px;
    }
`

export const AboutMeIntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 220%;

    @media screen and (max-width: 912px) {
        font-size: 200%;
    }

    @media screen and (max-width: 688px) {
        font-size: 180%;
    }

    @media screen and (max-width: 414px) {
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

    @media screen and (max-width: 912px) {
        margin-top: 50px;
        font-size: 20px;
    }

    @media screen and (max-width: 414px) {
        margin-top: 20px;
        font-size: 20px;
    }

    @media screen and (max-width: 375px) {
        margin-top: 20px;
        font-size: 15px;
    }
`
export const AboutMeBottomTempContainer = styled.div`
    flex-grow: 3;
    @media screen and (max-width: 912px) {
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

    @media screen and (max-width: 912px) {
        /* margin-top: 10px;
        text-align: center; */
        margin-top: 10px;
        text-align: center;
        flex-direction: column;
        padding-bottom: 10px;
    }

    /* @media screen and (max-width: 688px) {
        margin-top: 10px;
        text-align: center;
        flex-direction: column;
        padding-bottom: 10px;
    } */
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
