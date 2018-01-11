import { API_BASE_URL } from '../config';
export const FETCH_CONCERT_REQUEST = 'FETCH CONCERT REQUEST';
export const FETCH_CONCERT_SUCCESS = 'FETCH CONCERT SUCCESS';
export const FETCH_CONCERT_ERROR = 'FETCH CONCERT ERROR';
export const SHOW_LANDING = 'SHOW LANDING';
export const SHOW_LOCATION = 'SHOW LOCATION';
export const SHOW_ABOUT_DESCRIPTION = 'SHOW ABOUT DESCRIPTION';
export const CONCERT_SELECTED = 'CONCERT SELECTED';

//components shouldnt do logic 

// sync actions 

export const fetchConcertRequest = function(){
    return {
        type: FETCH_CONCERT_REQUEST
    }
}

export const fetchConcertSuccess = function(data, history){
    history.push('/search/concerts')
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


export const selectConcert = function(concert){
    return {
        type: CONCERT_SELECTED, payload: concert
    }
}



//async action: there can be more than one
//pass in arg for dates and location
export const fetchConcerts = function(location, history){
    console.log(history);
    // history.push('/search/concerts');
//use url params to pass data
    return function(dispatch){
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
};

