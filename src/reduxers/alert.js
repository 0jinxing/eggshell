const alert = (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_ALERT':
            return {
                ...action
            };
        case 'CLOSE_ALERT':
            return {
                ...action
            };
        default: return state;
    }
};

export default alert;