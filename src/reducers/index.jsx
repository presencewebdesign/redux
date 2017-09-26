// const state = [{
//     name: 'James',
//     age: 33,
// }, {
//     name:'Polly',
//     age:27
// }]

// add person...

// return [
//     ...state,
//     action.person,
// ]

// Add Person
var personId = 1;
export const personReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            return {
                ...state,
                [personId++]: {
                    name: action.name,
                    age: action.age,
                    hobbies: [],
                    movies: []
                }
            };
        case 'CHANGE_NAME':
            return {
                ...state,
                [action.id]: {
                    name: action.name,
                    age: action.age,
                    hobbies: [],
                    movies: []
                }
            };
        case 'ADD_MOVIE':
            return{
                ...state,
                [action.id]: {
                    ...state[action.id],
                    movies: [
                        ...state[action.id].movies,
                        action.movie
                    ]
                }
            }
        case 'REMOVE_MOVIE':
            return{
                ...state,
                [action.id]: {
                    ...state[action.id],
                    movies: state[action.id].movies.filter((movie, index) => index !== action.movieId)
                }
            }
        case 'ADD_HOBBY':
            return{
                ...state,
                [action.id]: {
                    ...state[action.id],
                    hobbies: [
                        ...state[action.id].hobbies,
                        action.hobby
                    ]
                }
            }
        case 'REMOVE_HOBBY':
            return{
                ...state,
                [action.id]: {
                    ...state[action.id],
                    hobbies: state[action.id].hobbies.filter((hobby, index) => index !== action.hobbyId)
                }
            }
            default:
            return state;
    }
};


// Name reducer and action generators
// ----------------
export const nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name
        default:
            return state;
    };
};

// Hobbies reducer and action generators
// ----------------
var movieId = 1;
export const moviesReducer = (state = [], action) => {
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
export const mapReducer = (state = {isfetching: false, url: undefined}, action) => {
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