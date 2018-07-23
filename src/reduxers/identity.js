const identity = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                logined: true,
                ...action
            };
        case 'LOGIN_FAIL':
            return {
                logined: false,
                ...action
            };
        case 'REGISTER_SUCCESS':
            return {
                ...action,
                logined: true
            };
        case 'REGISTER_FAIL':
            return {
                ...action,
                logined: false,
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...action,
                logined: false,
            };
        case 'LOGOUT_FAIL':
            return {
                ...action,
                logined: true
            };
        case "GET_USER_INFO_FAIL":
            return {
                ...action,
                logined: false
            };
        case "GET_USER_INFO_SUCCESS":
            return {
                ...action,
                logined: true
            };
        case "REQUEST_MODIFY_USER_INFO":
            return { ...state, request: true };
        default: return state;
    }
};

export default identity;