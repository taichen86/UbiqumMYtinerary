import React from 'react';
import Button from './Button';
import ItinerariesPanel from './ItinerariesPanel';
import { Link } from 'react-router-dom';

import './homepage.css';
import MenuButton from './common/header';




const menuItems = [ 'home', 'cities', 'itineraries', 'activities'];

class HomePage extends React.Component {


    render(){
        return (

            <div id="homepage">
                
                <div id="top-nav">
                <MenuButton menuItemWords={menuItems} imgURL='/icon-user.png'></MenuButton>
                {/* <Button id="account-btn" imgURL="homeIcon.png" altText="Account"></Button>
                <Button id="home-btn" imgURL="homeIcon.png" altText="Home"></Button> */}
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
