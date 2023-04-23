import styled from 'styled-components'

export const TimelineContainer = styled.div`
    background-color: #faf5ef;
    padding: 40px 149px 40px 140px;
    display: flex;
    gap: 10px;
    flex-direction: column;

    @media screen and (max-width: 912px) {
        padding: 40px 20px 40px 40px;
    }
`

export const TimelineTitle = styled.h1`
    color: #d59c6e;
    /* color: #5d432c; */
    text-align: center;
    font-weight: 700;
    font-size: 2.5rem;
`

export const VerticalTimelineContainer = styled.div`
    background-color: #faf5ef;
    padding-top: 40px;
`

// export const FaDesktop = styled.image`
//     color: #ffff;
//     align-self: center;
//     justify-content: center;
// `
export const VerticalElementTitle = styled.h3``
export const VerticalElementCompany = styled.h5``
export const VerticalElementAbout = styled.p``
