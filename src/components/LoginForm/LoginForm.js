import React from 'react'
import { Link } from 'react-router-dom'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import './LoginForm.css'
import { IconSecurity } from '../Icons/Icons'

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
                    <label>E-mail</label>
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
                        type="password"
                    />
                    <ErrorMessage
                        component="span"
                        name="password"
                        className="inputError"
                    />
                </div>
                <Link to="#">Esqueci minha senha</Link>
                <button
                    className="buttonSubmit"
                    type="submit"
                >
                    <IconSecurity />
                    Entrar
                </button>
                <Link to="#">
                    Ainda não tem uma conta? crie uma agora mesmo por aqui
                </Link>
            </Form>
        </Formik>
    )
}

export default LoginForm