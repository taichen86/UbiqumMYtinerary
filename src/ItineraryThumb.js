import React from 'react';

class ItineraryThumb extends React.Component {

    render(){
        return (
            <div>
               <h4>{this.props.cityName}</h4>
               <h6>{this.props.itineraryName}</h6>
            </div>
        );
    }

}

export default ItineraryThumb;