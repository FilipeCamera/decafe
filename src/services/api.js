import axios from 'axios'
import {API_URL} from '../../.env.json'

export const api = axios.create({
    baseURL: API_URL,
})