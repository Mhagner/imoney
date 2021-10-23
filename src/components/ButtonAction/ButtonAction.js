import { Link } from 'react-router-dom'
import './ButtonAction.css'

const ButtonAction = ({ className, children, url = "#", ref, props }) => {
    return (
        <Link
            className={`buttonAction ${className}`}
            to={url}
            ref={ref}
            {...props}
        >
            {children}
        </Link>
    )
}

export default ButtonAction