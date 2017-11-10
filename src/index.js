import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RouterApp from './router';
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <BrowserRouter>
                <RouterApp />
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
