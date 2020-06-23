import instance from './axiosConfig'


export const authAPI = {
    signUpViaPhone(data) {
        return instance.post('api/v1/auth/sign_up_by_phone/', data)
    },
    login(data) {
        return instance.post('api/v1/auth/login/', data)
    }
}



