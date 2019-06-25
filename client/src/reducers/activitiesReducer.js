const initialState = {
    activities: [],
    isLoading : false,
    error: null
  }
  
  const activitiesReducer = (state = initialState, action) => {
      
    switch (action.type) {
  
        case "FETCH_ACTIVITIES_IN_PROGRESS":
          console.log( '=== FETCH_ACTIVITIES_IN_PROGRESS ===' );
          return { ...state, isLoading: true, error: null }
  
        case "FETCH_ACTIVITIES_SUCCESS":
          console.log( '=== FETCH_ACTIVITIES_SUCCESS ===', action );
          return { ...state, activities: action.activities, isLoading: false, error: null }
  
        case "FETCH_ACTIVITIES_FAILED":
          console.log( '=== FETCH_ACTIVITIES_FAILED ===', action );
          return { ...state, isLoading: false, error: action.error }
  
        default:
            console.log( "return default state" , state );
        return state
          
        }
  }
  
  export default activitiesReducer;