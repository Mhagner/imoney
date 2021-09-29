import Arrows from "../Arrows/Arrows"
import "./Pagination.css"

const Pagination = ({ currentMonth }) => {
    return (
        <div className="pagination">
            <Arrows
                direction="left"
            />
            <p>{currentMonth}</p>
            <Arrows
                direction="right"
            />
        </div>
    )
}

export default Pagination