const loading = (state = {}, action) => {
    switch (action.type) {
        case 'START_LOADING': return { ...action };
        case 'END_LOADING': return { ...action };
        default: return state;
    }
};

export default loading;