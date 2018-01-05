import { FETCH_CONCERT_REQUEST, FETCH_CONCERT_SUCCESS, FETCH_CONCERT_ERROR, SHOW_LANDING, SHOW_LOCATION, SHOW_ABOUT_DESCRIPTION } from '../actions/concerts';
import {FETCH_LINK_REQUEST, FETCH_LINK_SUCCESS, FETCH_LINK_ERROR  } from '../actions/eventlinks'

const initialState = {
    landing: null,
    concerts: [],
    eventLink: [''],
    loading: false,
    error: null,
    about: false
   }

export const reducer = (state=initialState, action) => {
  switch(action.type) {

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
