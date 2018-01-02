import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConcertList from './components/concert-list';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <ConcertList />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
