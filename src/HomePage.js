import React from 'react';
import Button from './Button';
import ItinerariesPanel from './ItinerariesPanel';

class HomePage extends React.Component {

    render(){
        return (

            <div>
                
                <Button imgURL="/img/homeIcon.png" altText="Account"></Button>
                <Button imgURL="/img/homeIcon.png" altText="Home"></Button>

                <Button imgURL="/img/circledArrow.png" altText="Next"></Button>

                <h2>MYtinerary</h2>
                <ItinerariesPanel></ItinerariesPanel>
                
                
                
                </div>
        );
    }

}

export default HomePage;
