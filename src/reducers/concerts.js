import { FETCH_CONCERT_REQUEST, FETCH_CONCERT_SUCCESS, FETCH_CONCERT_ERROR } from '../actions/concerts';

const initialState = {
    cheeses: [],
    loading: false,
    error: null
   }

export const reducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_CONCERT_REQUEST:
    return Object.assign({}, state, {loading: true})
    break;

    case FETCH_CONCERT_SUCCESS:
    return Object.assign({}, state, {loading: false, cheeses :action.data, error: null})
    break;

    case FETCH_CONCERT_ERROR:
    return Object.assign({}, state, {loading: false, error: action.err})

    default:
    break;
  }
  return state;
}
