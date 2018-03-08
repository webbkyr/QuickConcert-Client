import { API_BASE_URL } from '../config';
export const FETCH_CONCERT_REQUEST = 'FETCH CONCERT REQUEST';
export const FETCH_CONCERT_SUCCESS = 'FETCH CONCERT SUCCESS';
export const FETCH_CONCERT_ERROR = 'FETCH CONCERT ERROR';
export const CONCERT_SELECTED = 'CONCERT SELECTED';

export const fetchConcertRequest = () => ({
        type: FETCH_CONCERT_REQUEST
})

export const fetchConcertSuccess = (data, history) => {
    history.push('/concerts')
    return {
        type: FETCH_CONCERT_SUCCESS,
        data
    }
}

export const fetchConcertError = err => ({
        type: FETCH_CONCERT_ERROR,
        err
})

export const selectConcert = concert => ({
        type: CONCERT_SELECTED, payload: concert
})

export const fetchConcerts = (location, history) => dispatch => {
    dispatch(fetchConcertRequest());
        return fetch(`${API_BASE_URL}/api/concerts?city=${location}`)
        .then(res => {
            if(!res.ok){
                return Promise.reject(res.statusText);
            }
            return res.json();
        }).then(concert => {
            dispatch(fetchConcertSuccess(concert, history));
        }).catch(err => {
            dispatch(fetchConcertError(err))
    })
};

