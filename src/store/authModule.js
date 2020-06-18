import {authAPI} from "../api/authAPI";

export const authModule = {
    namespaced: true,
    state: {
        token : null
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        }
    },
    actions : {

    }
}