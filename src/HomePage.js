import React from 'react';
import Button from './Button';
import ItinerariesPanel from './ItinerariesPanel';

import './homepage.css';


class HomePage extends React.Component {

    render(){
        return (

            <div>
                
                
                <Button id="account-btn" imgURL="homeIcon.png" altText="Account"></Button>
                <Button id="home-btn" imgURL="homeIcon.png" altText="Home"></Button>

                <Button id="next-btn" imgURL="circledArrow.png" altText="Next"></Button>

                <h2>MYtinerary</h2>
                <ItinerariesPanel></ItinerariesPanel>
                
                
                
                </div>
        );
    }

}

export default HomePage;
