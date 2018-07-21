//失败动作网络重连

export const ADD_FAIL_INTERNET_REQUEST = "ADD_FAIL_INTERNET_REQUEST";
/**
 * 添加一个失败的网络请求动作
 * @param requestAction 动作（function）
 * @returns {{type: string, requestAction: *}}
 */
export const addFailInternetRequest = (requestAction) => ({
        type: ADD_FAIL_INTERNET_REQUEST,
        requestAction
    }
);
export const CLEAR_ALL_FAIL_INTERNET_REQUESTS = "CLEAR_ALL_FAIL_INTERNET_REQUESTS";
export const clearAllFailInternetRequests = () => ({
        type: CLEAR_ALL_FAIL_INTERNET_REQUESTS
    }
);

