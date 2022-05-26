import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { CONSTANTS } from '../models/constants'

const Home = () => {
    return (
        <section className="hero is-light is-medium">
            <div className="hero-body has-text-centered">
                <p className="subtitle has-text-grey">Hey, <i>there</i>!</p>
                <p className="title">
                    Welcome to <b className='has-text-primary'> <FontAwesomeIcon icon={solid('shop')} className='has-text-primary pr-2' />{CONSTANTS.APP_NAME}</b>
                </p>
                <p className="subtitle has-text-grey">
                    An implementation of ECommerce API
                </p>
            </div>
        </section>
    )
}

export default Home