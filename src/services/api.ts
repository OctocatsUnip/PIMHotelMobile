import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.15.5:5000'
})

export {api}