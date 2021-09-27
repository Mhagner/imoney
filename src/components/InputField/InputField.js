
import { ErrorMessage, Field } from 'formik'

import './InputField.css'

const InputField = ({ label, name, type = "text", className }) => {
    return (
        <div className={`groupField ${className}`}>
            <label>{label}</label>
            <Field
                name={name}
                className="inputField"
                type={type}
            />
            <ErrorMessage
                component="span"
                name={name}
                className="inputError"
            />
        </div>
    )
}

export default InputField