import { NavContainer, NavMobileIcon, NavMenu, NavLinks } from './NavElements'
import { FaBars } from 'react-icons/fa'
import 'animate.css'

const Nav = ({ toggle }) => {
    const items = [
        {
            name: 'About Me',
            color: '#f44336',
            href: 'about',
        },
        {
            name: 'Projects',
            color: '#e91e63',
            href: 'projects',
        },
        {
            name: 'Experience',
            color: '#9c27b0',
            href: 'timeline',
        },
        {
            name: 'Blog',
            color: '#673ab7',
            href: 'blog',
        },
        {
            name: 'Contact',
            color: '#3f51b5',
            href: 'contact',
        },
    ]

    return (
        <NavContainer>
            <NavMobileIcon onClick={toggle}>
                <FaBars />
            </NavMobileIcon>
            <NavMenu>
                {items.map((item, index) => (
                    <NavLinks
                        to={item.href}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        activeClass="active"
                        offset={-80}
                    >
                        {item.name}
                    </NavLinks>
                ))}
            </NavMenu>
        </NavContainer>
    )
}

export default Nav
