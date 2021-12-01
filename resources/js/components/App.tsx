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
                    <Home></Home>
                </Route>
                <Route exact path={'/pricing'}>
                    <PageWrapper><PriceComponent title="Graduation" hoursText="1+" photosText="18+" costText="95"/></PageWrapper>
                </Route>
                {/*<Route exact path={RoutePath.SITE_DOWN} component={SiteDownPage}/>*/}
                {/*<Route path={RoutePath.WHAT_NEXT} component={WhatNextPage}/>*/}
                {/*<Route path={RoutePath.SELL_WITH_US} component={SellWithUsPage}/>*/}
                {/*<Route path={RoutePath.BIDDING_TERMS} component={BiddingTermsPage}/>*/}
                {/*<Route path={RoutePath.TERMS_CONDITIONS} component={TermsAndConditionsPage} />*/}
                {/*<Route path={RoutePath.PRIVACY_POLICY} component={PrivacyPolicyPage} />*/}
            </Switch>
        </Router>
    );
}

// axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;
// axios.defaults.headers.common['Accept'] = 'application/json';
// axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.withCredentials = true;

export default App;
