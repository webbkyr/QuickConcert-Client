import { API_BASE_URL } from '../config';
export const ADD_ATTENDEE_REQUEST = 'ADD ATTENDEE REQUEST';
export const ADD_ATTENDEE_SUCCESS = 'ADD ATTENDEE SUCCESS';
export const ADD_ATTENDEE_ERROR = 'ADD ATTENDEE ERROR';

export const addAttendeeRequest = function() {
  return {
      type: ADD_ATTENDEE_REQUEST
  }
}

export const addAttendeeSuccess = function(data) {
  return {
      type: ADD_ATTENDEE_SUCCESS,
      data

  }
}

export const addAttendeeError = function(err) {
  return {
      type: ADD_ATTENDEE_ERROR,
      err
  }
}

export const addAttendee = attendee => dispatch => {
  console.log('attendee in action', attendee)
      dispatch(addAttendeeRequest());
      return fetch(`${API_BASE_URL}/api/concerts/${attendee.id}`, {
        method: 'POST',
        body: JSON.stringify(attendee),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      }).then(res => {
          if (!res.ok) {
              return Promise.reject(res.statusText);
          }
          return res.json();
      }).then(attendee => {
          console.log('attendee added response', attendee)
          dispatch(addAttendeeSuccess(attendee));
      }).catch(err => {
          dispatch(addAttendeeError(err))
      })
}
