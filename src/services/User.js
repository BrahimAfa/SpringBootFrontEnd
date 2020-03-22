import axios from 'axios'
import { API_URL } from '../utils/constants'
import { to } from '../utils/helper'

export const save = async (user) => {
    return await to(axios.post(`${API_URL}client/`, user))
   
}

export const login = async (user) => {
    return await to(axios.post(`${API_URL}login/`, user))
}