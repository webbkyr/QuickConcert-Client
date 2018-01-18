import { CREATOR_UPDATE_REQUEST, CREATOR_UPDATE_SUCCESS, CREATOR_UPDATE_ERROR } from '../actions/event-updates';

const initialState = {
  loading: false,
  error: null,
  creatorUpdates: [],
  attendeeUpdates: []

 }

 //evaluate creator update fix 

export const updatesReducer = (state=initialState, action) => {
  
  switch(action.type) {

    case CREATOR_UPDATE_REQUEST:
    return Object.assign({}, state, {loading: true})

    case CREATOR_UPDATE_SUCCESS:
    return Object.assign({}, state, {loading: false,
      creatorUpdates: [...state.creatorUpdates, 
        {creator: action.data.creator, 
          eventId: action.data._id}
      ]})

    case CREATOR_UPDATE_ERROR:
    return Object.assign({}, state, {error: action.err})


    default: 
    break;
  }

  return state;
  
}
