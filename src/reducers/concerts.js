import { FETCH_CONCERT_REQUEST, FETCH_CONCERT_SUCCESS, FETCH_CONCERT_ERROR, CONCERT_SELECTED } from '../actions/concerts';
import {FETCH_LINK_REQUEST, FETCH_LINK_SUCCESS, FETCH_LINK_ERROR  } from '../actions/eventlinks'
import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal';
import { FETCH_DETAILS_REQUEST, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_ERROR } from '../actions/event-details';


const initialState = {
    concerts: [],
    eventLink: null,
    eventDetails: null,
    showEventDetailsView: false,
    loading: false,
    error: null,
    isModalOpen: false,
    selectedConcert: null,
   }

export const reducer = (state=initialState, action) => {
  switch(action.type) {

    case CONCERT_SELECTED:
    return Object.assign({}, state, {selectedConcert: action.payload})

    case SHOW_MODAL:
    return Object.assign({}, state, {isModalOpen: true})

    case HIDE_MODAL:
    return Object.assign({}, state, {isModalOpen: false})

    case FETCH_CONCERT_REQUEST:
    return Object.assign({}, state, {loading: true})

    case FETCH_CONCERT_SUCCESS:
    return Object.assign({}, state, {loading: false, concerts: action.data, error: null})

    case FETCH_CONCERT_ERROR:
    return Object.assign({}, state, {loading: false, error: action.err})

    case FETCH_LINK_REQUEST:
    return Object.assign({}, state,{loading: true})

    case FETCH_LINK_SUCCESS:
    return Object.assign({}, state, {loading: false, eventLink: action.data, error: null})

    case FETCH_LINK_ERROR:
    return Object.assign({}, state, {error: action.err})

    case FETCH_DETAILS_REQUEST:
    return Object.assign({}, state,{loading: true})

    case FETCH_DETAILS_SUCCESS:
    return Object.assign({}, state, {loading: false, eventDetails: action.data, showEventDetailsView: !state.showEventDetailsView, error: null})

    case FETCH_DETAILS_ERROR:
    return Object.assign({}, state, {error: action.err})

    default:
    break;
  }
  return state;
}
