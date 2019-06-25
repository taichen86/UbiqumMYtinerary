import axios from 'axios';

const serverURL = "http://localhost:8080";

export const fetchAllItineraries = ( city ) => {
    console.log( "ping server for city: ", city );
    return dispatch => {
        dispatch({
            type: 'FETCH_ITINERARY_IN_PROGRESS'
        })
        const url = serverURL + '/itineraries/' + city;
        console.log( "action url ", url );
        return axios.get( url )
        .then( result => {
            console.log( "got DATA ", result.data );
            dispatch({
                type: 'FETCH_ITINERARY_SUCCESS',
                itineraries: result.data
            }) 
        })
        .catch(error => {
            console.log( "axios error: " , error.response);
            dispatch({
                type: 'FETCH_ITINERARY_FAILED',
                error: error
            })
        })
    };
}

export const fetchAllActivities = ( itinerary ) => {
    console.log( 'fetchAllActivities for ', itinerary );
    return dispatch => {
        dispatch({
            type: 'FETCH_ACTIVITIES_IN_PROGRESS'
        })
        const url = serverURL + '/activities/' + itinerary;
        console.log( "action url ", encodeURI( url ) );
        return axios.get( encodeURI( url ) )
        .then( result => {
            console.log( "got DATA ", result.data );
            dispatch({
                type: 'FETCH_ACTIVITIES_SUCCESS',
                itineraries: result.data
            }) 
        })
        .catch(error => {
            console.log( "axios error: " , error.response);
            dispatch({
                type: 'FETCH_ACTIVITIES_FAILED',
                error: error
            })
        })
    };
}