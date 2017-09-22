import React from 'react';
import { compose, createStore, combineReducers } from 'redux';
import axios from 'axios';

console.log('Starting redux Example Todo');

// Name reducer and action generators
// ----------------
const nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name
        default:
            return state;
    };
};
const changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
};
// Hobbies reducer and action generators
// ----------------
var hobbyId = 1;
const hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: hobbyId++,
                    hobby: action.hobby
                }
            ];
        case 'REMOVE_HOBBY':
                return state.filter((hobby) => hobby.id !== action.id)
            default:
                return state;
        };
};
const addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    }
};
const removeHobby = (hobby) => {
    return {
        type: 'REMOVE_HOBBY',
        hobby
    }
};

// Hobbies reducer and action generators
// ----------------
var movieId = 1;
const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: movieId++,
                    title: action.title,
                    genre: action.genre
                }
            ];
        case 'REMOVE_MOVIE':
                return state.filter((movie) => movie.id !== action.id)
            default:
                return state;
        };
};

// Map reducer and action generators
// ----------------
const mapReducer = (state = {isfetching: false, url: undefined}, action) => {
    switch (action.type) {
        case 'START_LOCATION_FETCH':
            return {
                isFetching: true,
                url: undefined
            };
        case 'COMPLETE_LOCATION_FETCH':
            return {
                isFetching: false,
                url: action.url
            };
        default:
            return state;
    }
};
const startLocationFetch = () => {
    return {
        type: 'START_LOCATION_FETCH'
    }
};
const completeLocationFetch = (url) => {
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    }
};
const fetchLocation = () => {
    store.dispatch(startLocationFetch());

    axios.get('http://ipinfo.io').then(res => {
        let loc = res.data.loc;
        let baseUrl = 'https://www.google.co.uk/maps?q='
        store.dispatch(completeLocationFetch(baseUrl + loc));
    });
};

const addMovie = (title, genre) => {
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    };
};
const removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    }
};

var reducer = combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
});

const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
const unsubscribe = store.subscribe(() => {
    const state = store.getState();

    console.log('Name is', state.name);
    console.log('Name state', store.getState());

    if(state.map.isFetching){
        console.log('is fetching axios data');
    }else if(state.map.url){
        console.log(state.map.url);
        document.getElementById('root').innerHTML = '<a target="_blank" href="'+ state.map.url +'">View location</a>';
    }
});
//unsubscribe();


fetchLocation();

const currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(changeName('James'));
store.dispatch(addHobby('Running'));
store.dispatch(addHobby('Walking'));
store.dispatch(removeHobby(2));
store.dispatch(changeName('Polly'));
store.dispatch(addMovie('Mad Max', 'Action'));
store.dispatch(addMovie('Star Wars', 'Action'));
store.dispatch(removeMovie(1));