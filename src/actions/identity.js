import * as mUrl from '../url';
import { startLoading, endLoading } from './loading';
import { showAlert } from './alert';

// 开始发送登陆请求
export const requestLogin = () => ({
    type: 'REQUEST_LOGIN',
});

// 登陆成功
export const loginSuccess = (email, data) => ({
    type: 'LOGIN_SUCCESS',
    logined: true,
    email,
    ...data
});

// 登陆失败
export const loginFail = (code, msg) => ({
    type: 'LOGIN_FAIL',
    code,
    msg
});

// 开始发送注册请求
export const requestRegister = () => ({
    type: 'REQUEST_REGISTER',
});

// 注册成功
export const registerSuccess = (email, data) => ({
    type: 'REGISTER_SUCCESS',
    email,
    ...data
});

// 注册失败
export const registerFail = (code, msg) => ({
    type: 'REGISTER_FAIL',
    code,
    msg
});

// 请求退出
export const requestLogout = () => ({
    type: 'REQUEST_LOGOUT'
});

// 退出成功
export const logoutSuccess = () => ({
    type: "LOGOUT_SUCCESS"
});

// 退出失败
export const logoutFail = () => ({
    type: "LOGOUT_FAIL"
});

// 异步action，登陆
export const fetchLogin = (email, password) => {
    return (dispatch) => {
        dispatch(requestLogin());
        dispatch(startLoading("登陆中..."));
        fetch(mUrl.login, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: { email, password },
            credentials: 'include'
        }).then(response => response.json())
            .then(json => {
                if (json.code == 1) {
                    dispatch(loginSuccess(email, json.data));
                    dispatch(endLoading());
                    dispatch(showAlert(json.msg, 2000, "success"));
                }
                else {
                    dispatch(loginFail(json.code, json.msg));
                    dispatch(endLoading());
                    dispatch(showAlert(json.msg, 2000, "danger"));
                }
            });
    };
};

// 异步action，退出
export const fetchLogout = () => {
    return (dispatch) => {
        dispatch(requestLogout());
        dispatch(startLoading('退出中...'));
        fetch(mUrl.logout, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            credentials: 'include'
        }).then(response => response.json())
            .then(json => {
                if (json.code == 1) {
                    dispatch(logoutSuccess());
                    dispatch(endLoading());
                    dispatch(showAlert(json.msg, 2000, "success"));
                }
                else {
                    dispatch(endLoading());                    
                    dispatch(logoutFail());
                    dispatch(showAlert(json.msg, 2000, "danger"));

                }
            });
    };
};

// 异步action，注册
export const fetchRegister = (nickname, email, password) => {
    return (dispatch) => {
        dispatch(startLoading("注册中..."));
        dispatch(requestRegister());
        fetch(mUrl.register, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: {
                nickname,
                email,
                password
            },
            credentials: 'include'
        }).then(response => response.json())
            .then(json => {
                if (json.code == 1) {
                    dispatch(endLoading());
                    dispatch(registerSuccess(email, json.data));
                    dispatch(showAlert(json.msg, 2000, "success"));
                }
                else {
                    dispatch(endLoading());
                    dispatch(registerFail(json.code, json.msg));
                    dispatch(showAlert(json.msg, 2000, "danger"));
                }
            });
    };
};