import React from 'react';
import '../homepage.css';


class ItineraryCard extends React.Component {

    render(){

        return (
                <div id="city-card">
                    <h4>{this.props.itinerary.title}</h4>
                </div>
        );
    }




}


export default ItineraryCard;