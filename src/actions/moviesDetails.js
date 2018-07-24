import {showAlert, closeAlert} from "./alert";
import {addFailInternetRequest} from "./networkReconnect";
import {movie as movieUrl} from "../url";
export const GET_MOVIE_REQUEST = "GET_MOVIE_REQUEST";
const getMovie = (movieId) => ({
    type: GET_MOVIE_REQUEST
});
export const RECEIVE_MOVIE_DATA = "RECEIVE_MOVIE_DATA";
const receiveMovieData = (movieDetail) => ({
    type: RECEIVE_MOVIE_DATA,
    movieDetail
});
export const getMovieFetch = (movieId) => {
    return (dispatch) => {
        dispatch(getMovie());
        fetch(movieUrl, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "content-type": ""
            }
        }).then(resp => resp.json()).then(json => {
            console.log(json);
            if(json.code === 1){
                dispatch(receiveMovieData(json.data));
            }else{
                dispatch(showAlert(json.msg||"获取数据失败",3000,"danger"));
            }
        }).catch(error => {
            if (navigator.online) {
                dispatch(showAlert("获取数据失败", 3000, "danger"));
            } else {
                dispatch(showAlert("网络连接异常", 3000, "danger"));
                dispatch(addFailInternetRequest(getMovieFetch ));//添加失败的动作
            }
        });
    };
};