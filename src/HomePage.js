import React from 'react';
import Button from './Button';
import ItinerariesPanel from './ItinerariesPanel';

import './homepage.css';



class HomePage extends React.Component {

    render(){
        return (

            <div id="homepage">
                
                <div id="top-nav">
                <Button id="account-btn" imgURL="homeIcon.png" altText="Account"></Button>
                <Button id="home-btn" imgURL="homeIcon.png" altText="Home"></Button>
                </div>
                <div id="nav-space"></div>
                
            
                <h1 class="text-align-centered">MYtinerary</h1>
                <p class="text-align-centered">Find your perfect trip, designed by insiders who know and love their cities.</p>
              
                <Button id="next-btn" imgURL="circledArrow.png" altText="Next"></Button>

                <ItinerariesPanel></ItinerariesPanel>
                
                
                
            </div>
        );
    }

}

export default HomePage;
