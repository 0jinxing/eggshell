import {
    POST_NEW_REVIEW,
    RECEIVE_NEW_REVIEW_BACK_DATA
} from "../actions/newReview";

export const newReview = (state = {}, action) => {
    switch (action.type) {
        case POST_NEW_REVIEW:
            return {...state};
        case RECEIVE_NEW_REVIEW_BACK_DATA:
            return {...action.newReviewBackData};
        default:
            return {...state};
    }
};