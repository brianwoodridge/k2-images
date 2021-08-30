import * as React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {PageWrapper} from "./PageWrapper";
import {PriceComponent} from "./PriceComponent";
// import axios from "axios";

function App() {
    const CSRF_COOKIE_RETRY_RATE = 1000;

    React.useEffect(() => {
        // fetchCsrfCookie();
    }, []);

    // function fetchCsrfCookie() {
    //     const csrfSuccessCallback: FailCallback = () => {
    //         console.log("Successfully retrieved CSRF token");
    //     }
    //     const csrfFailCallback: FailCallback = () => {
    //         console.error("Failed to get CSRF cookie, retrying");
    //         setTimeout(() => {
    //             baseApi.getCsrfCookie(csrfSuccessCallback, csrfFailCallback);
    //         }, CSRF_COOKIE_RETRY_RATE);
    //     };
    //
    //     baseApi.getCsrfCookie(csrfSuccessCallback, csrfFailCallback);
    // }

    return (
        <Router>
            <Switch>
                {/* Public Routes */}
                <Route exact path={'/'}>
                    <PageWrapper><div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div></PageWrapper>
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
