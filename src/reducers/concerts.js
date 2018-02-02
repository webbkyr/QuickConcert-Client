import { FETCH_CONCERT_REQUEST, FETCH_CONCERT_SUCCESS, FETCH_CONCERT_ERROR, CONCERT_SELECTED, selectConcert } from '../actions/concerts';


const initialState = {
    concerts: [],
    loading: false,
    error: null,
    selectedConcert: null,
   }

export const concertsReducer = (state=initialState, action) => {
  switch(action.type) {

    case CONCERT_SELECTED:
    return Object.assign({}, state, {selectedConcert: action.payload})
    //return {
      //less code to use spread operator
    //   ...state, 
    //   selectConcert: action.payload;
    // }

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
