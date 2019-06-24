import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/homeIcon.png';

import '../homepage.css';


function Footer(){

    return(
        <div>
            <Link to="/">
                <img id='home-btn' src={homeIcon} alt="home"></img>
            </Link>
        </div>
    );

}

export default Footer;