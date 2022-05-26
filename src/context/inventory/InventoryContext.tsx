import { useState, createContext } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { Inventory } from '../../models/inventory'
import { CartItem } from '../../models/cart'
import { CONSTANTS } from '../../models/constants'

export interface InventoryContextType {
    inventories: Inventory[] | null;
    setInventories: React.Dispatch<React.SetStateAction<Inventory[] | null>>;
    cart: CartItem[] | null;
    setCart: (cartItems: CartItem[]) => void;
}

const InventoryContext = createContext<InventoryContextType | null>(null)

export const InventoryProvider = (props: any) => {

    const [inventories, setInventories] = useState<Inventory[] | null>(null)
    const [cart, setCart] = useLocalStorage<CartItem[] | null>(CONSTANTS.LOCAL_STORAGE.CART_ITEM, null)

    const value = {
        inventories,
        setInventories,
        cart,
        setCart
    }

    return (
        <InventoryContext.Provider value={value}>
            {props.children}
        </InventoryContext.Provider>
    )
}

export default InventoryContext