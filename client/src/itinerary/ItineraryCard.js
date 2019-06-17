import React from 'react';
import '../homepage.css';


class ItineraryCard extends React.Component {


    constructor( props ){
        super( props );
        this.state = {
            isExpanded: false,
            toggleButtonText: 'view all'
        };
        // this.expandView = this.expandView.bind( this );
        // this.collapseView = this.collapseView.bind( this );
        this.toggleView = this.toggleView.bind( this );
    }

    toggleView(){

        // this.setState({ isExpanded: !this.state.isExpanded });
        if( this.state.isExpanded ){
            this.setState({ isExpanded: false, toggleButtonText: 'view all'})
        }else{
            this.setState({ isExpanded: true, toggleButtonText: 'close'})
        }

    }

    // expandView(){
    //     console.log( 'expand view' );
    //     this.setState({ isExpanded: true });
    // }

    // collapseView(){
    //     console.log( 'collapse view' );
    //     this.setState({ isExpanded: false }); 
    // }

 

    render(){

        const hashtags = this.props.itinerary.hashtag.forEach( tag => {
            return <label>#{tag}</label>
        });

        const toggleButtonText = this.isExpanded ? 'close' : 'view all';

        return (
        <div id="itinerary-card">

                <div className="user-avatar">
                    <img src={process.env.PUBLIC_URL + '/ChicaHambre.png'} alt='user-avatar'></img>
                    <label>username</label>
                </div>
                <div className="details">
                    <h4>{this.props.itinerary.title}</h4>
                    <h4>{this.props.itinerary.city}</h4>
                    <div className="stats" >
                        <label>rating: {this.props.itinerary.rating}/5</label>
                        <label>days: {this.props.itinerary.duration}</label>
                        <label>cost: {this.props.itinerary.duration}</label>
                    </div>
                    
                    <div>                        
                        <label>{hashtags}</label>
                    </div>

                </div>
                
                { this.state.isExpanded ? 
                <div>'EXPANDED'</div> 
                
                :
                
                
                'NOT EXPANDED' }

            <div className="toggle" onClick={this.toggleView}>{this.state.toggleButtonText}</div>
            </div>                

        );
    }




}


export default ItineraryCard;