import React from 'react';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';
import Cities from './city/Cities';
import SignUp from './user/SignUp';
import LogIn from './user/LogIn';
import Itineraries from './itinerary/Itineraries';

import Header from './common/Header';
import Footer from './common/Footer';


class Routing extends React.Component {

    render(){
        return(
            <Router>
                <div>
                    <Header></Header>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/cities" component={Cities} />
                    <Route path="/itineraries/:city" component={Itineraries} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={LogIn} />
                    <Footer></Footer>
                </div>
            </Router>
        );
    }
}

export default Routing;