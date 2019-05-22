import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';
import Cities from './Cities';
import SignUp from './SignUp';
import LogIn from './LogIn';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/cities" component={Cities} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />

      </div>
    </Router>
  )





const MEMBERS = [{ name: "Marting Wright", avatarURL: "avatarMartin.png" },
                { name: "Sabrina Miller", avatarURL: "avatarSabrina.png"}];
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
