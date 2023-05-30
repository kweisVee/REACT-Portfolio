import styled from 'styled-components'

export const TimelineContainer = styled.div`
    /* background-color: #faf5ef; */
    background: linear-gradient(150deg, #374785 50%, #ffff 50%);
    padding: 10px 149px 40px 140px;
    display: flex;
    gap: 10px;
    flex-direction: column;

    @media screen and (max-width: 912px) {
        padding: 40px 20px 40px 40px;
    }
`

export const TimelineTitleContainer = styled.div`
    /* background-color: #f76c6c; */
    display: flex;
    padding: 40px 20px 40px 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    border-radius: 8px;
    /* box-shadow: 3px 5px 20px darkgray; */
`

export const TimelineTitleLine1 = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ffff;
    /* background-color: #a8d0e6; */
    /* background-color: #f4a055; */
    border-radius: 10px;
`
export const TimelineTitleLine2 = styled.div`
    width: 30%;
    height: 1px;
    background-color: #ffff;
    /* background-color: #a8d0e6; */
    /* background-color: #f4a055; */
    border-radius: 10px;
`

export const TimelineTitle = styled.h1`
    color: #a8d0e6;
    color: #ffff;
    /* color: #f4a055; */
    /* color: #5d432c; */
    text-align: center;
    font-weight: 700;
    font-size: 2.5rem;
    margin-left: 20px;
    margin-right: 20px;
`

export const VerticalTimelineContainer = styled.div`
    /* background-color: #faf5ef; */
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
`
