import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal';

const initialState = {
  modalType: null,
  modalProps: {}
}

export const modal = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_MODAL:
    return Object.assign({}, state, {modalType: action.modalType, modalProps: action.modalProps})

    case HIDE_MODAL:
    return initialState

    default:
    return state;
  }

}