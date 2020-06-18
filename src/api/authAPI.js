import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.1.76:8000/',
    headers: {
        'Content-Type': 'application/json',
    }
})

export const authAPI = {
    signUpViaPhone (data) {
        return instance.post('api/v1/auth/sign_up_by_phone/', data)
    },
    login (data) {
        return instance.post('api/v1/auth/login/', data)
    }
}