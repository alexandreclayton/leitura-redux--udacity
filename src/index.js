import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import RouterApp from './router';
import reducers from './reducers';
import history from './router/history';

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
