import React from 'react';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';


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

      handleSelection = (value, event) => { 
          console.log( 'handleSelection: ', value, event );
       }

}

export default MenuButton;
