import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RootView from '../views/root/RootView';
import PostDetailView from '../views/post/PostDetailView';
import { Error404View } from '../views/error/Error404View';

class RouterApp extends Component {
    render() {
        let { location } = this.props;
        return (
            <Switch>
                <Route exact path="/" component={RootView} />
                <Route exact path="/:category" component={RootView} />
                <Route path="/:category/:postId" component={PostDetailView} />
                <Route render={() => <Error404View location={location} />} />
            </Switch>
        )
    }
}
export default RouterApp