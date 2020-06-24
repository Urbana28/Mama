import instance from './axiosConfig'


export const restaurantsAPI = {
    getEthnicity () {
        return instance.get('api/v1/ethnicity/').then(res =>  res.data)
    },
    getRestaurants (price= 1) {
        return instance.get(`api/v1/restaurant/${price}`).then(res => res.data)
    },
    getRestaurantsBy (parameters) {
        const {ethnicity, price, q, lat, lon, radius} = parameters
        return instance.get(`api/v1/restaurant/?ethnicity=${ethnicity}&price=${price}&q=${q}&lat=${lat}&lon=${lon}&radius=${radius}`).
        then(res => res.data.results)
    },

}
