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
        default: return state;
    }
};

export default identity;