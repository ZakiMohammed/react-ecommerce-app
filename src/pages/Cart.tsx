import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import PageTitle from '../components/PageTitle'
import InventoryContext, { InventoryContextType } from '../context/inventory/InventoryContext'
import { CartItem } from '../models/cart'
import Modal from '../components/Modal'
import { CustomerOrderDetail, mockOrder } from '../models/order'
import orderService from '../services/order.service'
import utils from '../services/utils.service'


const Cart = () => {

    const [loading, setLoading] = useState(false)
    const { cart, setCart, setInventories } = useContext(InventoryContext) as InventoryContextType
    const [showModal, setShowModal] = useState(false)
    const [messageModal, setMessageModal] = useState('')

    const navigate = useNavigate()

    const changeQuantity = (e: any, cartItem: CartItem) => {
        const current = +e.target.value
        if (cartItem.inventory) {
            if (current > cartItem.inventory.Product_Qty_On_Hand) {
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

        const newCart = cart || []
        const index = newCart.findIndex(i => i.inventory.id === cartItem.inventory?.id)
        newCart[index] = {
            ...newCart[index],
            quantity: current
        }

        setCart(newCart)
    }

    const clickRemove = (e: any, cartItem: CartItem) => {
        const newCart = cart || []
        const index = newCart.findIndex(i => i.inventory.id === cartItem.inventory?.id)
        newCart.splice(index, 1)

        setCart(newCart)
    }

    const clickPlaceOrder = async (e: any) => {
        try {
            mockOrder.Customer_Order_Details = cart?.map(i => ({
                Product_ID: i.inventory.id,
                Product_Qty_Ordered: i.quantity,
                Product_Name: i.inventory.Product_Name,
                Product_Price: i.inventory.Product_Price,
                Product_Discount: 0,
                Product_Tax: 0,
                Total_Cost: i.quantity * i.inventory.Product_Price
            } as CustomerOrderDetail)) || []

            setLoading(true)

            const data = await orderService.createOrder(mockOrder)
            if (data) {
                setCart([])
                setInventories(null)

                setMessageModal('Yay! Order placed successfully. Auto redirecting please wait!')
                setShowModal(true)

                setTimeout(() => {
                    setShowModal(false)

                    // run navigate on different timeout to safely remove the modal
                    setTimeout(() => navigate('/products'), 0);
                }, 2500)
            } else {
                throw new Error('Got "false" from server while creating order.')
            }

        } catch (error) {
            console.log('Error Occurred', error);
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Modal title={'Message'} message={messageModal} showModal={showModal} setShowModal={setShowModal} />

            <PageTitle title='Cart'>
                <FontAwesomeIcon icon={solid('cart-shopping')} className='has-text-primary pr-2' />
            </PageTitle>

            {
                cart && cart.length ? (
                    <>
                        {loading && <Spinner />}

                        <div className='box mt-5'>
                            <div className="table-container">
                                <table className="table is-fullwidth">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '10%' }}></th>
                                            <th style={{ width: '45%' }}>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th style={{ width: '5%' }}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart && cart.map((cartItem: CartItem, index: number) => (
                                            <tr key={cartItem.id}>
                                                <td>
                                                    <figure className='image is-cart-image'>
                                                        <img className='is-smooth' src={utils.randomPhoto(60, 60)} alt="Inventory" />
                                                    </figure>
                                                </td>
                                                <td>{cartItem.inventory.Product_Name}</td>
                                                <td>{utils.currency(cartItem.inventory.Product_Price)}</td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="input input-cart-quantity mr-3"
                                                        min={1}
                                                        max={cartItem.inventory.Product_Qty_On_Hand}
                                                        value={cartItem.quantity}
                                                        onChange={(e: any) => changeQuantity(e, cartItem)}
                                                        disabled={loading} />
                                                </td>
                                                <td>{utils.currency(cartItem.inventory.Product_Price * cartItem.quantity)}</td>
                                                <td>
                                                    <button className='button is-danger is-outlined' onClick={(e) => clickRemove(e, cartItem)} disabled={loading}>
                                                        <FontAwesomeIcon icon={solid('trash-can')} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th></th>
                                            <th>Grand Total</th>
                                            <th></th>
                                            <th>{cart?.map(i => i.quantity).reduce(utils.sum)}</th>
                                            <th>{utils.currency(cart?.map(i => i.quantity * i.inventory.Product_Price).reduce(utils.sum))}</th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                        <div className='has-text-right'>
                            <button className='button is-primary' onClick={clickPlaceOrder} disabled={loading}>
                                Place Order
                                <FontAwesomeIcon icon={solid('check')} className='pl-2' />
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <section className="hero is-light">
                            <div className="hero-body has-text-centered">
                                <p className="title has-text-primary">
                                    <FontAwesomeIcon icon={solid('basket-shopping')} className='pr-2' />
                                    Oh!
                                </p>
                                <p className="subtitle has-text-grey-dark">
                                    Cart is empty, please add some products.
                                </p>
                            </div>
                        </section>
                    </>
                )
            }
        </>
    )
}

export default Cart