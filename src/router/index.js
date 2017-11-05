import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RootView from '../views/root';
import PostDetailView from '../views/post/PostDetailView';


class RouterApp extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" render={() => (
                    <RootView />
                )} />
                <Route path="/post/:id" render={() => (
                    <PostDetailView />
                )} />
            </div>
        )
    }
}
export default RouterApp