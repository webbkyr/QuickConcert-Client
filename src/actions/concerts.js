import { API_BASE_URL } from '../config';
export const FETCH_CONCERT_REQUEST = 'FETCH CONCERT REQUEST';
export const FETCH_CONCERT_SUCCESS = 'FETCH CONCERT SUCCESS';
export const FETCH_CONCERT_ERROR = 'FETCH CONCERT ERROR';

// async actions 

export const fetchConcertRequest = function(){
    return {
        type: FETCH_CONCERT_REQUEST
    }
}

export const fetchConcertSuccess = function(data){
    return {
        type: FETCH_CONCERT_SUCCESS,
        data
    }
}

export const fetchConcertError = function(err){
    return {
        type: FETCH_CONCERT_ERROR,
        err
    }
}

//async action: there can be more than one

export const fetchConcerts = function(){
    return function(dispatch){
        dispatch(fetchConcertRequest());
        console.log(API_BASE_URL);
        return fetch(`${API_BASE_URL}/api/concerts`).then(res => {

            if(!res.ok){
                return Promise.reject(res.statusText);
            }
            return res.json();
        }).then(concert => {
            dispatch(fetchConcertSuccess(concert));
        }).catch(err => {
            dispatch(fetchConcertError(err))
        })
    };
};

