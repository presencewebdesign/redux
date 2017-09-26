import React from 'react';
import { compose, createStore, combineReducers } from 'redux';

import * as actions from '../actions';
import configureStore from '../store/configureStore';
const store = configureStore();

console.log('**** Starting REFACTORED REDUX example ****');

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

store.dispatch(actions.fetchLocation());

const currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.addPerson({
    name:'James',
    age: '33'
}));
store.dispatch(actions.addPerson({
    name:'Polly',
    age: '30'
}));
store.dispatch({
    type: 'ADD_HOBBY',
    id: 2,
    hobby: 'Walking'
});
store.dispatch({
    type: 'ADD_MOVIE',
    id: 1,
    movie: 'Titanic'
});
store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2,
    hobbyId: 0
});
store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1,
    movieId: 0
});

store.dispatch({
    type: 'CHANGE_NAME',
    id: 1,
    name: 'James Stevenson'
});