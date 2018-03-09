import { combineReducers } from 'redux';
import { concertsReducer } from '../reducers/concerts';
import { detailsReducer  } from '../reducers/details';
import { eventLinkReducer } from '../reducers/links';
import { modalReducer } from '../reducers/modal';
import { updatesReducer } from '../reducers/updates';
import { attendeeReducer } from '../reducers/attendees';
export * from './concerts';
export * from './attendees';
export * from './event-details';
export * from './eventlinks';
export * from './modal';

export const rootReducer = combineReducers({
  modalReducer,
  concertsReducer,
  eventLinkReducer,
  detailsReducer,
  updatesReducer,
  attendeeReducer
});