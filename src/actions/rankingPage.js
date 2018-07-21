import {startLoading, endLoading} from "./loading";
import {ranking} from "../url";
import {showAlert} from "./alert";
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
        dispatch(requestRankingData());
        dispatch(startLoading("加载数据中..."));
        dispatch(endLoading());
        fetch(ranking, {
            method: "GET",
            headers: {
                'Accept': 'application/json'
            }
        }).then(
            response => response.json()
        ).then(json =>{
                if (json.code === 1) {
                    dispatch(receiveRankingDataSuccess(json.data.movies));
                    console.log(json.data.movies);
                } else {
                    dispatch(showAlert("获取数据失败", 3000, "danger"));
                }
                dispatch(endLoading());//结束加载动画
            });
    };
};
