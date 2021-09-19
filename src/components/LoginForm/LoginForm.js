import React from 'react'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import './LoginForm.css'

const LoginForm = ({ handleSubmit }) => {
    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })

    return (
        <Formik
            initialValues={{}}
            onSubmit={handleSubmit}
            validationSchema={validations}
        >
            <Form className="loginForm">
                <div className="groupField">
                    <label>Email</label>
                    <Field
                        name="email"
                        className="inputField"
                    />
                    <ErrorMessage
                        component="span"
                        name="email"
                        className="inputError"
                    />
                </div>
                <div className="groupField">
                    <label>Senha</label>
                    <Field
                        name="password"
                        className="inputField"
                    />
                    <ErrorMessage
                        component="span"
                        name="password"
                        className="inputError"
                    />
                </div>
                <button
                    className="buttonSubmit"
                    type="submit"
                >
                    Entrar
                </button>
            </Form>
        </Formik>
    )
}

export default LoginForm