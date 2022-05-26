import axios from 'axios'
import { Inventory } from '../models/inventory'
import { base } from '../models/constants'

const axiosInstance = axios.create({
    baseURL: `${base.inventory}`
})

const getInventories = async () => {
    const response = await axiosInstance.get('')
    if (response.status === 200) {
        return response.data as Inventory[]
    } else {
        throw new Error(`[${response.status}]: ${response.statusText}`)
    }
}

const getInventory = async (id: string) => {
    const response = await axiosInstance.get(`${id}`)
    if (response.status === 200) {
        return response.data as Inventory
    } else {
        throw new Error(`[${response.status}]: ${response.statusText}`)
    }
}

const service = {
    getInventories,
    getInventory
}

export default service