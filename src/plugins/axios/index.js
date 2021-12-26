import axios from 'axios'

const request = axios.create({
  method: 'get',
  baseURL: 'http://localhost:9999/api',
  timeout: 6000,
  withCredentials: 'include'
})
export default request
