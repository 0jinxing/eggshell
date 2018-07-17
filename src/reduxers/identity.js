const identity = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                'logined': true,
                'nickname': action.nickname,
                'identity': action.identity,
                'sex': action.sex,
                'imgurl': action.imgurl
            };
        case 'LOGOUT':
            return {
                'logined': false
            };
        default: return state;
    }
};

export default identity;