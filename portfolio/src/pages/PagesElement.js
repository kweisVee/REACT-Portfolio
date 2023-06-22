import styled, { keyframes } from 'styled-components'

export const PagesContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
`

export const PagesScrollButton = styled.button`
    position: fixed;
    /* align-items: center;
    justify-content: center; */
    z-index: 10;
    bottom: 45px;
    right: 40px;
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    background-color: #c7c6c1;
    opacity: ${({ isVisible }) => (isVisible ? 0.5 : 0)};
    animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 0.3s
        ease-in-out;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;

    &:hover {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        opacity: 1;
    }

    @media screen and (max-width: 870px) {
        bottom: 35px;
        right: 30px;
    }

    @media screen and (max-width: 730px) {
        bottom: 25px;
        right: 20px;
        width: 30px;
        height: 30px;
        font-size: 10px;
        opacity: 0.5;
    }
`
