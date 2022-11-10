import styled from 'styled-components'
// import backgroundImg from '../../images/background.jpg'

export const ProjectsContainer = styled.div`
   /* @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap'); */
    /* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap'); */
    font-family: 'Montserrat', sans-serif;
    /* height: 100vh; */
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F2E5D9;
    padding: 40px 30px;

    /* padding: 100px 200px; */
    /* @media screen and (max-width: 1080px) {
        height: 108vh;
    }

    @media screen and (max-width: 1080px) {
        height: 125vh;
    }

    @media screen and (max-width: 970px) {
        height: 150vh;
    }

    @media screen and (max-width: 768px) {
        height: 190vh;
    }

    @media screen and (max-width: 540px) {
        height: 240vh;
    }

    @media screen and (max-width: 280px) {
        height: 260vh;
    } */
`

export const ProjectsTitleContainer = styled.div``
export const ProjectsTitle = styled.div`
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 30px;
    align-items: center;
    text-align: center;
    color: #3f5371;
`

export const ProjectsWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ProjectsCard = styled.div`
    background: #fff;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 300px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ProjectsIcon = styled.img`
    height: 160px; 
    width: 160px; 
    margin-bottom: 10px;
`

export const ProjectName = styled.div`
    font-weight: 600;
    font-size: 1rem; 
    margin-bottom: 10px;
`

export const ProjectDesc = styled.p`
    font-size: 12px; 
    text-align: center;
`
