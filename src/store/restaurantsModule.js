import {restaurantsAPI} from "../api/restaurantsApi";

export const restaurantsModule = {
    namespaced: true,
    state: {
        ethnicity: [],
        letters: [],
        restaurants: null,
        markers: null,
        searchedRestaurants: null,
        chosenRestaurant: null
    },
    mutations: {
        SET_ETHNICITY: (state, ethnicityList) => {
            state.ethnicity = ethnicityList
        },
        SET_LETTERS: (state, letters) => {
            state.letters = letters.filter((e, i) => {if(i < letters.length - 1) {return e.charAt(0) !== letters[i + 1].charAt(0)} return e}).map((i) => i.charAt(0))
        },
       SET_RESTAURANTS_LIST: (state, restaurantsList) => {
            state.restaurants = restaurantsList
       },
        SET_MARKERS: (state, list) => {
            state.markers = list
        },
        SET_CHOSEN_RESTAURANT: (state, value) => {
            state.chosenRestaurant = value
        }
    },
    actions: {
        async getEthnicityList(context) {
            try {
                const list = await restaurantsAPI.getEthnicity()
                context.commit('SET_ETHNICITY', list)
                let names = list.map( l => l.name)
                context.commit('SET_LETTERS', names)
            } catch (e) {
                console.log(e)
            }
        },
        async getRestaurantsList (context, queryParameters) {
            try {
                const list = await restaurantsAPI.getRestaurantsBy(queryParameters)
                console.log(list)
                context.commit('SET_RESTAURANTS_LIST', list)
                context.commit('SET_MARKERS', list)
            } catch (e) {
                console.log(e)
            }
        }
    },
    getters: {
        ETHNICITY (state) {
            return state.ethnicity
        },
        LETTERS (state) {
            return state.letters
        },
        RESTAURANTS (state) {
            return state.restaurants
        },
        MARKERS (state) {
            return state.markers
        },
        CHOSEN_RESTAURANT (state) {
            return state.chosenRestaurant
        }
    }
}