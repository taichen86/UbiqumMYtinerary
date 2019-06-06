import axios from 'axios';

export const fetchAllCities = () => {
    return dispatch => {
        dispatch({
            type: 'FETCH_CITY_IN_PROGRESS'
        })
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

