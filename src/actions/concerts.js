import { API_BASE_URL } from '../config';
export const FETCH_CONCERT_REQUEST = 'FETCH CONCERT REQUEST';
export const FETCH_CONCERT_SUCCESS = 'FETCH CONCERT SUCCESS';
export const FETCH_CONCERT_ERROR = 'FETCH CONCERT ERROR';
export const SHOW_LANDING = 'SHOW LANDING';
export const SHOW_LOCATION = 'SHOW LOCATION';


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

export const displayLanding = function() {
    return {
        type: SHOW_LANDING
    }
}

export const displayUserLocation = function() {
    return {
        type: SHOW_LOCATION
    }
}

// export const fetchLinkRequest = function() {
//     return {
//         type: FETCH_LINK_REQUEST
//     }
// }

// export const fetchLinkSuccess = function() {
//     return {
//         type: FETCH_LINK_SUCCESS
//     }
// }

// export const fetchLinkError = function() {
//     return {
//         type: FETCH_LINK_ERROR
//     }
// }

//need action for user input

//async action: there can be more than one
//pass in arg for dates and location
export const fetchConcerts = function(location){
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
            dispatch(fetchConcertSuccess(concert));
        }).catch(err => {
            dispatch(fetchConcertError(err))
        })
    };
};

// export const fetchSharedLink = function(concertInfo) {
//     return function(dispatch) {
//         dispatch(fetchLinkRequest());
//         return fetch(`${API_BASE_URL}/api/concerts`, {
//             method: 'POST',
//             body: JSON.stringify(concertInfo),
//             headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },

//         }).then(res => {
//             if (!res.ok) {
//                 return Promise.reject(res.statusText);
//             }
//             return res.json();
//         }).then(event => {
//             dispatch(fetchLinkSuccess(event));
//         }).catch(err => {
//             dispatch(fetchLinkError(err))
//         })
//     }
// }
