import React from 'react';
import {connect} from 'react-redux';

import {fetchAllActivities} from '../actions/activityActions';
import ActivityCard from './ActivityCard';

import '../homepage.css';


class ItineraryCard extends React.Component {


    constructor( props ){
        super( props );
        this.state = {
            isExpanded: false,
            toggleButtonText: 'view all',
            comment: null
        };
        this.toggleView = this.toggleView.bind( this );
    }

    toggleView(){

        if( this.state.isExpanded ){
            this.setState({ isExpanded: false, toggleButtonText: 'view all'})
        }else{
            // TODO: fetch activities
            // console.log( this.props );
            // console.log( this.props.itinerary );
            this.props.fetchAllActivities( this.props.itinerary.title );
            this.setState({ isExpanded: true, toggleButtonText: 'close'})
        }

    }

    handleChange = ( input ) => {
        console.log( 'handleChange: ', input.target.value );
        this.state.comment = input.target.value;
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          console.log('enter press here! ')
          // ACTION - add comment

          // reset input

        }
      }


    render(){
        console.log( 'itinerary props: ', this.props );

        const hashtags = this.props.itinerary.hashtag.forEach( tag => {
            return <label>#{tag}</label>
        });


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
                <div>
                    

                    {/* <div className="card-slider">
                        <div className="card-slider-wrapper">
                        { this.props.activities.map( activity => 
                            <ActivityCard activity={activity}>
                            </ActivityCard> ) }
                        </div>
                    </div> */}
                    <input type="text" placeholder="comment..." id="comment"
                    onChange={this.handleChange} onKeyPress={this.handleKeyPress}></input>
                </div> 
                
                :
                
                
                <div></div> }

            <div className="toggle" onClick={this.toggleView}>{this.state.toggleButtonText}</div>
            </div>                

        );
    }




}

const mapStateToProps = ( state ) => {
    console.log( "updated state" , state );
    return {
        activities: state.activitiesReducer.activities,
        isLoading: state.activitiesReducer.isLoading,
        error: state.activitiesReducer.error
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        fetchAllActivities : ( itinerary ) => dispatch( fetchAllActivities( itinerary ) ),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( ItineraryCard )