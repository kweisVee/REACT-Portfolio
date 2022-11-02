import React from 'react'
import { 
    ContactContainer, 
    ContactTitleContainer,
    ContactMeTitle,
    ContactH5,
    ContactFormContainer,
    ContactFormNameContainer,
    ContactFirstNameInput,
    ContactLastNameInput,
    ContactEmailInput,
    ContactMessageInput
} from './ContactElements'

const Contact = () => {
  return (
    <ContactContainer>
        <ContactTitleContainer>
            <ContactMeTitle>
                CONTACT
            </ContactMeTitle>
            <ContactH5>
                Available for work. Get in touch.
            </ContactH5>
        </ContactTitleContainer>
        <ContactFormContainer>
            <ContactFormNameContainer>
                <ContactFirstNameInput placeholder='First Name'></ContactFirstNameInput>
                <ContactLastNameInput placeholder='Last Name'></ContactLastNameInput>
            </ContactFormNameContainer>
            <ContactEmailInput placeholder='Email'></ContactEmailInput>
            <ContactMessageInput placeholder='Write your message...'></ContactMessageInput>
        </ContactFormContainer>
    </ContactContainer>
  )
}

export default Contact