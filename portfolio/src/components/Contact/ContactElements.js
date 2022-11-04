import styled from 'styled-components'

export const ContactContainer = styled.div`
    background: #F2E5D9;
    display: flex;
    justify-content: space-evenly;
    justify-items: center;
    align-items: center;
    padding: 180px 30px;
    /* height: 80vh; */
    @media screen and (max-width: 970px) {
        flex-direction: column;
        gap: 50px;
        padding: 100px 30px;
    }

    @media screen and (max-width: 540px) {
        padding: 100px 10px;
    }
`
export const ContactTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
export const ContactMeTitle = styled.h2``
export const ContactH5 = styled.h5``

export const ContactFormContainer = styled.form`
    background-color: white;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    width: 45%;
    flex-direction: column;
    border-radius: 20px;
    gap: 20px;
    @media screen and (max-width: 970px) {
        width: 70%;
    }

    @media screen and (max-width: 540px) {
        width: 80%;
    }
`

export const ContactFormNameContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-evenly;
`
export const ContactFirstNameInput = styled.input`
    border: 0;
    outline: 0;
    width: 180px;
    padding-bottom: 5px;
    border-bottom: 1.5px solid #877f7d;
    width: 100%;
    /* background-color: #ebccab; */
    ::placeholder {
       color: #444444;
   }
`
export const ContactLastNameInput = styled.input`
    border: 0;
    outline: 0;
    width: 180px;
    padding-bottom: 5px;
    border-bottom: 1.5px solid #877f7d;
    width: 100%;
    /* background-color: #ebccab; */
    ::placeholder {
       color: #444444;
   }
`

export const ContactEmailInput = styled.input`
    border: 0;
    outline: 0;
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1.5px solid #877f7d;
    /* background-color: #ebccab; */
    ::placeholder {
       color: #444444;
   }
`

export const ContactMessageInput = styled.textarea`
    border: 1.5px solid #877f7d;
    outline: 0;
    width: 100%;
    height: 150px;
    padding: 10px;
    margin-top: 5px;
    /* border-bottom: 1px solid #de5542; */
    /* background: #ebccab; */
    ::placeholder {
       color: #444444;
   }
`

export const ContactMessageButton = styled.button`
    width: 100%; 
    background-color: #de5542;
    color: white;
    padding: 5px;
    border: 0px;
    border-radius: 10px;
`