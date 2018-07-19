import * as mUrl from '../url';
import { startLoading, endLoading } from './loading';
import { showAlert } from './alert';

// 开始发送登陆请求
export const requestLoginMsg = () => ({
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
export const requestRegisterMsg = () => ({
    type: 'REQUEST_REGISTER',
});

// 注册成功
export const registerSuccess = () => ({
    type: 'REGISTER_SUCCESS'
});

// 注册失败
export const registerFail = (code, msg) => ({
    type: 'REGISTER_FAIL',
    code,
    msg
});

// 退出
export const logout = () => ({
    type: 'LOGOUT'
});

// 异步action，登陆
export const fetchLogin = (email, password) => {
    return (dispatch) => {
        dispatch(requestLoginMsg());
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
                else dispatch(loginFail(json.code, json.msg));
            });
    };
};

// 异步action，注册
export const fetchRegister = (nickname, email, password) => {
    return (dispatch) => {
        dispatch(startLoading("注册中..."));
        dispatch(requestRegisterMsg());
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
                    dispatch(registerSuccess());
                    dispatch(showAlert(json.msg, 2000, "success"));
                    // 注册成功后执行登陆操作
                    dispatch(fetchLogin(email, password));
                }
                else dispatch(registerFail(json.code, json.msg));
            });
    };
};