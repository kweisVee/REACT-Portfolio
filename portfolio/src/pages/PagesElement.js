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
    width: 4%;
    height: 7%;

    &:hover {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        opacity: 1;
    }
`
