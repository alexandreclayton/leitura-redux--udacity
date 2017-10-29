import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootView from './views/root';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(<MuiThemeProvider><RootView /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
