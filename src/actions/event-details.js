import { API_BASE_URL } from '../config';
export const FETCH_DETAILS_REQUEST = 'FETCH DETAILS REQUEST';
export const FETCH_DETAILS_SUCCESS = 'FETCH DETAILS SUCCESS';
export const FETCH_DETAILS_ERROR = 'FETCH DETAILS ERROR';

export const fetchDetailsRequest = () => ({
      type: FETCH_DETAILS_REQUEST
})

export const fetchDetailsSuccess = data => ({
      type: FETCH_DETAILS_SUCCESS,
      data
})

export const fetchDetailsError = err => ({
      type: FETCH_DETAILS_ERROR,
      err
})

export const fetchEventDetails = id => dispatch =>  {
    dispatch(fetchDetailsRequest());
      return fetch(`${API_BASE_URL}/api/concerts/${id}`, {
        method: 'GET',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      }).then(res => {
          if (!res.ok) {
              return Promise.reject(res.statusText);
          }
          return res.json();
      }).then(details => {
          dispatch(fetchDetailsSuccess(details));
      }).catch(err => {
          dispatch(fetchDetailsError(err))
      })
}
