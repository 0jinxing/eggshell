const identity = (state = {}, action) => {
    switch (action.type) {
        // case 'REQUEST_LOGIN':
        //     // TODO 请求登陆
        //     break;
        case 'LOGIN_SUCCESS':
            // ? 登陆成功
            return {
                logined: true,
                nickname: action.nickname,
                role: action.role,
                sex: action.sex,
                imgurl: action.imgurl
            };
        case 'LOGIN_FAIL':
            // ? 登陆失败
            return {
                code: action.code,
                msg: action.msg
            };
        // case 'REQUEST_REGISTER':
        //     // TODO 请求注册
        //     break;
        // case 'REGISTER_SUCCESS':
        //     // TODO 注册成功
        //     break;
        case 'REGISTER_FAIL':
            // ? 注册失败
            return {
                code: action.code,
                msg: action.msg
            };
        // case 'LOGOUT':
        //     // TODO 退出
        //     break;
        default: return state;
    }
};

export default identity;