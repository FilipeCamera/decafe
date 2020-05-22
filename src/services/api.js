import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://decafe-bistro.firebaseio.com/'
})