import {score as scoreUrl} from "../url";
import {showAlert} from "./alert";

export const POST_SCORE = "REQUST_POST_SCORE";
const postScore = () => ({
    type: POST_SCORE
});
export const RECEIVE_SCORE_BACK_DATA = "RECEIVE_SCORE_BACK_DATA";
const receiveScoreBackData = (receiveData) => {
    return {
        type: RECEIVE_SCORE_BACK_DATA,
        scoreBackData: receiveData
    };
};
export const fetchPostScore = (score) => {
    let str = `movie_id=${score.movie_id}&score=${score.score}`;
    return dispatch => {
        dispatch(postScore());
        fetch(scoreUrl, {
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
