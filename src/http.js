import axios from 'axios' //引入axios 可能是在这里写接口吧

const http = axios.create({
    // baseURL:'http://localhost:8080/'
    baseURL:process.env.VUE_APP_URL || '/',
})

export default http