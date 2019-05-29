import React from 'react';
import './homepage.css';

class CityCard extends React.Component {

    render(){
        return (
            <div id="city-card">
               <h4>{this.props.city}</h4>
               <h6>{this.props.country}</h6>
            </div>
        );
    }

}

export default CityCard;