import React from 'react';
import {connect} from 'react-redux';
import {fetchAllItineraries} from './actions/itineraryActions';
import CityCard from './city/CityCard';


class Itineraries extends React.Component {

    componentDidMount(){
        console.log( this.props );
        console.log( "Itineraries did mount, call fetch all itineraries action")
        this.props.fetchAllItineraries();
    }

    render(){
        return(
            <div>
            {/* <CityCard city={this.props.city} ></CityCard> */}
               <h3>Available MYtineraries:</h3>
            </div>
        );
    }
}


const mapStateToProps = ( state ) => {
    console.log( "updated state" , state );
    return {
        itineraries: state.itinerariesReducer.itineraries,
        isLoading: state.itinerariesReducer.isLoading
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        fetchAllItineraries : () => dispatch( fetchAllItineraries() )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Itineraries )