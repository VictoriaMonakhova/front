import axios from 'axios'; // axios - http client для node.js

const netClient = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
})

netClient.interceptors.request.use(
    (request) => {
        const { accessToken } = localStorage
        if (accessToken) {
            request.headers = {
                'Content-Type': 'application/json',
                'token': localStorage.accessToken
            }
        }
        return request
    },
    (error) => {
        return Promise.reject(error)
    },

)

export default netClient;