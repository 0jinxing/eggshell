import * as mUrl from '../url';

// 开始发送登陆请求
export const requestLoginMsg = () => ({
    type: 'REQUEST_LOGIN',
});

// 登陆成功
export const loginSuccess = (email, data) => ({
    type: 'LOGIN_SUCCESS',
    email,
    ...data
});

// 登陆失败
export const loginFail = (code, msg) => ({
    type: 'LOGIN_FAIL',
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
                if (json.code == 1) dispatch(loginSuccess(email, json.data));
                else dispatch(loginFail(json.code, json.msg));
            });
    };
};