import {restaurantsAPI} from "../api/restaurantsApi";

export const restaurantsModule = {
    namespaced: true,
    state: {
        ethnicity: [],
        letters: [],
        selectedEthnicity: null,
        restaurants: null,
        restaurantsByEthnicity: null,
        searchedRestaurants: null
    },
    mutations: {
        SET_ETHNICITY: (state, ethnicityList) => {
            state.ethnicity = ethnicityList
        },
        SET_LETTERS: (state, letters) => {
            state.letters = letters.filter((e, i) => {if(i < letters.length - 1) {return e.charAt(0) !== letters[i + 1].charAt(0)} return e}).map((i) => i.charAt(0))
        },
        selectEthnicity(state, ethnId) {
            state.selectedEthnicity = state.ethnicity.filter(e => e.id === ethnId)
        },
       SET_RESTAURANTS_LIST: (state, restaurantsList) => {
            state.restaurants = restaurantsList
       },
        setRestaurantsByEthnicity(state, value) {
            state.restaurantsByEthnicity = state.restaurants.filter(r => r.ethnicity === value)
        },
        searchRestaurant(state, value) {
            state.searchedRestaurants = state.restaurants.filter(r => r.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
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
        async getRestaurantsList (context, price) {
            try {
                //const list = await restaurantsAPI.getRestaurantsBy(id, price, query, lat, lon, radius)
                const list = await restaurantsAPI.getRestaurants(price)
                context.commit('SET_RESTAURANTS_LIST', list)
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
        }
    }
}