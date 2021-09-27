import { Link } from 'react-router-dom'
import './Redirect.css';

const Redirect = ({ children, url = "#" }) => {
    return (
        <Link
            className="redirect" 
            to={url}>
            {children}
        </Link>
    )
}

export default Redirect