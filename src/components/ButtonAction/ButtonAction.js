import { Link } from 'react-router-dom'
import './ButtonAction.css'

const ButtonAction = ({ className, children, url = "#" }) => {
    return (
        <Link
            className={`buttonAction ${className}`}
            to={url}
        >
            {children}
        </Link>
    )
}

export default ButtonAction