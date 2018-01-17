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
    case CREATOR_UPDATE_SUCCESS:
    return Object.assign(state, {
      creatorUpdates: [...state.creatorUpdates, {creator: action.data.creator}
      ]})


    default: 
    break;
  }

  return state;
  
}
