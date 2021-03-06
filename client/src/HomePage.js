import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';



import './homepage.css';


class HomePage extends React.Component {

    render(){
        return (

            <div id="homepage">
        
                <div id="nav-space"></div>
                
            
                <h1 className="text-align-centered">MYtinerary</h1>
                <p className="text-align-centered">Find your perfect trip, designed by insiders who know and love their cities.</p>
              
                <Link to="/cities">
                    <Button id="next-btn" imgURL="circledArrow.png" altText="Next"></Button>
                </Link>
                
            </div>
        );
    }
}

export default HomePage;
