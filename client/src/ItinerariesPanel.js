import React from 'react';

import './homepage.css';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


// const ITINERARIES = [
//     {city: "barcelona", name: "Gaudi in a day"},
//     {city: "New York", name: "Brooklyn pizza"}, 
//     {city: "Amsterdam", name: "Red Light, Green Light"},
//     {city: "Paris", name: "Champagne at the Eiffel"}
// ];

// const content = [
//     { city: "andorra", title: "andorra retreat", image: "/city-andorra.jpg"},
//     { city: "munich", title: "andorra retreat", image: "/city-munich.jpg"},
//     { city: "copenhagen", title: "andorra retreat", image: "/city-copenhagen.jpg"},
//     { city: "lucerne", title: "andorra retreat", image: "/city-lucerne.jpg"},
//     { city: "salzburg", title: "andorra retreat", image: "/city-salzburg.jpg"},
//     { city: "bologna", title: "andorra retreat", image: "/city-bologna.jpg"},
//     { city: "luxembourg", title: "andorra retreat", image: "/city-luxembourg.jpg"},
//     { city: "dubrovnik", title: "andorra retreat", image: "/city-dubrovnik.jpg"},
//     { city: "strasbourg", title: "andorra retreat", image: "/city-strasbourg.jpg"},
//     { city: "vienna", title: "andorra retreat", image: "/city-vienna.jpg"},
//     { city: "berlin", title: "andorra retreat", image: "/city-berlin.jpg"},
//     { city: "madrid", title: "andorra retreat", image: "/city-madrid.jpg"}

// ];


let contentx4 = [];
// console.log( "initialize contentx4" );
// orderCitiesby4();
// console.log( "content x 4 ... " + contentx4 );

// function orderCitiesby4(){
//     console.log( "order cities by 4" );
//     const numOfCitiesPerSlide = 4;
//     let cities = [];
//     content.forEach( city => {
//         console.log( "do city " + city.city );
//         cities.push( city );
//         if( cities.length == numOfCitiesPerSlide ){
//             contentx4.push( cities );
//             cities = [];
//             console.log( cities );
//         }
//     });
// }



class ItinerariesPanel extends React.Component {

    render(){



        return (
            <div>                
                <h6>Popular MYtineraries</h6>
                <div id="itineraries-panel">

                <Slider>
                    {contentx4.map((article, index) => 
                    <div key={index}>

                        <div className="flex-container">
                    
                    <div className="slider-container">
                        <img src={article[0].image} alt={article[0].city} className="full-width"></img>
                        <div className="slider-textblock">
                            {article[0].city}
                            {article[0].title}
                        </div>
                    </div>

                    <div className="slider-container">
                        <img src={article[1].image} alt={article[1].city} className="full-width"></img>
                        <div className="slider-textblock">
                            {article[1].city}
                            {article[1].title}
                        </div>
                    </div>

                    <div className="slider-container">
                        <img src={article[2].image} alt={article[2].city} className="full-width"></img>
                        <div className="slider-textblock">
                            {article[2].city}
                            {article[2].title}
                        </div>
                    </div>

                    <div className="slider-container">
                        <img src={article[3].image} alt={article[3].city} className="full-width"></img>
                        <div className="slider-textblock">
                            {article[3].city}
                            {article[3].title}
                        </div>
                    </div>
                    

                    </div>
                    

                    </div>)}
                </Slider>




                
                </div>
            </div>

        );
    }

}

export default ItinerariesPanel;


// { ITINERARIES.map( itinerary => { 
//     return <ItineraryThumb cityName={itinerary.city} itineraryName={itinerary.name}></ItineraryThumb>
// } ) }

                    