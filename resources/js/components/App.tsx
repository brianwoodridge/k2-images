import * as React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {PageWrapper} from "./PageWrapper";
import {PriceComponent} from "./PriceComponent";
import {Home} from "./Home";
// import axios from "axios";

function App() {

    return (
        <Router>
            <Switch>
                {/* Public Routes */}
                <Route exact path={'/'}>
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}

// axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;
// axios.defaults.headers.common['Accept'] = 'application/json';
// axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.withCredentials = true;

export default App;
