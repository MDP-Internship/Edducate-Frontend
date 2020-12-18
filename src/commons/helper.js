import { setLogin, setLoading } from '../store/actions'

export const ShowLoadingInterceptor = async (store, status) => {
    store.dispatch(setLoading(status))
}

export const TokenInvalidRouter = async (store, status) => {
    store.dispatch(setLogin(status))
}
