import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { personReducer, nameReducer, moviesReducer, mapReducer } from '../reducers/index';
export default () => {
    var reducer = combineReducers({
        person: personReducer,
        name: nameReducer,
        movies: moviesReducer,
        map: mapReducer

    });
    const store = createStore(reducer, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
}