import { API_BASE_URL } from '../config';
export const CREATOR_UPDATE_REQUEST = 'CREATOR UPDATE REQUEST';
export const CREATOR_UPDATE_SUCCESS = 'CREATOR UPDATE SUCCESS';
export const CREATOR_UPDATE_ERROR = 'CREATOR UPDATE ERROR';

export const creatorUpdateRequest = function() {
  return {
      type: CREATOR_UPDATE_REQUEST
  }
}

export const creatorUpdateSuccess = function(data) {
  return {
      type: CREATOR_UPDATE_SUCCESS,
      data

  }
}

export const creatorUpdateError = function(err) {
  return {
      type: CREATOR_UPDATE_ERROR,
      err
  }
}

//change to sendupdates

export const sendCreatorUpdate = function(creatorInfo) {

    return function(dispatch) {
      dispatch(creatorUpdateRequest());
      return fetch(`${API_BASE_URL}/api/concerts/${creatorInfo.id}`, {
          method: 'PUT',
          body: JSON.stringify(creatorInfo),
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      }).then(res => {
          if (!res.ok) {
              return Promise.reject(res.statusText);
          }
          return res.json();
      }).then(creator => {
          console.log('Creator sent from server', creator)
          dispatch(creatorUpdateSuccess(creator));
      }).catch(err => {
          dispatch(creatorUpdateError(err))
      })
  }
}
