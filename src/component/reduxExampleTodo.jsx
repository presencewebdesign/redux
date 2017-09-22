import React from 'react';
import { compose, createStore, combineReducers } from 'redux';

console.log('Starting redux Example Todo');

var hobbyId = 1;
var moveId = 1;

const stateDefult = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};

// const oldReducer = (state = stateDefult, action) => {
//     switch (action.type) {
//         case 'CHANGE_NAME':
//             return {
//                 ...state,
//                 name: action.name
//             };
//         case 'ADD_HOBBY':
//             return {
//                 ...state,
//                 hobbies: [
//                     ...state.hobbies,
//                     {
//                         id: hobbyId++,
//                         hobby: action.hobby
//                     }
//                 ]
//             };
//         case 'REMOVE_HOBBY':
//             return {
//                 ...state,
//                 hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
//             };
//         case 'ADD_MOVIE':
//         return {
//             ...state,
//             movies: [
//                 ...state.movies,
//                 {
//                     id: moveId++,
//                     title: action.title,
//                     genre: action.genre
//                 }
//             ]
//         };
//         case 'REMOVE_MOVIE':
//         return {
//             ...state,
//             movies: state.movies.filter((movie) => movie.id !== action.id)
//         };
//     default:
//         return state;
//     }
// };

const nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name
        default:
            return state;
    };
};
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
const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: moveId++,
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

var reducer = combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
});

const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    console.log('Name is', state.name);
    console.log('Name state', store.getState());
});
//unsubscribe();

const currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'James'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Walking'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
})

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'POLLY'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'MAD MAX',
    genre: 'Action'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'STAR WARS',
    genre: 'Action'
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
});
