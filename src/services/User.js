import axios from 'axios'
import { API_URL } from '../utils/constants'
import { to, authHeader } from '../utils/helper'

export const save = async (user) => {
    return await to(axios.post(`${API_URL}auth/signup`, user))
}

export const getClient = async (id) => {
    return await to(axios.get(`${API_URL}client/find/${id}`, authHeader()))
}

export const getClients = async () => {
    return await to(axios.get(`${API_URL}client/`, authHeader()))
}

export const getRole = async (id) => {
    const { result, err } = await to(axios.get(`${API_URL}client/find/${id}`, authHeader()))
    if (err) return null;
    console.log("heey doo", result.apiResponse.data.role);
    return result.apiResponse.data.role;

}

export const delUser = async (id) => {
    return await to(axios.delete(`${API_URL}client/delete/${id}/`, authHeader()))
}
export const update = async (id, client) => {
    return await to(axios.put(`${API_URL}client/update/${id}/`, client, authHeader()))
}

export const login = async (user) => {
    console.log(user);
    return await to(axios.post(`${API_URL}auth/login`, user))
}