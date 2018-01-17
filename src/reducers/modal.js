import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal';

const initialState = {
  isModalOpen: false
}

export const modalReducer = (state=initialState, action) => {
  switch(action.type) {

    case SHOW_MODAL:
    return Object.assign({}, state, {isModalOpen: true})

    case HIDE_MODAL:
    return Object.assign({}, state, {isModalOpen: false})

    default: 
    break;
  }
  return state;
}