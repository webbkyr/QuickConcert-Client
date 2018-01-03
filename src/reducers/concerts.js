import { FETCH_CONCERT_REQUEST, FETCH_CONCERT_SUCCESS, FETCH_CONCERT_ERROR, SHOW_LANDING } from '../actions/concerts';

const initialState = {
    landing: null,
    concerts: [],
    loading: false,
    error: null
   }

export const reducer = (state=initialState, action) => {
  switch(action.type) {

    case SHOW_LANDING:
    return Object.assign({}, state, {landing: true})
    
    case FETCH_CONCERT_REQUEST:
    return Object.assign({}, state, {loading: true})

    case FETCH_CONCERT_SUCCESS:
    return Object.assign({}, state, {loading: false, concerts: action.data, error: null})

    case FETCH_CONCERT_ERROR:
    return Object.assign({}, state, {loading: false, error: action.err})

    default:
    break;
  }
  return state;
}
