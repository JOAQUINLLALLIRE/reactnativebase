// import dbMovies  from "../../dbMovies.json";
export const ACTION_EXAMPLE = '[Movies] - Action Example';
export const LOADING_MOVIES = '[Movies] - LOADING';
export const LOADED_MOVIES_SUCESS = '[Movies] -  LOADED SUCCESS';
export const LOADED_MOVIES_ERROR = '[Movies] -  LOADED ERROR';

export const ActionExample = () => ({
    type: ACTION_EXAMPLE
});

export const loadingMovies = () => ({
    type: LOADING_MOVIES
});

export const loadedMoviesSuccess = (data) => ({
    type: LOADED_MOVIES_SUCESS,
    payload: { "movies": data }
});

export const loadedMoviesError = (error) => ({
    type: LOADED_MOVIES_ERROR,
    payload: {error}
});

/* export const loadMoviesLista =  () => {
    console.log("Dbb =>", dbMovies);
    // dbMovies
}; */

/* export const loadMoviesList =  () => {
    return async ( dispatch  ) => {
        dispatch(loadingMovies());
        const data = await dbMovies;
        dispatch(loadedMoviesSuccess(data));
    }
}; */


export const loadMoviesListAsync = () => {
    return async (dispatch) => {
        dispatch(loadingMovies());
        fetch("https://database-babc3.firebaseio.com/movies.json")
            .then(async res => {
                console.log("Res", res);
                if (res.status === 200) return res.json();
                else throw await res.json()
            })
            .then(res => {
                dispatch(loadedMoviesSuccess(res));
            })
            .catch(err => {
                dispatch(loadedMoviesError(err));
            })
    }
};
