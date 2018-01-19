import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ConcertApp from './components/ConcertApp';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <ConcertApp />
        </Provider>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
