import {startLoading, endLoading} from "./loading";
import {ranking} from "../url";
import {showAlert} from "./alert";
import {addFailInternetRequest} from "./networkReconnect";
//获取排行榜请求
export const REQUEST_RANKING_DATA = "REQUEST_RANKING_DATA";
const requestRankingData = () => ({
        type: REQUEST_RANKING_DATA,
    }
);
//接收数据
export const RECEIVE_RANKING_DATA_SUCCESS = "RECEIVE_RANKING_DATA";
const receiveRankingDataSuccess = (movies) => ({
        type: RECEIVE_RANKING_DATA_SUCCESS,
        films: movies
    }
);
export const fetchGet = () => {
    return (dispatch) => {
        let requestRankingDataUrl = ranking;
        dispatch(requestRankingData());
        dispatch(startLoading("加载数据中..."));
        fetch(requestRankingDataUrl, {
            method: "GET",
            headers: {
                "Accept": 'application/json'
            }
        }).then(
            response => {
                dispatch(endLoading());//结束加载动画
                return  response.json();
            }
        ).then(json => {
            console.log(json);
            if (json.code === 1) {
                dispatch(receiveRankingDataSuccess(json.data.movies));
                console.log(json.data.movies);
            } else {
                dispatch(showAlert("获取数据失败", 3000, "danger"));
            }
        }).catch((reason) => {
            if (navigator.online) {
                dispatch(showAlert("获取数据失败", 3000, "danger"));

            } else {
                dispatch(showAlert("网络连接异常", 3000, "danger"));
                dispatch(addFailInternetRequest(fetchGet));//添加失败的动作
            }
        });
    };
};
