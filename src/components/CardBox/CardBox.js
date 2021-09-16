import { Link } from 'react-router-dom'

import './CardBox.css'


const CardBox = ({ className, title, value, buttonValue, url }) => {
    return (
        <div className={`cardBox ${className}`}>
            <div className='cardBox__contentValue'>
                <p>{title}</p>
                <span>R$ {value}</span>
            </div>
            <Link
                to={url}
                className='cardBox__Button'>
                {buttonValue}
            </Link>
        </div>
    )

}

export default CardBox