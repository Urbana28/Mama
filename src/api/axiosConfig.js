
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://167.172.168.26/',
    headers: {
        'Content-Type': 'application/json',
    }
})

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.common['Authorization'] = `Bearer ${token}`
        } else {
            delete config.headers.common['Authorization']
            return config
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (res) => {
        return res
    },
    (err) => {
        if (err.response.status === 401) {
            localStorage.clear()
            window.location = '/login'
            return Promise.reject(err)
        }
        return Promise.reject(err)
    })

export default instance;