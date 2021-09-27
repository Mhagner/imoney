import './ButtonSubmit.css'

const ButtonSubmit = ({ buttonLabel }) => {
    return (
        <button
            className="buttonSubmit"
            type="submit"
        >
            {buttonLabel}
        </button>
    )
}

export default ButtonSubmit