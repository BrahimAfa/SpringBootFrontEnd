import axios from 'axios'
import { API_URL } from '../utils/constants'
import { to, authHeader } from '../utils/helper'

export const getProducts = async () => {
    return await to(axios.get(`${API_URL}product/`, authHeader()))

}
export const getProduct = async (id) => {
    return await to(axios.get(`${API_URL}product/find/${id}/`, authHeader()))

}
export const update = async (id, product) => {
    return await to(axios.put(`${API_URL}product/update/${id}/`, product, authHeader()))
}
export const save = async (product) => {
    return await to(axios.post(`${API_URL}product/add`, product,authHeader()))
}
export const delProduct = async (id) => {
    return await to(axios.delete(`${API_URL}product/delete/${id}/`,authHeader()))
}
