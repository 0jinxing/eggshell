import {showAlert} from "./alert";
import {review} from "../url";

export const POST_NEW_REVIEW = "POST_NEW_REVIEW";
const postNewReview = () => {
    return {
        type: POST_NEW_REVIEW
    };
};
export const RECEIVE_NEW_REVIEW_BACK_DATA = "RECEIVE_NEW_REVIEW_BACK_DATA";
const receiveNewReviewBackData = (backData) => {
    return {
        type: RECEIVE_NEW_REVIEW_BACK_DATA,
        newReviewBackData: backData
    };
};
export const fetchPostNewReview = (newReview) => {
    let str = `title=${newReview.title}&comment=${newReview.comment}&movie_id=${newReview.movie_id}`;
    console.log(str);
    return (dispatch) => {
        let postUrl = review;
        dispatch(postNewReview());
        fetch(postUrl, {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: str,
            credentials: 'include'
        }).then(
            response => {
                return response.json();
            }
        ).then(json => {
            console.log(json);
            if (json.code === 1) {
                dispatch(receiveNewReviewBackData(json));
                dispatch(showAlert(json.msg || "操作成功", 3000, "success"));
            } else {
                dispatch(showAlert(json.msg || "获取数据失败", 3000, "danger"));
            }
        }).catch((e) => {
            dispatch(showAlert("获取数据失败", 3000, "danger"));
        });
    };
};