import Vue from 'vue'
import Vuex from 'vuex'
import {restaurantsModule} from "./restaurantsModule";
import {authAPI} from "../api/authAPI";

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
    },
    mutations: {

    },
    actions: {
        async loginUser(context, payload) {
            try {
                const response = await authAPI.login(payload)
                console.log(response)
                localStorage.setItem('token', response.data.access)
            } catch (e) {
                console.log(e)
            }
        }
    },
    modules: {
        restaurantsModule
    }
})

export default store;
