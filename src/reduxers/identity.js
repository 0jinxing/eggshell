const identity = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                'logined': true,
                'account': action.account,
                'sex': action.sex,
                'avatar': action.avatar
            };
        case 'LOGOUT':
            return {
                ...state,
                'logined': false
            };
    }
};