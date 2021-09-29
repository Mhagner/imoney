import './ButtonSubmit.css'

const ButtonSubmit = ({ buttonLabel, className }) => {
    return (
        <button
            className={`buttonSubmit ${className}`}
            type="submit"
        >
            {buttonLabel}
        </button>
    )
}

export default ButtonSubmit