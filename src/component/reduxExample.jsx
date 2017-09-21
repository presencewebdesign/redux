import React from 'react';
import { compose, createStore } from 'redux';

console.log('Starting redux Example');

const stateDefult = {
        searchText: '',
        showCompleted: false,
        todos: []
};
const reducer = (state = stateDefult, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
        return {
            ...state,
            searchText: action.searchText
        };
        default:
        return state;
    }
};

const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
store.subscribe(() => {
    const state = store.getState();
    console.log('Name is', state.name);
});

console.log('CurrentState', store.getState());

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'dog'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    name: 'Something else'
});