import {
    POST_SCORE,
    REQUEST_CHECK_SCORE,

    RECEIVE_SCORE_BACK_DATA,
    RECEIVE_CHECK_SCORE_BACK_DATA

} from "../actions/ratingEditorStar";

const postScore = (state = {
    score: {
        code: 0,
        score: 0,
        msg: ""
    },
    checkIsScore: {
        code: 0,
        data: {
            start: 0
        },
        msg: ""
    }
}, action) => {
    switch (action.type) {
        case POST_SCORE:
            return {
                ...state
            };
        case REQUEST_CHECK_SCORE: {
            return {
                ...state
            };
        }
        case RECEIVE_SCORE_BACK_DATA:
            return {
                ...state,
                score: {
                    ...action.receiveData
                }
            };
        case RECEIVE_CHECK_SCORE_BACK_DATA: {
            console.log(action.receiveData);
            return {
                ...state,
                checkIsScore: {
                    ...action.receiveData
                }
            };
        }
        default:
            return {
                ...state
            };
    }
};
export default postScore;