import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    /* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap'); */
    font-family: 'Montserrat', sans-serif;
    background: #de5542;
    /* background: ${({ scrollNav }) => (scrollNav ? '#F2E5D9' : '#de5542')}; */
    /* background: #f7b26d; */
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 8px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    /* max-width: 1100px; */
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 850px) {
        color: #fff;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 850px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    &:hover {
        /* border-bottom: 3px solid #3f5371; */
    }
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    /* border-bottom: 3px solid #3f5371; */

    &.active {
        /* border-bottom: 3px solid #3f5371; */
        background-color: #3f5371;
    } 

    /* &:hover {
        border-bottom: 3px solid #3f5371;
    } */
`
