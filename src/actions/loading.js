export const startLoading = (message) => ({
    type: "START_LOADING",
    message,
    show: true
});

export const endLoading = () => ({
    type: "END_LOADING",
    show: false
});