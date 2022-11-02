import React from 'react'
import { FaClipboardList, FaLaughBeam, FaPencilAlt } from 'react-icons/fa'
import { 
  WorkContainer, 
  WorkInfoContainer, 
  WorkExperienceImageDetailsContainer,
  WorkExperienceContainer,
  WorkExperienceTitle,
  WorkImageContainer, 
  WorkImageDiv, 
  WorkImage, 
  WorkCompaniesContainer,
  WorkDetailsContainer,
  WorkDetailsCompanyName, 
  WorkDetailsRole, 
  WorkDetailsList,
  WorkDetailsItem
} from './WorkElements'

const Work = () => {
  return (
    <WorkContainer>
      <WorkInfoContainer>
        <WorkExperienceImageDetailsContainer>
          <WorkExperienceTitle>
            WORK EXPERIENCE
          </WorkExperienceTitle>
          <WorkCompaniesContainer>
            <WorkExperienceContainer>
              <WorkImageContainer>
                <WorkImageDiv> 
                  <WorkImage>
                    <FaClipboardList />
                  </WorkImage>
                </WorkImageDiv>
              </WorkImageContainer>
              <WorkDetailsContainer>
                <WorkDetailsCompanyName>LeapFroggr, Inc.</WorkDetailsCompanyName>
                <WorkDetailsRole>Software Engineer Intern</WorkDetailsRole>
                <WorkDetailsList>
                  <WorkDetailsItem>
                    Worked on Frontend for the iOS application with the use of Swift, Texture, Redux, RxSwift, and RxCocoa
                  </WorkDetailsItem>
                  <WorkDetailsItem>
                    Built 10 components (atoms, molecules, and organisms) and applied them to the final frontend design of the application
                  </WorkDetailsItem>
                  <WorkDetailsItem>
                    Developed Backend code from the ground up with the use of Mongoose, Node.js, and Express
                  </WorkDetailsItem>
                  <WorkDetailsItem>
                    Built 20 API Endpoints that are to be used by the application with the use of GET, POST, PUT, and DELETE
                  </WorkDetailsItem>
                </WorkDetailsList>
              </WorkDetailsContainer>
            </WorkExperienceContainer>

            <WorkExperienceContainer>
              <WorkImageContainer>
                <WorkImageDiv> 
                  <WorkImage>
                    <FaLaughBeam />
                  </WorkImage>
                </WorkImageDiv>
              </WorkImageContainer>
              <WorkDetailsContainer>
                <WorkDetailsCompanyName>MoodMe</WorkDetailsCompanyName>
                <WorkDetailsRole>Backend Engineer Intern</WorkDetailsRole>
                <WorkDetailsList>
                  <WorkDetailsItem>
                  Worked on a full-scale project as being the one in charge of leading the backend team with tasks covering APIs with three-tiered architecture, using serverless, typescript, AWS, and MySQL.
                  </WorkDetailsItem>
                  <WorkDetailsItem>
                  Built 10 API Endpoints for CRUD operations using OOP concepts for the accounts and applications registration services.
                  </WorkDetailsItem>
                  {/* <WorkDetailsItem>
                    Developed Backend code from the ground up with the use of Mongoose, Node.js, and Express
                  </WorkDetailsItem>
                  <WorkDetailsItem>
                    Built 20 API Endpoints that are to be used by the application with the use of GET, POST, PUT, and DELETE
                  </WorkDetailsItem> */}
                </WorkDetailsList>
              </WorkDetailsContainer>
            </WorkExperienceContainer>
          </WorkCompaniesContainer>
        </WorkExperienceImageDetailsContainer>

        <WorkExperienceImageDetailsContainer>
          <WorkExperienceTitle>
            EDUCATION HISTORY
          </WorkExperienceTitle>
          <WorkCompaniesContainer>
            <WorkExperienceContainer>
              <WorkImageContainer>
                <WorkImageDiv> 
                  <WorkImage>
                    <FaPencilAlt />
                  </WorkImage>
                </WorkImageDiv>
              </WorkImageContainer>
              <WorkDetailsContainer>
                <WorkDetailsCompanyName>De La Salle University - Manila</WorkDetailsCompanyName>
                <WorkDetailsRole>Bachelor of Science in Computer Science major in Software Technology</WorkDetailsRole>
                <WorkDetailsList>
                  <WorkDetailsItem>
                    Consistent Dean's Lister, Running for Latin Honors
                  </WorkDetailsItem>
                  <WorkDetailsItem>
                    GPA of 3.7/4.0
                  </WorkDetailsItem>
                  <WorkDetailsItem>
                  LinkedIn: <a style={{color:'#F2E5D9'}} href='https://www.linkedin.com/in/chrissy-vinco-0898b61ba/' target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/chrissy-vinco-0898b61ba/</a>
                  </WorkDetailsItem>
                </WorkDetailsList>
              </WorkDetailsContainer>
            </WorkExperienceContainer>
          </WorkCompaniesContainer>
        </WorkExperienceImageDetailsContainer>

        
      </WorkInfoContainer>
    </WorkContainer>
  )
}

export default Work