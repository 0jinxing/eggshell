import {
    RECEIVE_RANKING_DATA_SUCCESS,
    REQUEST_RANKING_DATA
} from "../actions/rankingPage";

export const rankingPage = (state = [], action) => {
    switch (action.type) {
        case REQUEST_RANKING_DATA:
            return state;
        case RECEIVE_RANKING_DATA_SUCCESS:
            return [
                ...action.films
            ];
        default:
            return state;
    }
};