import React from 'react';
import './homepage.css';

class CityCard extends React.Component {

    render(){

        const cardStyle = {
            height: '15%',
        //    backgroundImage: 'url(city-barcelona.jpg)',
            backgroundImage: 'url(' + 'city-' + this.props.city.city + '.jpg' + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          };

        return (
            <div id="city-card">
                {/* <img src={this.props.city.imgURL}></img> */}
                <div style={cardStyle}>
                    <p>{this.props.city.imgURL}</p>
                    <h4>{this.props.city.city}</h4>
                    <h6>{this.props.city.country}</h6>
                </div>

            </div>
        );
    }

}




export default CityCard;