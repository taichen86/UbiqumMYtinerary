import React from 'react';
import './homepage.css';

class ItineraryThumb extends React.Component {

    render(){
        return (
            <div id="itinerary-card">
               <h4>{this.props.cityName}</h4>
               <h6>{this.props.itineraryName}</h6>
            </div>
        );
    }

}

export default ItineraryThumb;