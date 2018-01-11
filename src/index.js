import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import ConcertApp from './components/Concert-App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <ConcertApp />
        </Provider>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
