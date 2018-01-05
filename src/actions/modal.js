export const SHOW_MODAL = 'SHOW MODAL'
export const HIDE_MODAL = 'HIDE MODAL'

export const showModal = function() {
  return {
      type: SHOW_MODAL
  }
}

export const hideModal = function() {
  return {
    type: HIDE_MODAL
  }
}