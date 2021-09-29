import ButtonAction from "../ButtonAction/ButtonAction"
import { IconArrowLeft, IconArrowRight } from "../Icons/Icons"
import "./Arrows.css"

const Arrows = ({ direction = "right" }) => {
    return (
        <>
            {direction === "left" ?
                <ButtonAction
                    className="buttonArrow"
                >
                    <IconArrowLeft />
                </ButtonAction> :
                <ButtonAction
                    className="buttonArrow"
                >
                    <IconArrowRight />
            </ButtonAction>

            }
        </>
    )
}

export default Arrows