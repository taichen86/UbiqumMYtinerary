import React from 'react';
import {connect} from 'react-redux';
import {fetchAllItineraries} from '../actions/itineraryActions';
import ItineraryCard from './ItineraryCard';


class Itineraries extends React.Component {

    componentDidMount(){
        console.log( this.props );
        console.log( "Itineraries did mount, call fetch all itineraries action")
        this.props.fetchAllItineraries( this.props.match.params.city );
    }

    render(){

        console.log( "render: ", this.props.itineraries );
        const itinerariesToShow = this.props.itineraries.map( itinerary => {
            return <ItineraryCard itinerary={itinerary} ></ItineraryCard>
        });
        console.log( "itinerariesToShow" , itinerariesToShow );

        return(
            <div>

               <h3>Available MYtineraries:</h3>
               <label>{this.props.isLoading ? 'Fetching data...' : ''}</label>
               <label> Error == {String(this.props.error)}</label>
                {itinerariesToShow}
               
            </div>
        );
    }
}


const mapStateToProps = ( state ) => {
    console.log( "updated state" , state );
    return {
        itineraries: state.itinerariesReducer.itineraries,
        isLoading: state.itinerariesReducer.isLoading,
        error: state.itinerariesReducer.error
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        fetchAllItineraries : ( city ) => dispatch( fetchAllItineraries( city ) )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Itineraries )