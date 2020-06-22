import instance from './axiosConfig'


export const restaurantsAPI = {
    getEthnicity () {
        return instance.get('api/v1/ethnicity/').then(res => {return res.data})
    }
}
