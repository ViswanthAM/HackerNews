import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { HomeApp } from './site/HomeApp'
import { News } from './site/components'
export class AppRouterComponent extends Component {
    render(){
        return <Router>
            <HomeApp>
                <Route exact path= "/" component = {News}/>
            </HomeApp>
        </Router>
    }
}

export const AppRouter = AppRouterComponent;