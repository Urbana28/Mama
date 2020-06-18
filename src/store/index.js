import Vue from 'vue'
import Vuex from 'vuex'
import {restaurantsModule} from "./restaurantsModule";
import {authAPI} from "../api/authAPI";

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    token : null
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions : {
    async loginUser (payload) {
      try {
        debugger
        const response = await authAPI.login(payload)
        console.log(response)
         /*localStorage.setItem('token', response.data.access_token)
         context.commit('SET_TOKEN', response.data.access_token)*/
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
