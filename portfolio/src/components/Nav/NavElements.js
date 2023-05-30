import styled from 'styled-components'
import { Link } from 'react-scroll'

export const NavBody = styled.nav`
    font-family: 'Montserrat', sans-serif;
    background: white;
    height: 80px;
    display: flex;
    font-size: 1.5rem;
    position: sticky;
    top: 0;
    z-index: 10;
    padding-left: 20%;
    padding-right: 20%;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavMenu = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    border-bottom: 1px solid #eee;
`

export const NavLinks = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: #374785;
    letter-spacing: 0.05em;
    font-size: 12px;
    margin: 5px 0;
    &.active {
        color: #fff;
        border-radius: 20px; /* Adjust the value to control the pill shape */
        background-image: linear-gradient(
            to bottom right,
            #24305e,
            #2e3b6b
        ); /* Adjust the color as needed */
        padding: 10px 10px; /* Adjust the padding to control the size of the pill */
        transition: background-color 0.3s ease-in-out;
    }
`
