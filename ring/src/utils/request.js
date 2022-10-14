import axios from "axios";

// 创建axios实例
const request = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

export default request;