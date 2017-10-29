import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducers from './reducers';
import RootView from './views/root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <MuiThemeProvider>
            <RootView />
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
