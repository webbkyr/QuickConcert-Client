import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './actions';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, enhancer);