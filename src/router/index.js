import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RootView from '../views/root/RootView';
import PostDetailView from '../views/post/PostDetailView';
import Error404View from '../views/error/Error404View';


class RouterApp extends Component {
    Error404 = ({ location }) => (
        <div>
            <h3>No match for <code>{location.pathname}</code></h3>
        </div>
    )
    render() {
        return (
            <Switch>
                <Route exact path="/" component={RootView} />
                <Route path="/post/:id" component={PostDetailView} />
                <Route component={Error404View} />
            </Switch>
        )
    }
}
export default RouterApp