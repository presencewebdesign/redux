import React from 'react';
import { compose, createStore, combineReducers } from 'redux';

import * as actions from '../actions';
import configureStore from '../store/configureStore';
const store = configureStore();

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

store.dispatch(actions.changeName('James'));
store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.changeName('Polly'));
store.dispatch(actions.addMovie('Mad Max', 'Action'));
store.dispatch(actions.addMovie('Star Wars', 'Action'));
store.dispatch(actions.removeMovie(1));