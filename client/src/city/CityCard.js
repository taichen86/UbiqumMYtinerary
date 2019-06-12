import React from 'react';
import '../homepage.css';


class CityCard extends React.Component {

    render(){

        const cardStyle = {
            height: '15%',
            backgroundImage: 'url(city-' + this.props.city.city + '.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          };

        return (
                <div id="city-card">
                    <div style={cardStyle}>
                        <p>{this.props.city.imgURL}</p>
                        <h4>{this.props.city.city}</h4>
                        <h6>{this.props.city.country}</h6>
                    </div>
                </div>
        );
    }

    // handleClick = (city, e) => {
    //     console.log( 'clicked event ' , e );
    //     console.log( 'clicked city ' , city );
    //     this.props.history.push('/itineraries')
    // }


}


export default CityCard;