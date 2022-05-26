import { Inventory } from './inventory'

export interface CartItem {
    id: string
    inventory: Inventory
    quantity: number
}