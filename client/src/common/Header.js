import React from 'react';

import MenuButton from './MenuButton';
import { loginMenu, mainMenu } from './MenuButton';

const Header = () => {
    return(
        <div id="header-bar">
            <MenuButton menuItemWords={loginMenu.items} imgURL={loginMenu.url} ></MenuButton>
            <MenuButton menuItemWords={mainMenu.items} imgURL={mainMenu.url} ></MenuButton>
        </div>
    );
}

export default Header;