import authService from "../../services/authService"

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGİN_ERROR = "LOGİN_ERROR"
export const LOGOUT = "LOGOUT"

const loginSuccess = user => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
}

const loginError = error => {
    type: LOGİN_ERROR,
        error
}

export const login = (username, password) => {
    return dispacth => {
        authService.login(username, password)
            .then(data => {
                data.message ? dispacth(loginError(data.message)) : dispacth(loginSuccess(data))
            })
            .catch(err => dispacth(loginError(err)))
    }
}

export const logout = () => {
    authService.logout();
    return {
        type: LOGOUT
    }
}