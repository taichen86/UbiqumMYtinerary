

const initialState = {
  cities: [
    {city: 'test city', country: 'test country'}
  ],
  filteredCities: [
    {city: 'test city', country: 'test country'}
  ],
  isLoading : false,
  error: {}
}

const citiesReducer = (state = initialState, action) => {
  console.log( "inside REDUCER..." );
  console.log( action );
    switch (action.type) {

      case "FETCH_CITY_SUCCESS":
        console.log( '=== FETCH_CITY_SUCCESS ===' );
        console.log( action );
        return { ...state , cities: action.cities }

        default:
            console.log( "return default state" + state );
        return state
        
      }
}

export default citiesReducer;