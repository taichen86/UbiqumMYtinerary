import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

import MenuButton from './common/MenuButton';
import './homepage.css';


const loginMenu = { 
    items: [ 'sign up', 'login', 'logout', 'settings'],
    url: '/icon-user-32.png' };
const mainMenu = {
    items: [ 'home', 'cities', 'itineraries', 'activities'],
    url: '/icon-menu-32.png' };

class HomePage extends React.Component {


    render(){
        return (

            <div id="homepage">
                
                <div id="header-bar">
                    <MenuButton menuItemWords={loginMenu.items} imgURL={loginMenu.url} ></MenuButton>
                    <MenuButton menuItemWords={mainMenu.items} imgURL={mainMenu.url} ></MenuButton>
                </div>

                <div id="nav-space"></div>
                
            
                <h1 class="text-align-centered">MYtinerary</h1>
                <p class="text-align-centered">Find your perfect trip, designed by insiders who know and love their cities.</p>
              
                <Link to="/cities"><Button id="next-btn" imgURL="circledArrow.png" altText="Next"></Button></Link>

                {/* <ItinerariesPanel></ItinerariesPanel> */}
                
                
                
            </div>
        );
    }

}

export default HomePage;
