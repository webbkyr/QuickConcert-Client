import { FETCH_CONCERT_REQUEST, FETCH_CONCERT_SUCCESS, FETCH_CONCERT_ERROR, SHOW_LANDING, SHOW_LOCATION } from '../actions/concerts';
import {FETCH_LINK_REQUEST, FETCH_LINK_SUCCESS, FETCH_LINK_ERROR  } from '../actions/eventlinks'
import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal';


const initialState = {
    landing: null,
    concerts: [],
    eventLink: [''],
    loading: false,
    error: null,
    isModalOpen: false
   }

export const reducer = (state=initialState, action) => {
  switch(action.type) {

    case SHOW_MODAL:
    return Object.assign({}, state, {isModalOpen: true})

    case HIDE_MODAL:
    return Object.assign({}, state, {isModalOpen: false})

    case SHOW_LANDING:
    return Object.assign({}, state, {landing: true})

    case SHOW_LOCATION:
    return Object.assign({}, state, {landing: false})

    case FETCH_CONCERT_REQUEST:
    return Object.assign({}, state, {loading: true})

    case FETCH_CONCERT_SUCCESS:
    return Object.assign({}, state, {loading: false, concerts: action.data, error: null})

    case FETCH_CONCERT_ERROR:
    return Object.assign({}, state, {loading: false, error: action.err})

    case FETCH_LINK_REQUEST:
    return Object.assign({}, state,{loading: true})

    case FETCH_LINK_SUCCESS:
    return Object.assign({}, state, {loading: false, eventLinks: action.data, error: null})

    case FETCH_LINK_ERROR:
    return Object.assign({}, state, {error: action.err})

    default:
    break;
  }
  return state;
}
