import styled from 'styled-components'
// import backgroundImg from '../../images/background.jpg'

export const ProjectsContainer = styled.div`
    background: linear-gradient(150deg, #ffff 50%, #374785 50%);
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 30px;

    @media screen and (max-width: 912px) {
        height: 100%;
    }
`

export const ProjectImg = styled.img`
    max-width: 80%;
    height: auto;
    border-radius: 20px;
    @media screen and (max-width: 912px) {
        max-width: 90%;
    }
`

export const ProjectsTitleContainer = styled.div``

export const ProjectsWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 30px;
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
