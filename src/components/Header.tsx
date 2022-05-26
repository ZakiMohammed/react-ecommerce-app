import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import InventoryContext, { InventoryContextType } from '../context/inventory/InventoryContext'
import utils from '../services/utils.service'
import { CONSTANTS } from '../models/constants'


const Header = () => {

    const { cart } = useContext(InventoryContext) as InventoryContextType
    const [isActive, setIsActive] = useState(false)

    const activeNavLink: (prop: any) => string = ({ isActive }) => 'navbar-item ' + (isActive ? 'has-text-primary' : '')

    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <NavLink className="navbar-item" to={'/'}>
                    <b className='has-text-primary'>
                        <FontAwesomeIcon icon={solid('shop')} className='has-text-primary pr-2' />
                        {CONSTANTS.APP_NAME}
                    </b>
                </NavLink>

                <button className={'navbar-burger burger ' + (isActive ? 'is-active' : '')} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setIsActive(!isActive)}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div id="navbarBasicExample" className={'navbar-menu ' + (isActive ? 'is-active' : '')}>
                <div className="navbar-end">
                    <NavLink className={activeNavLink} to={'/'}>
                        <FontAwesomeIcon icon={solid('house')} className='pr-2' />
                        Home
                    </NavLink>
                    <NavLink className={activeNavLink} to={'/products'}>
                        <FontAwesomeIcon icon={solid('helicopter')} className='pr-2' />
                        Products
                    </NavLink>
                    <NavLink className={activeNavLink} to={'/cart'}>
                        <FontAwesomeIcon icon={solid('cart-shopping')} className='pr-2' />
                        Cart ({(cart && cart.map(i => i.quantity).reduce(utils.sum, 0)) || 0})
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header