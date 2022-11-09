import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
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
    ContactMessageInput, 
    ContactMessageButton
} from './ContactElements'

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        try{
            emailjs.sendForm('service_dvo1lhk', 'template_as2b6ob', form.current, '5WQ0gQU8qrIpI2E7o')
            .then((result) => {
              console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        } catch(error) {
            console.log("error occured");
        }
        e.target.reset()
    };
    return (
        <ContactContainer id="contact">
            <ContactTitleContainer>
                <ContactMeTitle>
                    CONTACT
                </ContactMeTitle>
                <ContactH5>
                    Available for work. Get in touch.
                </ContactH5>
            </ContactTitleContainer>
            <ContactFormContainer ref={form} onSubmit={sendEmail}>
                <ContactFormNameContainer>
                    <ContactFirstNameInput placeholder='First Name' name='firstName'></ContactFirstNameInput>
                    <ContactLastNameInput placeholder='Last Name' name='lastName'></ContactLastNameInput>
                </ContactFormNameContainer>
                <ContactEmailInput placeholder='Email' name='email'></ContactEmailInput>
                <ContactMessageInput placeholder='Write your message...' name='message'></ContactMessageInput>
                <ContactMessageButton type='submit' value='send'>Send Message</ContactMessageButton>
            </ContactFormContainer>
        </ContactContainer>
    )
}

export default Contact