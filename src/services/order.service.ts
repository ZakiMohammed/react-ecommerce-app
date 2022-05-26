import axios from 'axios'
import { base } from '../models/constants'
import { Order } from '../models/order'

const axiosInstance = axios.create({
    baseURL: `${base.order}`
})

const createOrder = async (order: Order) => {
    const response = await axiosInstance.post('', order, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.status === 201 || response.status === 200) {
        return response.data
    } else {
        throw new Error(`[${response.status}]: ${response.statusText}`)
    }
}

const service = {
    createOrder
}

export default service