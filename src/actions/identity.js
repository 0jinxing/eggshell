import * as api from '../api';

export const requestLoginMsg = () => ({
    type: 'REQUEST_LOGIN',
});

export const receiveLoginMsg = (email, data) => ({
    type: 'RECEIVE_LOGIN',
    email,
    ...data
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const fetchLogin = (email, password) => {
    return (dispatch) => {
        dispatch(requestLoginMsg());

        fetch(api.login, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: { email, password },
            credentials: 'include'
        }).then(response => response.json())
            .then(json => {
                dispatch(receiveLoginMsg(json.data));
            });
    };
};