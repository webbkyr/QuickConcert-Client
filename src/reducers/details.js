import { FETCH_DETAILS_REQUEST, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_ERROR } from '../actions';

const initialState = {
  eventDetails: null,
  loading: false,
  error: null
 }

 export const detailsReducer = (state=initialState, action) => {
  switch(action.type) {

    case FETCH_DETAILS_REQUEST:
    return Object.assign({}, state,{loading: true})

    case FETCH_DETAILS_SUCCESS:
    return Object.assign({}, state, {loading: false, eventDetails: action.data, error: null})

    case FETCH_DETAILS_ERROR:
    return Object.assign({}, state, {error: action.err})

    default:
    break;
  }
  return state;
}