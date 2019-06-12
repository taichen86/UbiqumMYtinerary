import axios from 'axios';


const serverURL = "http://localhost:8080";

export const fetchAllCities = () => {
    return dispatch => {
        dispatch({
            type: 'FETCH_CITY_IN_PROGRESS'
        })
        return axios.get( serverURL + '/cities' )
        .then( result => {
            console.log( "got DATA ", result.data );
            dispatch({
                type: 'FETCH_CITY_SUCCESS',
                cities: result.data
            }) 
        })
    }
}



// export const fetchCity = () => {
//     return dispatch => {
//         dispatch({
//             type: 'FETCH_CITY_IN_PROGRESS'
//         })
//         return fetch( serverURL + /)
//     }
// }


// export const addCity = () => { 
//     return {
//         type: 'ADD_CITY',
//         cityToAdd: {}
//     }
//  }

