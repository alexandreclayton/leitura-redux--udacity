import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RootView from '../views/root';


class RouterApp extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" render={() => (
                    <RootView />
                )} />
            </div>
        )
    }
}
export default RouterApp