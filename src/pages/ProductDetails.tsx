import { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { v4 as uuid } from 'uuid'
import { Inventory } from '../models/inventory'
import inventoryService from '../services/inventory.service'
import PageTitle from '../components/PageTitle'
import InventoryContext, { InventoryContextType } from '../context/inventory/InventoryContext'
import Spinner from '../components/Spinner'
import Modal from '../components/Modal'
import utils from '../services/utils.service'
import { InventoryData } from './../data/data'

const ProductDetails = () => {

    const { inventories, cart, setCart } = useContext(InventoryContext) as InventoryContextType
    const [inventory, setInventory] = useState<Inventory | null>(null)
    const [loading, setLoading] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [showModal, setShowModal] = useState(false)
    const [messageModal, setMessageModal] = useState('')

    const params = useParams()

    const changeQuantity = (e: any) => {
        const current = +e.target.value
        if (inventory) {
            if (current > inventory.Product_Qty_On_Hand) {
                setMessageModal('Quantity is exceeding the availability limit!')
                setShowModal(true)
                return
            }
            if (current < 1) {
                setMessageModal('Quantity cannot be less than one!')
                setShowModal(true)
                return
            }
        }
        setQuantity(current)
    }

    const clickAddToCart = (e: any) => {
        const newCart = cart || []
        const index = newCart.findIndex(i => i.inventory.id === inventory?.id)
        if (index === -1) {
            newCart.push({
                id: uuid(),
                inventory: inventory as Inventory,
                quantity: +quantity
            })
        } else {
            newCart[index] = {
                ...newCart[index],
                quantity: newCart[index].quantity + quantity
            }
        }
        setCart(newCart)

        setMessageModal('Yay! Product is Added to Cart')
        setShowModal(true)

        setTimeout(() => setShowModal(false), 2000);
    }

    useEffect(() => {
        const getInventory = async () => {
            try {
                setLoading(true)

                if (params.id) {
                    // const data = await inventoryService.getInventory(params.id)
                    setInventory(InventoryData[0])
                } else {
                    throw new Error('Id is not provided')
                }

            } catch (error) {
                console.log('Error Occurred', error);
            } finally {
                setLoading(false)
            }
        }

        if (!inventories) {
            getInventory()
        } else {
            const found = inventories.find((i: Inventory) => i.id === params.id)
            found ? setInventory(found) : getInventory()
        }
    }, [inventories, params.id])

    return (
        <>
            <Modal title={'Message'} message={messageModal} showModal={showModal} setShowModal={setShowModal} />

            <NavLink to={'/products'} className='button is-light is-pulled-right'>
                <FontAwesomeIcon icon={solid('arrow-left')} className='has-text-grey' />
            </NavLink>

            <PageTitle title='Product Details'>
                <FontAwesomeIcon icon={solid('helicopter')} className='has-text-primary pr-2' />
            </PageTitle>

            {
                loading ? <Spinner /> : inventory && (
                    <>
                        <div className='columns pb-3'>
                            <div className='column is-4'>
                                <div className="is-flex is-justify-content-center">
                                    <figure className='image is-product-image'>
                                        <img className='is-smooth' src={utils.randomPhoto(400, 350)} alt="Profile" />
                                    </figure>
                                </div>
                            </div>
                            <div className="column">
                                <div className="box">
                                    <div className="columns is-mobile">
                                        <div className="column">
                                            <h4 className='has-text-grey'><b>Name</b></h4>
                                        </div>
                                        <div className="column has-text-right">
                                            <h4>{inventory.Product_Name}</h4>
                                        </div>
                                    </div>
                                    <div className="columns is-mobile">
                                        <div className="column">
                                            <h4 className='has-text-grey'><b>Description</b></h4>
                                        </div>
                                        <div className="column has-text-right">
                                            <h4>{inventory.Product_Desc}</h4>
                                        </div>
                                    </div>
                                    <div className="columns is-mobile">
                                        <div className="column">
                                            <h4 className='has-text-grey'><b>Price</b></h4>
                                        </div>
                                        <div className="column has-text-right">
                                            <h4>{utils.currency(inventory.Product_Price)}</h4>
                                        </div>
                                    </div>
                                    <div className="columns is-mobile">
                                        <div className="column">
                                            <h4 className='has-text-grey'><b>Available Quantity</b></h4>
                                        </div>
                                        <div className="column has-text-right">
                                            <h4>{inventory.Product_Qty_On_Hand}</h4>
                                        </div>
                                    </div>

                                    <div className='columns is-mobile'>
                                        <div className="column is-2">
                                            <input
                                                className="input"
                                                type="number"
                                                value={quantity}
                                                min={1}
                                                max={inventory.Product_Qty_On_Hand}
                                                onChange={changeQuantity} />
                                        </div>
                                        <div className="column">
                                            <button className='button is-primary' onClick={clickAddToCart}>
                                                <FontAwesomeIcon icon={solid('cart-shopping')} className='pr-2' />
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default ProductDetails