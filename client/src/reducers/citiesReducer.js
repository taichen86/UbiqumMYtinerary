

const initialState = {
  cities: [
    // {city: 'test city', country: 'test country'}
  ],

  isLoading : false,
  error: {}
}

const citiesReducer = (state = initialState, action) => {
  console.log( action );
    switch (action.type) {

      case "FETCH_CITY_IN_PROGRESS":
        console.log( '=== FETCH_CITY_IN_PROGRESS ===' );
        return { ...state, isLoading: true }

      case "FETCH_CITY_SUCCESS":
        console.log( '=== FETCH_CITY_SUCCESS ===' );
        console.log( action );
        return { ...state, cities: action.cities, isLoading: false }

      case "FETCH_CITY_FAILED":
        console.log( '=== FETCH_CITY_FAILED ===' );
        console.log( action );
        return { ...state, isLoading: false, error: action.error }

        default:
            console.log( "return default state" + state );
        return state
        
      }
}

export default citiesReducer;