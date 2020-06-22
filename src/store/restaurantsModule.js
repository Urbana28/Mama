import {restaurantsAPI} from "../api/restaurantsApi";

export const restaurantsModule = {
    namespaced: true,
    state: {
        ethnicity: [],
        letters: [],
        selectedEthnicity: null,
        restaurants: [
            {
                id: 1, name: 'New Capital Seafood', img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg',
                ethnicity: 'Singaporean', place: ' Hainan ', distance: '1.2mi', priceCategory: '$$$'
            },
            {
                id: 2,
                name: 'BCD Tofuhouse',
                img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg',
                ethnicity: 'Cambodian',
                place: ' Hainan ',
                distance: '1.2mi',
                priceCategory: '$$$$'
            },
            {
                id: 3,
                name: 'Izakaya Hachi',
                img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg',
                ethnicity: 'Chinese',
                place: ' Hainan ',
                distance: '1.2mi',
                priceCategory: '$$'
            },
            {
                id: 4,
                name: 'Pho Super Bowl',
                img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg',
                ethnicity: 'Indonesian',
                place: ' Hainan ',
                distance: '1.2mi',
                priceCategory: '$$$'
            },
            {
                id: 5,
                name: 'Max’s Restaurant',
                img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg',
                ethnicity: 'Japanese',
                place: ' Hainan ',
                distance: '1.2mi',
                priceCategory: '$'
            },
            {
                id: 6,
                name: 'Five Star Seafood',
                img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg',
                ethnicity: 'Korean',
                place: ' Hainan ',
                distance: '1.2mi',
                priceCategory: '$$'
            },
            {
                id: 7,
                name: 'Star Sea',
                img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg',
                ethnicity: 'Korean',
                place: ' Hainan ',
                distance: '1.2mi',
                priceCategory: '$$'
            },
            {
                id: 8,
                name: 'Seafood',
                img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg',
                ethnicity: 'Japanese',
                place: ' Hainan ',
                distance: '1.2mi',
                priceCategory: '$$'
            }
        ],
        restaurantsByPrice: null,
        restaurantsByEthnicity: null,
        searchedRestaurants: null
    },
    mutations: {
        SET_ETHNICITY: (state, ethnicityList) => {
            state.ethnicity = ethnicityList
        },
        selectEthnicity(state, ethnId) {
            state.selectedEthnicity = state.ethnicity.filter(e => e.id === ethnId)
        },
        selectPriceCategory(state, value) {
            state.restaurantsByPrice = state.restaurants.filter(r => r.priceCategory === value)
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
            } catch (e) {
                console.log(e)
            }
        }
    },
    getters: {
        ETHNICITY(state) {
            return state.ethnicity
        }
    }
}