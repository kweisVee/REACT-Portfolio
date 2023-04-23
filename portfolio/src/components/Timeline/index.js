import React from 'react'
import { FaDesktop, FaGraduationCap } from 'react-icons/fa'
import timelineInfo from './timelineInfo'
import {
    TimelineContainer,
    TimelineTitle,
    VerticalTimelineContainer,
    VerticalElementTitle,
    VerticalElementCompany,
    VerticalElementAbout,
} from './TimelineElements'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Timeline = () => {
    let workIconStyles = { background: '#3f5371' }
    let schoolIconStyles = { background: '#f7b26d' }
    let workContentStyles = { background: '#3f5371', color: 'white' }
    let schoolContentStyles = { background: '#f7b26d', color: 'white' }

    return (
        <TimelineContainer id="timeline">
            <TimelineTitle>My Timeline</TimelineTitle>
            <VerticalTimelineContainer>
                <VerticalTimeline lineColor="#9eafb6">
                    {timelineInfo.map((element) => {
                        let isWorkIcon = element.icon === 'work'
                        return (
                            <VerticalTimelineElement
                                key={element.id}
                                date={element.date}
                                dateClassName="date"
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
                                        ? { borderRight: '7px solid #3f5371' }
                                        : { borderRight: '7px solid #f7b26d' }
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
