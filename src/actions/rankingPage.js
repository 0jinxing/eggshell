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
        fetch(requestRankingDataUrl, {
            method: "GET",
            headers: {
                "Accept": 'application/json'
            },
            credentials: 'include'
        }).then(
            response => {
                return  response.json();
            }
        ).then(json => {
            console.log(json);
            if (json.code === 1) {
                dispatch(receiveRankingDataSuccess(json.data.list));
            } else{
                dispatch(showAlert(json.msg||"获取数据失败",3000,"danger"));
            }
        }).catch((e)=>{});
    };
};
