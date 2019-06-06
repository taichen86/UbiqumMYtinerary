const initialState = {
    itineraries: [],
    isLoading : false,
    error: {}
  }
  
  const itinerariesReducer = (state = initialState, action) => {
      
    switch (action.type) {
  
        case "FETCH_ITINERARY_IN_PROGRESS":
          console.log( '=== FETCH_CITY_IN_PROGRESS ===' );
          return { ...state, isLoading: true }
  
        case "FETCH_ITINERARY_SUCCESS":
          console.log( '=== FETCH_CITY_SUCCESS ===' );
          console.log( action );
          return { ...state, itineraries: action.itineraries, isLoading: false }
  
        case "FETCH_ITINERARY_FAILED":
          console.log( '=== FETCH_CITY_FAILED ===' );
          console.log( action );
          return { ...state, isLoading: false, error: action.error }
  
          default:
              console.log( "return default state" , state );
          return state
          
        }
  }
  
  export default itinerariesReducer;