import './CardBox.css'

const CardBox = ({ className, title }) => {
    return (
        <div className={className}>
            <h1>{title}</h1>
        </div>
    )

}

export default CardBox