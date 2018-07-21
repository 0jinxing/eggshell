import {
    ADD_FAIL_INTERNET_REQUEST,
    CLEAR_ALL_FAIL_INTERNET_REQUESTS,
} from "../actions/networkReconnect";

export const networkReconnect = (state = [], action) => {
    switch (action.type) {
        case ADD_FAIL_INTERNET_REQUEST:
            return [
                ...state,
                action.requestAction
            ].filter(function (element, index, self) {//过滤重复数据
                return self.indexOf(element) === index;
            });
        case CLEAR_ALL_FAIL_INTERNET_REQUESTS:
            return [];
        default:
            return [...state];
    }
};