import instance from './axiosConfig'


export const restaurantsAPI = {
    getEthnicity () {
        return instance.get('api/v1/ethnicity/').then(res =>  res.data)
    },
    getRestaurants (price= 1) {
        return instance.get(`api/v1/restaurant/${price}`).then(res => res.data)
    },
    getRestaurantsBy (id='', price = 1, query = '', lat =34.052235, lon=-118.243683, radius = 20) {
        return instance.get(`api/v1/restaurant/?id=${id}&price=${price}&query=${query}&lat=${lat}&lon=${lon}&radius=${radius}`).then(res => res.data.results)
    },

}
