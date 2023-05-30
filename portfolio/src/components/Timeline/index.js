import React from 'react'
import { FaDesktop, FaGraduationCap } from 'react-icons/fa'
import timelineInfo from './Data'
import {
    TimelineContainer,
    TimelineTitleContainer,
    TimelineTitleLine1,
    TimelineTitle,
    VerticalTimelineContainer,
    VerticalElementTitle,
    VerticalElementCompany,
    VerticalElementAbout,
    VerticalElementDate,
} from './TimelineElements'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const generateDateClassname = (element) => {
    if (element.coloredDate) {
        return 'coloredDate'
    } else {
        return 'whiteDate'
    }
}

const Timeline = () => {
    let workIconStyles = { background: '#f76c6c' }
    let schoolIconStyles = { background: '#3f5371' }
    let workContentStyles = { background: '#f76c6c', color: 'white' }
    let schoolContentStyles = { background: '#3f5371', color: 'white' }

    return (
        <TimelineContainer id="timeline">
            <TimelineTitleContainer>
                <TimelineTitleLine1></TimelineTitleLine1>
            </TimelineTitleContainer>
            <TimelineTitle>My Experience</TimelineTitle>
            <VerticalTimelineContainer>
                <VerticalTimeline lineColor="#f4a055">
                    {timelineInfo.map((element) => {
                        let isWorkIcon = element.icon === 'work'
                        return (
                            <VerticalTimelineElement
                                key={element.id}
                                date={
                                    <VerticalElementDate
                                        className={generateDateClassname(
                                            element
                                        )}
                                    >
                                        {element.date}
                                    </VerticalElementDate>
                                }
                                iconStyle={
                                    isWorkIcon
                                        ? workIconStyles
                                        : schoolIconStyles
                                }
                                icon={
                                    isWorkIcon ? (
                                        <FaDesktop color="#ffff" />
                                    ) : (
                                        <FaGraduationCap color="#ffff" />
                                    )
                                }
                                contentStyle={
                                    isWorkIcon
                                        ? workContentStyles
                                        : schoolContentStyles
                                }
                                contentArrowStyle={
                                    isWorkIcon
                                        ? { borderRight: '7px solid #f76c6c' }
                                        : { borderRight: '7px solid #3f5371' }
                                }
                            >
                                <VerticalElementTitle>
                                    {element.title}
                                </VerticalElementTitle>
                                <VerticalElementCompany>
                                    {element.company}
                                </VerticalElementCompany>
                                <VerticalElementAbout>
                                    {element.about}
                                </VerticalElementAbout>
                            </VerticalTimelineElement>
                        )
                    })}
                </VerticalTimeline>
            </VerticalTimelineContainer>
        </TimelineContainer>
    )
}

export default Timeline
