export const showAlert = (message, duration, level, title) => ({
    type: 'SHOW_ALERT',
    message,
    duration,
    level,
    title,
    show: true
});

export const closeAlert = () => ({
    type: 'CLOSE_ALERT',
    show: false
});