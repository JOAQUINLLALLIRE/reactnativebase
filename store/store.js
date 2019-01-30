import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {moviesReducer} from "./reducers/movie.reducer";

const rootReducer = combineReducers({
   movie: moviesReducer
});


export const generateStore = () => createStore(rootReducer, applyMiddleware(thunk));
// export const generateStore = () => createStore(rootReducer);