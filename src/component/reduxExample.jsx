import React from 'react';
import { createStore } from 'redux';

console.log("check");
const reducer = (state = {name: 'Anonymous'}, action) => {
    // state = state || {name: 'Anonymous'};
    return state;
};
const store = createStore(reducer);
const currentState = store.getState();

console.log('currentState', currentState);

// const reduxState = {
//     searchText: 'Dog',
//     showCompleted: false,
//     todos: [{
//         id: '123',
//         text: 'Walk the dog'
//     }]
// };
// const action = {
//     type: 'CHANGE_SEARCH_TEXT',
//     searchText: 'something else'
// }

// console.log('Starting redux example');