import styled from 'styled-components';

export const ResumeContainer = styled.div`
    background-color: white;
    padding: 40px 149px 40px 140px;
    display: flex;
    gap: 10px;
    flex-direction: column;

    @media screen and (max-width: 970px) {
        padding: 40px 40px 40px 40px;
    }
`

export const ResumeTitle = styled.h1`
    color: #d59c6e;
    font-weight: 700;
    font-size: 2.5rem;
`
export const ResumeBodyContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`
export const ResumeImageContainer = styled.div`
    display: flex;
    flex: 0.4;
`

export const ResumeImage = styled.img`
    height: 400px;
    width: 300px;
`

export const ResumeWorkEducationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 10px 0px 10px 30px;
`

export const ResumeDetailsContainer = styled.div`
    flex: 0.6;
    width: 100%;
`

export const ResumeDetailsTypeTitle = styled.h2`
    margin-bottom: 30px;
    font-size: 2rem;
`

export const ResumeWorkDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
`

export const ResumeWorkDetailsTopContainer = styled.div`
    display: flex; 
    justify-content: space-between;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        gap: 10px;
    }
`
export const ResumeJobTitle = styled.h3``
export const ResumeJobDates = styled.div`
    color: #d59c6e;
`
export const ResumeWorkDetailsBottomContainer = styled.div`
    display: flex; 
    flex-direction: column;
    gap: 10px;
    color: #676767;
`
export const ResumeWorkCompany = styled.div`
    display: flex;
    gap: 8px;
`
export const ResumeWorkIcon = styled.div`
    font-size: 16px;
    color: #cccdc6;
`
export const ResumeWorkDescription = styled.div``