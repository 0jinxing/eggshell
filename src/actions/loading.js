export const startLoading = (message) => ({
    type: "START_LOADING",
    message
});

export const endLoading = () => ({
    type: "END_LOADING"
});