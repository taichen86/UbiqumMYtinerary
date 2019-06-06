import React from 'react';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';
import Cities from './Cities';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Itineraries from './Itineraries';

class Routing extends React.Component {

    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/cities" component={Cities} />
                    <Route path="/itineraries" component={Itineraries} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={LogIn} />
                </div>
            </Router>
        );
    }

}

export default Routing;