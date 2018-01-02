import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/concerts';
import { composeWithDevTools } from 'redux-devtools-extension';
const enhancer = composeWithDevTools(applyMiddleware(thunk));

export default createStore(reducer, enhancer);