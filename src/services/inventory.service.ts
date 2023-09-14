import axios from 'axios'
import { Inventory } from '../models/inventory'
import { base } from '../models/constants'

const axiosInstance = axios.create({
    baseURL: `${base.inventory}`
})

const getInventories = async () => {
    const response = await axiosInstance.get('', getConfig())
    if (response.status === 200) {
        return response.data as Inventory[]
    } else {
        throw new Error(`[${response.status}]: ${response.statusText}`)
    }
}

const getInventory = async (id: string) => {
    const response = await axiosInstance.get(`${id}`, getConfig())
    if (response.status === 200) {
        return response.data as Inventory
    } else {
        throw new Error(`[${response.status}]: ${response.statusText}`)
    }
}

const getConfig = () => {
    return {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    };
}

const service = {
    getInventories,
    getInventory
}

export default service