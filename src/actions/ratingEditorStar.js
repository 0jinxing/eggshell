import {score as scoreUrl, check_is_score as checkIsScoreUrl} from "../url";
import {showAlert} from "./alert";

export const POST_SCORE = "REQUST_POST_SCORE";
const postScore = () => ({
    type: POST_SCORE
});
export const RECEIVE_SCORE_BACK_DATA = "RECEIVE_SCORE_BACK_DATA";
const receiveScoreBackData = (receiveData) => {
    return {
        type: RECEIVE_SCORE_BACK_DATA,
        receiveData: receiveData
    };
};
export const fetchPostScore = (score, movieId) => {
    let str = `movie_id=${movieId}&score=${score}`;
    return dispatch => {
        dispatch(postScore());
        fetch(scoreUrl, {
            method: "POST",
            headers: {
                'accept': 'application/json',
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: str
        })
            .then(resp => resp.json())
            .then(json => {
                if (json.code === 1) {
                    dispatch(showAlert(json.msg, 3000, "success"));
                    dispatch(receiveScoreBackData(json));
                } else {
                    dispatch(showAlert(json.msg, 3000, "danger"));
                }
            })
            .catch(
                e => (dispatch(showAlert("出错啦！", 3000, "danger")))
            );
    };
};
export const REQUEST_CHECK_SCORE = "REQUEST_CHECK_SCORE";
const requestCheckScore = () => {
    return {
        type: REQUEST_CHECK_SCORE
    };
};
export const RECEIVE_CHECK_SCORE_BACK_DATA = "RECEIVE_CHECK_SCORE_BACK_DATA";
const receiveCheckScoreBackData = (backData) => {
    return {
        type: RECEIVE_CHECK_SCORE_BACK_DATA,
        receiveData: backData
    };
};
export const fetchCheckScore = (movieId) => {
    return dispatch => {
        let str = `movie_id=${movieId}`;
        dispatch(requestCheckScore());
        fetch(checkIsScoreUrl.concat("?").concat(str), {
            method: "GET",
            headers: {
                'accept': 'application/json',
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            credentials: 'include'
        }).then(resp => resp.json())
            .then(json => {
                if (json.code !== 0) {//1，已打过分，-1，未打分 0，未知错误
                    dispatch(receiveCheckScoreBackData(json));
                } else {
                    dispatch(showAlert(json.msg, 3000, "danger"));
                }
            })
            .catch(
                e => {
                    console.log(e);
                    dispatch(showAlert("出错啦！", 3000, "danger"));
                }
            );
    };
};
