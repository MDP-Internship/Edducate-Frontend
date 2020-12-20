import {
    call,
    take,
    all,
    put,
    // select
} from 'redux-saga/effects'
import { request } from "../commons/utils"
import { MAIN_URL } from "../commons/constant"

import * as constants from "./constants"
import * as actions from './actions';

// const getToken = (state) => state.token
function* doLogin(email, password) {

    const userInfoJson = JSON.stringify({ email, password })
    const result = yield call(request, MAIN_URL, "POST", userInfoJson);
    if (result !== 'invalid') {
        if (result.status === "ok") {
            yield put(actions.setLogin(false));
            yield put(actions.setToken(result.token));
            if (window.location.hash === '#/Home') {
                console.log('istek atıldı');
            }
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


//watcher

function* doLoginWatcher() {

    while (true) {

        const action = yield take(constants.DO_LOGIN);
        yield call(doLogin, action.email, action.password);
    }
}

export default function* rootSaga() {
    yield all([
        doLoginWatcher(),
    ]);
}
