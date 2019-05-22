import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Team from './Team';
import HomePage from './HomePage';

const MEMBERS = [{ name: "Marting Wright", avatarURL: "avatarMartin.png" },
                { name: "Sabrina Miller", avatarURL: "avatarSabrina.png"}];
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HomePage />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
