import {
    RECEIVE_MOVIE_DATA,
    GET_MOVIE_REQUEST
} from "../actions/moviesDetails";

export const movieDetails = (state, action) => {
    switch (action.type) {
        case RECEIVE_MOVIE_DATA:
            return {
                ...action.movieDetail
            };
        case GET_MOVIE_REQUEST:
            return {
                ...state
            };
        default:
            return {...state};
    }
};