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

// 检测邮箱是否可用
export const requestCheckEmail = () => ({
    type: 'REQUEST_CHECK_EMAIL'
});

// 邮箱可用
export const emailValid = () => ({
    type: 'EMAIL_VALID'
});

// 邮箱不可用
export const emailInvalid = () => ({
    type: 'EMAIL_INVALID'
});

export const requestUserInfo = () => ({
    type: 'REQUEST_USER_INFO'
});

export const getUserInfoSuccess = (data) => ({
    type: 'GET_USER_INFO_SUCCESS',
    ...data
});

export const getUserInfoFail = () => ({
    type: 'GET_USER_INFO_FAIL'
});

// 异步action，登陆
export const fetchLogin = (email, password) => {
    return (dispatch) => {
        dispatch(requestLogin());
        fetch(mUrl.login, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: `email=${email}&password=${password}`,
            credentials: 'include'
        }).then(response => response.ok && response.json())
            .then(json => {
                if (!json) return;
                if (json.code == 1) {
                    dispatch(loginSuccess(email, json.data));
                    dispatch(endLoading());
                    dispatch(showAlert(json.msg, 2000, "success"));
                }
                else {
                    dispatch(loginFail(json.code, json.msg));
                    dispatch(showAlert(json.msg, 2000, "danger"));
                }
            }).catch(response => { return; });
    };
};

// 异步action，退出
export const fetchLogout = () => {
    return (dispatch) => {
        dispatch(requestLogout());
        fetch(mUrl.logout, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            credentials: 'include'
        }).then(response => response.ok && response.json())
            .then(json => {
                if (!json) return;
                if (json.code == 1) {
                    dispatch(logoutSuccess());
                    dispatch(showAlert(json.msg, 2000, "success"));
                }
                else {
                    dispatch(logoutFail());
                    dispatch(showAlert(json.msg, 2000, "danger"));
                }
            }).catch(response => {
                return;
            });
    };
};

// 异步action，注册
export const fetchRegister = (nickname, email, password) => {
    return (dispatch) => {
        dispatch(requestRegister());
        fetch(mUrl.register, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: `nickname=${nickname}&email=${email}&password=${password}`,
            credentials: 'include'
        }).then(response => response.ok && response.json())
            .then(json => {
                if (!json) return;
                if (json.code == 1) {
                    dispatch(registerSuccess(email, json.data));
                    dispatch(showAlert(json.msg, 2000, "success"));
                }
                else {
                    dispatch(registerFail(json.code, json.msg));
                    dispatch(showAlert(json.msg, 2000, "danger"));
                }
            }).catch(response => { return; });
    };
};

export const fetchUserInfo = () => {
    return (dispatch) => {
        dispatch(requestUserInfo());
        fetch(mUrl.people, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
            credentials: 'include'
        }).then(response => response.ok && response.json())
            .then(json => {
                if (!json) return;
                if (json.code == 1) {
                    dispatch(getUserInfoSuccess(json.data));
                }
                else dispatch(getUserInfoFail());
            }).catch(response => { return; });

    };
};