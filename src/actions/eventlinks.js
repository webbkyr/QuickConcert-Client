import { API_BASE_URL } from '../config';
export const FETCH_LINK_REQUEST = 'FETCH LINK REQUEST';
export const FETCH_LINK_SUCCESS = 'FETCH LINK SUCCESS';
export const FETCH_LINK_ERROR = 'FETCH LINK ERROR';

export const fetchLinkRequest = function() {
  return {
      type: FETCH_LINK_REQUEST
  }
}

export const fetchLinkSuccess = function() {
  return {
      type: FETCH_LINK_SUCCESS
  }
}

export const fetchLinkError = function() {
  return {
      type: FETCH_LINK_ERROR
  }
}

export const fetchSharedLink = function(concertInfo) {
  return function(dispatch) {
      dispatch(fetchLinkRequest());
      return fetch(`${API_BASE_URL}/api/concerts`, {
          method: 'POST',
          body: JSON.stringify(concertInfo),
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },

      }).then(res => {
          if (!res.ok) {
              return Promise.reject(res.statusText);
          }
          return res.json();
      }).then(event => {
          dispatch(fetchLinkSuccess(event));
      }).catch(err => {
          dispatch(fetchLinkError(err))
      })
  }
}
