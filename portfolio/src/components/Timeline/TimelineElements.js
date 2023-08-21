import styled from 'styled-components'

export const TimelineContainer = styled.div`
    background: linear-gradient(150deg, #374785 50%, #ffff 50%);
    padding: 10px 149px 40px 140px;
    display: flex;
    gap: 10px;
    flex-direction: column;

    @media screen and (max-width: 912px) {
        padding: 40px 50px 40px 40px;
    }
`

export const TimelineTitleContainer = styled.div`
    display: flex;
    padding: 40px 20px 40px 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    border-radius: 8px;
`

export const TimelineTitleLine1 = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ffff;
    border-radius: 10px;
`

export const TimelineTitle = styled.div`
    color: #a8d0e6;
    color: #ffff;
    text-align: center;
    font-weight: 200;
    font-size: 5rem;
    margin-left: 20px;
    margin-right: 20px;
    @media screen and (max-width: 864px) {
        font-size: 4rem;
    }
    @media screen and (max-width: 414px) {
        font-size: 3rem;
    }
    @media screen and (max-width: 912px) {
        align-self: center;
    }
`

export const VerticalTimelineContainer = styled.div`
    padding-top: 40px;
    display: flex;
`

export const VerticalElementTitle = styled.h3``
export const VerticalElementCompany = styled.h5``
export const VerticalElementAbout = styled.p``
export const VerticalElementDate = styled.span`
    color: #ffff;
    &.coloredDate {
        color: #3f5371;
    }

    @media screen and (max-width: 1169px) {
        &.coloredDate {
            color: #ffff;
        }
    }
`
