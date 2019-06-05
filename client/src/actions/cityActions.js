import axios from 'axios';

export function fetchCitiesSuccess( cities ){
    return {
        type: 'FETCH_CITY_SUCCESS',
        cities: cities
    }
}

export const fetchAllCities = () => {
    return dispatch => {
        console.log( "inside ACTION fetchAllCities" );
        return axios.get( 'http://localhost:8080/cities' )
        .then( result => {
            console.log( "got DATA ");
            console.log( result.data );
            dispatch({
                type: 'FETCH_CITY_SUCCESS',
                cities: result.data
            }) 
        })
    };
}


// export const addCity = () => { 
//     return {
//         type: 'ADD_CITY',
//         cityToAdd: {}
//     }
//  }

