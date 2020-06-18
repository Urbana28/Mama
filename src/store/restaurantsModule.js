import {restaurantsAPI} from "../api/restaurantsApi";

export const restaurantsModule = {
    namespaced: true,
    state: {
        ethnicity: [
            {id: 1, name: 'Cambodian', img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg'},
            {id: 2, name: 'Chinese', img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg'},
            {id: 3, name: 'Indonesian', img: 'https://www.wfd.org/wp-content/uploads/2019/10/LA-Laos-Flag-icon.png'},
            {id: 4, name: 'Japanese', img: 'https://www.wfd.org/wp-content/uploads/2019/10/LA-Laos-Flag-icon.png'},
            {id: 5, name: 'Korean', img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg'},
            {id: 6, name: 'Singaporean', img: 'https://www.wfd.org/wp-content/uploads/2019/10/LA-Laos-Flag-icon.png'},
            {id: 7, name: 'Thai', img: 'https://www.wfd.org/wp-content/uploads/2019/10/LA-Laos-Flag-icon.png'},
            {id: 8, name: 'Vietnamese', img: 'https://www.wfd.org/wp-content/uploads/2019/10/LA-Laos-Flag-icon.png'}
        ],
        selectedEthnicity : null,
        restaurants: [
            {id: 1, name: 'New Capital Seafood', img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg',
                ethnicity: 'Singaporean', place: ' Hainan ', distance: '1.2mi', priceCategory: '$$$'},
            {id: 2, name: 'BCD Tofuhouse', img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg', ethnicity: 'Cambodian',
                place: ' Hainan ', distance: '1.2mi', priceCategory: '$$$$'},
            {id: 3, name: 'Izakaya Hachi', img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg', ethnicity: 'Chinese',
                place: ' Hainan ', distance: '1.2mi', priceCategory: '$$'},
            {id: 4, name: 'Pho Super Bowl', img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg', ethnicity: 'Indonesian',
                place: ' Hainan ', distance: '1.2mi', priceCategory: '$$$'},
            {id: 5, name: 'Max’s Restaurant', img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg', ethnicity: 'Japanese',
                place: ' Hainan ', distance: '1.2mi', priceCategory: '$'},
            {id: 6, name: 'Five Star Seafood', img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg', ethnicity: 'Korean',
                place: ' Hainan ', distance: '1.2mi', priceCategory: '$$'},
            {id: 7, name: 'Star Sea', img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg', ethnicity: 'Korean',
                place: ' Hainan ', distance: '1.2mi', priceCategory: '$$'},
            {id: 8, name: 'Seafood', img: 'https://image.flaticon.com/icons/svg/3013/3013926.svg', ethnicity: 'Japanese',
                place: ' Hainan ', distance: '1.2mi', priceCategory: '$$'}
        ],
        restaurantsByPrice: null,
        restaurantsByEthnicity : null
    },
    mutations: {
        SET_ETHNICITY: (state, ethnicityList) => {
            state.ethnicity = ethnicityList
        },
        selectEthnicity (state, ethnId) {
            state.selectedEthnicity = state.ethnicity.filter(e => e.id === ethnId)
        },
        selectPriceCategory (state, value) {
            state.restaurantsByPrice = state.restaurants.filter (r => r.priceCategory === value)
        },
        setRestaurantsByEthnicity (state, value) {
            state.restaurantsByEthnicity = state.restaurants.filter(r => r.ethnicity === value)
        }
    },
    actions: {
        async SET_ETHNICITY_LIST (context) {
            const ethnicity = await restaurantsAPI.getEthnicity() //res.data.ethnicityList??
            context.commit('SET_ETHNICITY', ethnicity.data)
        }
    },
    getters : {
        ETHNICITY(state) {
            return state.ethnicity
        }
    }
}