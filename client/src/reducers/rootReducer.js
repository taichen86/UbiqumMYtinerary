import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import itinerariesReducer from './itinerariesReducer';

export default combineReducers({
    citiesReducer: citiesReducer,
    itinerariesReducer: itinerariesReducer
})