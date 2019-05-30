



const citiesReducer = (state, action) => {
    switch (action.type) {
        case "ADD_CITY":
            console.log( "ADD_CITY action... " );
            console.log( action );
            console.log( state );
          return { cities: [ ...state.cities, action.cityToAdd ] }
        default:
            console.log( "return default state" + state );
          return state
      }
}

export default citiesReducer;