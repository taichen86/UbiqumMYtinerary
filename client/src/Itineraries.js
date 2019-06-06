import React from 'react';
import {connect} from 'react-redux';
import {fetchAllItineraries} from './actions/itineraryActions';


class Itineraries extends React.Component {

    componentDidMount(){
        console.log( this.props );
        console.log( "Itineraries did mount, call fetch all itineraries action")
        this.props.fetchAllItineraries();
    }

    render(){
        return(
            <div>
                === ITINERARIES PAGE ===
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