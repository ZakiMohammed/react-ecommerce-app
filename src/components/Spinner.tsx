import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Spinner = () => {
    return (
        <div className='box'>
            <FontAwesomeIcon icon={solid('spinner')} spin className='has-text-primary' /> 
            <span className='pl-2'>Loading please wait...</span>
        </div>
    )
}

export default Spinner
