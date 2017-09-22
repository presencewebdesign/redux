import axios from 'axios';

export const changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
};
export const addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    }
};
export const removeHobby = (hobby) => {
    return {
        type: 'REMOVE_HOBBY',
        hobby
    }
};
export const addMovie = (title, genre) => {
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    };
};
export const removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    }
};
export const startLocationFetch = () => {
    return {
        type: 'START_LOCATION_FETCH'
    }
};
export const completeLocationFetch = (url) => {
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    }
};
export const fetchLocation = () => {
    return (dispatch, getState) => {
        dispatch(startLocationFetch());
        axios.get('http://ipinfo.io').then(res => {
            let loc = res.data.loc;
            let baseUrl = 'https://www.google.co.uk/maps?q='
            dispatch(completeLocationFetch(baseUrl + loc));
        });
    }
};
