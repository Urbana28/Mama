import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.1.76:8000/'
})

export const restaurantsAPI = {
    getEthnicity () {
        return instance.get('api/v1/ethnicity')
    }
}