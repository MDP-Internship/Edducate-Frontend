import { ShowLoadingInterceptor, TokenInvalidRouter } from './helper'
import { store } from '../index'

export const request = async (url, method, data = false, authorization = "") => {

    const headers = {
        "Content-Type": "application/json",
    };

    //headers token ekliyorr!!!
    if (authorization !== "") {
        headers.authorization = authorization
    }

    const options = {
        headers, method, redirect: "follow"
    }

    if (data) {
        
        options.body = data;
    }
    debugger;
    await ShowLoadingInterceptor(store, true);
    debugger;
    return fetch(url, options).then(response => {
        debugger;
        ShowLoadingInterceptor(store, false);
        //reponse 200 dışındaysa
        if (!response.ok) {
            debugger;
            if (response.status === 401) {
                //Yetkisini engellemek için 401=Yetkisiz giriş
                TokenInvalidRouter(store, true)
            }
            else if (response.status === 200) {
                TokenInvalidRouter(store, false)
            }

            throw Error(response.statusText);
        }
        return response
    })
        .then(response => {
            response.json()
            ShowLoadingInterceptor(store, false)
            debugger;
        })
        .catch(() => "invalid", ShowLoadingInterceptor(store, false))
}

//bellekte bulunan token ile giriş yapıyor

export const filesRequest = (url, method, data = "false", files) => {

    const headers = {
        auth: localStorage.getItem("token")
    }

    const options = {
        headers,
        method
    }

    const fd = new FormData();
    for (let i = 0; i < files.length; i++) {
        if (files[i]) {
            fd.append("file", files[i]);
        }
    }
    fd.append("data", data);
    options.body = fd;


    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText)
            }
            return response;
        })
        .then(response => response.json())
        .catch(() => "invalid")

}