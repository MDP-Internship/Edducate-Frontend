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
    console.log(result);
    debugger;
    if (result !== 'invalid') {
        debugger;
        if (result.type) {
            debugger;
            yield put(actions.setLogin(false));
            debugger;
            yield put(actions.setToken(result.token));
            if (window.location.hash === '#/MyAccounts') {
                console.log('istek atıldı');

            }

        } else {
            console.log('girdi');


            // yield put(actions.setToast(true, result.message, 'warning'));
        }
    } else {
        console.log('girdi');


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
