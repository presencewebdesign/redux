import React from 'react';
import { createStore } from 'redux';

const stateDefult = {
    searchText: '', 
    showCompleted: false, 
    todos = {todos: []}
};

const reducer = (, action) => {
    // state = state || {name: 'Anonymous'};
    return state;
};
const store = createStore(reducer);
const currentState = store.getState();