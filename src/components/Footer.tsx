import { CONSTANTS } from "../models/constants"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered has-text-grey">
                <p>{CONSTANTS.APP_NAME} {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer