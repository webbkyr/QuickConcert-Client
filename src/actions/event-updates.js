import { API_BASE_URL } from '../config';
export const CREATOR_UPDATE_REQUEST = 'CREATOR UPDATE REQUEST';
export const CREATOR_UPDATE_SUCCESS = 'CREATOR UPDATE SUCCESS';
export const CREATOR_UPDATE_ERROR = 'CREATOR UPDATE ERROR';

export const creatorUpdateRequest = () => ({
      type: CREATOR_UPDATE_REQUEST
})

export const creatorUpdateSuccess = data => ({
      type: CREATOR_UPDATE_SUCCESS,
      data
})

export const creatorUpdateError = err => ({
      type: CREATOR_UPDATE_ERROR,
      err
})

//change to sendupdates

export const sendCreatorUpdate = creatorInfo => dispatch => {
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
