import instance from './axiosConfig'


export const restaurantsAPI = {
    getEthnicity () {
        return instance.get('api/v1/ethnicity/')
    }
}
