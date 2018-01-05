import { FETCH_CONCERT_REQUEST, FETCH_CONCERT_SUCCESS, FETCH_CONCERT_ERROR, SHOW_LANDING, SHOW_LOCATION, SHOW_ABOUT_DESCRIPTION, CONCERT_SELECTED } from '../actions/concerts';
import {FETCH_LINK_REQUEST, FETCH_LINK_SUCCESS, FETCH_LINK_ERROR  } from '../actions/eventlinks'
import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal';


const initialState = {
    landing: null,
    concerts: [],
    eventLink: [''],
    loading: false,
    error: null,
    isModalOpen: false,
    selectedConcert: null,
    about: false
   }

export const reducer = (state=initialState, action) => {
  switch(action.type) {

    case CONCERT_SELECTED:
    return Object.assign({}, state, {selectedConcert: action.payload})

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

    case SHOW_ABOUT_DESCRIPTION:
    return Object.assign({}, state, {about: !state.about})

    default:
    break;
  }
  return state;
}
