export const login = (account, password) => ({
    type: 'LOGIN',
    account,
    password
});

export const logout = () => ({
    type: 'LOGOUT'
});