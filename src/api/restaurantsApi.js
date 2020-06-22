import instance from './axiosConfig'


export const restaurantsAPI = {
    getEthnicity () {
        return instance.get('api/v1/ethnicity/').then(res =>  res.data)
    },
    getRestaurants (price= 1) {
        return instance.get(`api/v1/restaurant/${price}`).then(res => res.data)
    },
    getRestaurantsBy (id, price = 1, query = '', lat, lon, radius = 20) {
        return instance.get(`api/v1/restaurant/${id}&${price}&${query}&${lat}&${lon}&${radius}`).then(res => {debugger})
    },

}
