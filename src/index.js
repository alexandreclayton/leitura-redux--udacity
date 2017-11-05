import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RouterApp from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <MuiThemeProvider>
            <BrowserRouter>
                <RouterApp />
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
