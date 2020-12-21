import * as constants from './constants'
// SET_LAYOUT
export const setLogin = (value) => ({ type: constants.SET_LOGIN, value });

// SER_REGİSTER
export const setRegister = (value) => ({ type: constants.SET_REGISTER, value });

// SET_LOADING
export const setLoading = (value) => ({ type: constants.SET_LOADING, value });

// DO_LOGIN
export const doLogin = (email, password) => ({ type: constants.DO_LOGIN, email, password });

// SET_TOKEN
export const setToken = (value) => ({ type: constants.SET_TOKEN, value });


export const getAllUser = () => ({ type: constants.GET_ALL_USER });

export const setAllUser = (value) => ({ type: constants.SET_ALL_USER, value });

export const logOutUser = () => ({ type: constants.LOG_OUT });

// SET_TOAST
// export const setToast = (value, message, variant) => ({
//     type: constants.SET_TOAST, value, message, variant,
// });

// CLOSE_TOAST
// export const closeToast = (value) => ({ type: constants.CLOSE_TOAST, value });

// FORGOT_PASSWORD
// export const forgotPassword = (email) => ({ type: constants.FORGOT_PASSWORD, email });

// CHANGE_PASSWORD
// export const changePassword = (password, token) => ({ type: constants.CHANGE_PASSWORD, password, token });
