import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../src/component/header';
import Footer from '../src/component/footer';
import Home from '../src/pages/home';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default Routes;
