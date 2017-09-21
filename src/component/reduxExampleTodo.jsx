import uuid from 'node-uuid';
import React from 'react';
import { compose, createStore } from 'redux';

console.log('Starting redux Example Todo');

const stateDefult = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};
const reducer = (state = stateDefult, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: uuid(),
                        hobby: action.hobby
                    }
                ]
            };
        case 'ADD_MOVIE':
        return {
            ...state,
            movies: [
                ...state.movies,
                {
                    id: uuid(),
                    title: action.title,
                    genre: action.genre
                }
            ]
        };
    default:
        return state;
    }
};
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
    type: 'CHANGE_NAME',
    name: 'POLLY'
});

store.dispatch({
    type: 'ADD_MOVIE',
    name: 'MAD MAX',
    genre: 'Action'
});