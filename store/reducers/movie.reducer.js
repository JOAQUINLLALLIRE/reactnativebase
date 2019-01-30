import {ACTION_EXAMPLE, LOADING_MOVIES, LOADED_MOVIES_SUCESS, LOADED_MOVIES_ERROR} from "../actions/movie.actions";
// import dbMovies  from "../../dbMovies.json"

const initialState = {
    movies: [],
    loading: false,
    error: null
};

export const moviesReducer = (state = initialState, action) => {
    console.log("Reducer aa...");
    switch (action.type) {
        case ACTION_EXAMPLE:
            return { ...state };
        case LOADING_MOVIES:
            return { 
                ...state, 
                loading: false, 
                error: null
            };
        case LOADED_MOVIES_SUCESS:
            return { 
                 ...state,
                 // movies: dbMovies,
                 movies: action.payload.movies,
                 loading: false, 
                 error: null
                };   
        case LOADED_MOVIES_ERROR:
            return {
                    ...state, 
                    error: action.payload.error,
                    loading: false
                };  
        default:
            return state
    }
};