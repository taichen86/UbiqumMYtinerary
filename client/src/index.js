import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, compose, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer';


import './index.css';
import * as serviceWorker from './serviceWorker';
import Routing from './Routing';


const middleWare = [thunk];

// const myStore = createStore(citiesReducer, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const myStore = createStore(rootReducer, compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


// const MEMBERS = [{ name: "Marting Wright", avatarURL: "avatarMartin.png" },
//                 { name: "Sabrina Miller", avatarURL: "avatarSabrina.png"}];

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render( <Provider store={myStore}><Routing></Routing></Provider>, 
                document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
