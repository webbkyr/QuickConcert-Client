import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { modalReducer } from './reducers/modal';
import { concertsReducer } from './reducers/concerts';
import { eventLinkReducer } from './reducers/links'; 
import { detailsReducer } from './reducers/details';
import { updatesReducer } from './reducers/updates';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  modalReducer,
  concertsReducer,
  eventLinkReducer,
  detailsReducer,
  updatesReducer
})

const enhancer = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, enhancer);