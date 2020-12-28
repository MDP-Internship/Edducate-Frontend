import * as constants from './constants'
const initialState = {
    login: true, // true normalde
    loading: false,
    token: '',
    id: "",
    name: "",
    email: "",
    roleId: "",
    users: []
};

export default function store(state = initialState, action) {

    switch (action.type) {
        case constants.SET_LOGIN:
            return {
                ...state,
                login: action.value
            }

        case constants.SET_REGISTER:
            return {
                ...state,
                register: action.value
            }

        case constants.SET_TOKEN:
            return {
                ...state,
                token: action.value
            }
        case constants.SET_LOADING:
            return {
                ...state,
                loading: action.value
            }
        case constants.SET_ALL_USER:
            return {
                ...state,
                users: action.value
            }

        case constants.DECODE_TOKEN:
            return {
                ...state,
                id: action.id,
                name: action.name,
                email: action.email,
                roleId: action.roleId,
            }
        case constants.LOG_OUT:
            return {}
        default:
            return state;
    }

}

