import axios from 'axios'
import { API_URL } from '../utils/constants'
import { to } from '../utils/helper'

export const getProducts = async () => {
    return await to(axios.get(`${API_URL}product/`))

}
export const getProduct = async (id) => {
    return await to(axios.get(`${API_URL}product/${id}/`))

}
export const update = async (id, product) => {
    return await to(axios.put(`${API_URL}product/${id}/`, product))
}
export const save = async (product) => {
    return await to(axios.post(`${API_URL}product/`, product))
}
export const delProduct = async (id) => {
    return await to(axios.delete(`${API_URL}product/${id}/`))
}