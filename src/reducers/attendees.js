import { ADD_ATTENDEE_REQUEST, ADD_ATTENDEE_SUCCESS, ADD_ATTENDEE_ERROR } from '../actions';


const initialState = {
    attendees: [],
    loading: false,
    error: null,
   }

export const attendeeReducer = (state=initialState, action) => {
  switch(action.type) {

    case ADD_ATTENDEE_REQUEST:
    return Object.assign({}, state, {loading: true})

    case ADD_ATTENDEE_SUCCESS:
    return Object.assign({}, state, {loading: false, attendees: action.data, error: null})

    case ADD_ATTENDEE_ERROR:
    return Object.assign({}, state, {loading: false, error: action.err})

    default:
    break;
  }
  return state;
}
