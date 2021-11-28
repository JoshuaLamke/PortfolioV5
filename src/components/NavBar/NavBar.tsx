import React, { useState } from 'react';
import Hamburger from './Hamburger';
import Logo from './Logo';
import Menu from './Menu';
import MenuLink from './MenuLink';
import Nav from './Nav';

interface Props {
    color?: string;
    logoText?: string;
    routes: {title: string, to: string}[];
    routesColor?: string;
}

const NavBar: React.FC<Props> = ({color, logoText, routes, routesColor}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Nav>
            <Logo link="#home">
                Joshua<span>Lamke</span>
            </Logo>
            <Hamburger setOpened={setIsOpen} opened={isOpen} />
            <Menu isOpen={isOpen}>
                {routes.map((route, index) => {
                    return (
                        <MenuLink link={route.to} setIsOpen={setIsOpen}>
                            <span className="me-1">0{index+1}.</span>{route.title.toUpperCase()}
                        </MenuLink>
                    )
                })}
            </Menu>
        </Nav>
    )
}

export default NavBar;