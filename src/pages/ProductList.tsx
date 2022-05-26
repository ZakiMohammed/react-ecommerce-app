import { useEffect, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { Inventory } from '../models/inventory'
import inventoryService from '../services/inventory.service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import PageTitle from '../components/PageTitle'
import InventoryContext, { InventoryContextType } from '../context/inventory/InventoryContext'
import utils from '../services/utils.service'


const ProductList = () => {

    const [loading, setLoading] = useState(false)
    const { inventories, setInventories } = useContext(InventoryContext) as InventoryContextType

    useEffect(() => {
        const getInventories = async () => {
            try {
                setLoading(true)

                const data = await inventoryService.getInventories()

                setInventories(data)

            } catch (error) {
                console.log('Error Occurred', error);
            } finally {
                setLoading(false)
            }
        }

        if (!inventories) {
            getInventories()
        }

    }, [inventories, setInventories])

    return (
        <>
            <PageTitle title='Product List'>
                <FontAwesomeIcon icon={solid('helicopter')} className='has-text-primary pr-2' />
            </PageTitle>
            {
                loading ? <Spinner /> : (
                    <div className='columns is-multiline'>
                        {inventories && inventories.filter(i => i.Product_Qty_On_Hand > 0).map((inventory: Inventory, index: number) => (
                            <div className='column is-4-tablet is-3-widescreen' key={inventory.id}>
                                <div className="card">
                                    <div className="card-image">
                                        <NavLink to={'/products/' + inventory.id}>
                                            <figure className="image is-4by3">
                                                <img src={utils.randomPhoto(400, 400)} alt="Inventory" />
                                            </figure>
                                        </NavLink>
                                    </div>
                                    <div className="card-content">
                                        <div className="content">
                                            <h5 className='has-text-grey-dark mb-1'><b>{inventory.Product_Name}</b></h5>
                                            <p className='has-text-grey mb-3'>
                                                Quantity: {inventory.Product_Qty_On_Hand}
                                            </p>
                                            <div className='is-flex is-justify-content-space-between is-align-items-center'>
                                                <h2 className='has-text-primary m-0'>{utils.currency(inventory.Product_Price)}</h2>
                                                <NavLink to={'/products/' + inventory.id} className='button is-light is-pulled-right'>
                                                    <FontAwesomeIcon icon={solid('arrow-right')} className='has-text-grey' />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </>
    )
}

export default ProductList