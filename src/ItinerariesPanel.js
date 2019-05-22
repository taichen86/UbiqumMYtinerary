import React from 'react';
import ItineraryThumb from './ItineraryThumb';

const ITINERARIES = [
    {city: "barcelona", name: "Gaudi in a day"},
    {city: "New York", name: "Brooklyn pizza"}, 
    {city: "Amsterdam", name: "Red Light, Green Light"},
    {city: "Paris", name: "Champagne at the Eiffel"}
];


class ItinerariesPanel extends React.Component {



    render(){



        return (
            <div id="itineraries-panel">

               { ITINERARIES.map( itinerary => { 
                   return <ItineraryThumb cityName={itinerary.city} itineraryName={itinerary.name}></ItineraryThumb>
               } ) }


             
            </div>
        );
    }

}

export default ItinerariesPanel;