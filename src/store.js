import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/concerts';
// import { modal } from './reducers/modalreducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux'

// const rootReducer = combineReducers({concertReducer, modal})
const enhancer = composeWithDevTools(applyMiddleware(thunk));

export default createStore(reducer, enhancer);