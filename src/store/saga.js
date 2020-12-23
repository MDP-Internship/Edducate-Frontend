import {
    call,
    take,
    all,
    put,
    select
} from 'redux-saga/effects'
import { request } from "../commons/utils"
import { MAIN_URL, LOGIN_URL } from "../commons/constant"

import * as constants from "./constants"
import * as actions from './actions';
import { useHistory } from "react-router-dom"
import jwtDecode from "jwt-decode"

const getToken = (state) => state.token
function* doLogin(email, password) {

    const userInfoJson = JSON.stringify({ email, password })
    const result = yield call(request, LOGIN_URL, "POST", userInfoJson);
    if (result !== 'invalid') {
        if (result.type) {

            const { id, name, email, roleId } = jwtDecode(result.token)

            yield put(actions.setLogin(false));
            yield put(actions.setToken(result.token));
            yield put(actions.decodeToken(id, name, email, roleId));

        }
        else {
            console.log("");


            // yield put(actions.setToast(true, result.message, 'warning'));
        }
    }
    else {
        // request catch düştüğünde çalışan yer
        // yield put(actions.setToast(true, 'Sunucu ile bağlantı kurulamadı!', 'warning'));
    }


}


function* register(value) {

    const userInfoJson = JSON.stringify(value)
    const result = yield call(request, MAIN_URL, "POST", userInfoJson);

    if (result !== 'invalid') {
        if (result.type) {
            window.location.pathname = "/app"
            yield put(actions.setLogin(false));
            yield put(actions.setToken(result.token));
        }
        else {
            // yield put(actions.setToast(true, result.message, 'warning'));
        }
    }
    else {
        // request catch düştüğünde çalışan yer
        // yield put(actions.setToast(true, 'Sunucu ile bağlantı kurulamadı!', 'warning'));
    }
}


function* getAllUser() {
    const result = yield call(request, `${MAIN_URL}/user/getAll`, 'GET', false, yield select(getToken));

    yield put(actions.setAllUser(result));
}

function* logOutUser() {

    localStorage.removeItem('persist:root')

    window.location.pathname = "/"
    yield put(actions.setLogin(true));
    yield put(actions.logOutUser());
}



//watcher

function* doLoginWatcher() {
    while (true) {
        const action = yield take(constants.DO_LOGIN);
        yield call(doLogin, action.email, action.password);
    }
}

function* registerWatcher() {
    while (true) {
        const action = yield take(constants.SET_REGISTER);
        yield call(register, action.value);
    }
}

function* getAllUserWatcher() {

    while (true) {
        const action = yield take(constants.GET_ALL_USER);
        yield call(getAllUser, action);

    }
}


function* logOutUserWatcher() {

    while (true) {
        const action = yield take(constants.LOG_OUT);
        yield call(logOutUser, action);

    }
}

export default function* rootSaga() {
    yield all([
        doLoginWatcher(),
        registerWatcher(),
        getAllUserWatcher(),
        logOutUserWatcher()
    ]);
}
