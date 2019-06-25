import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import itinerariesReducer from './itinerariesReducer';
import activitiesReducer from './activitiesReducer';

export default combineReducers({
    citiesReducer: citiesReducer,
    itinerariesReducer: itinerariesReducer,
    activitiesReducer: activitiesReducer
})