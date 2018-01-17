import {FETCH_LINK_REQUEST, FETCH_LINK_SUCCESS, FETCH_LINK_ERROR  } from '../actions/eventlinks'

const initialState = {
  eventLink: null,
  loading: false,
  error: null,
 }


export const eventLinkReducer = (state=initialState, action) => {

  switch(action.type) {
    
  case FETCH_LINK_REQUEST:
  return Object.assign({}, state,{loading: true})
 
  case FETCH_LINK_SUCCESS:
  return Object.assign({}, state, {loading: false, eventLink: action.data, error: null})
 
  case FETCH_LINK_ERROR:
  return Object.assign({}, state, {error: action.err})

  default: 
  break;
  }
  return state;
  
}
