import React from 'react';

import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';

export const loginMenu = { 
  items: [ 'sign up', 'login', 'logout', 'settings'],
  url: '/icon-user-32.png' };
export const mainMenu = {
  items: [ 'home', 'cities', 'itineraries', 'activities'],
  url: '/icon-menu-32.png' };

class MenuButton extends React.Component{

    constructor( props ){
        super( props );
    }

    render( ) {
        const menuItems = this.props.menuItemWords.map((word, i) => {
          return (
            <li key={i}>
              <MenuItem className='MyMenuButton-menuItem'>
                {word}
              </MenuItem>
            </li>
          );
        });
    
        return (
          <Wrapper
            className='MyMenuButton'
            onSelection={this.handleSelection}>
            <Button className='MyMenuButton-button'>
              <img src={this.props.imgURL}></img>
            </Button>
            <Menu className='MyMenuButton-menu'>
              <ul>{menuItems}</ul>
            </Menu>
          </Wrapper>
        );
      }

      handleSelection = (value) => { 
          console.log( 'handleSelection: ', value );
    
       }

}

export default MenuButton;
