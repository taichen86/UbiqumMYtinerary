import axios from 'axios';

export const fetchAllItineraries = () => {
    return dispatch => {
        dispatch({
            type: 'FETCH_ITINERARY_IN_PROGRESS'
        })
        return axios.get( 'http://localhost:8080/itineraries' )
        .then( result => {
            console.log( "got DATA ", result.data );
            dispatch({
                type: 'FETCH_ITINERARY_SUCCESS',
                itineraries: result.data
            }) 
        })
    };
}