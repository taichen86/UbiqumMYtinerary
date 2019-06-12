const initialState = {
    itineraries: [],
    isLoading : false,
    error: {}
  }
  
  const itinerariesReducer = (state = initialState, action) => {
      
    switch (action.type) {
  
        case "FETCH_ITINERARY_IN_PROGRESS":
          console.log( '=== FETCH_ITINERARY_IN_PROGRESS ===' );
          return { ...state, isLoading: true, error: {} }
  
        case "FETCH_ITINERARY_SUCCESS":
          console.log( '=== FETCH_ITINERARY_SUCCESS ===', action );
          return { ...state, itineraries: action.itineraries, isLoading: false, error: {} }
  
        case "FETCH_ITINERARY_FAILED":
          console.log( '=== FETCH_ITINERARY_FAILED ===', action );
          return { ...state, isLoading: false, error: action.error }
  
        default:
            console.log( "return default state" , state );
        return state
          
        }
  }
  
  export default itinerariesReducer;