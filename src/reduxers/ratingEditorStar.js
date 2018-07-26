import {POST_SCORE, RECEIVE_SCORE_BACK_DATA} from "../actions/ratingEditorStar";

const postScore = (state = {
    code: 0,
    score: 0,
    msg: ""
}, action) => {
    switch (action.type) {
        case POST_SCORE:
            return {
                ...state
            };
        case RECEIVE_SCORE_BACK_DATA:
            return {
                ...state
            };
        default:
            return {
                ...state
            };
    }
};
export default postScore;