import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import InputField from '../../components/InputField/InputField'
import './LoginForm.css'
import Redirect from '../Redirect/Redirect'
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit'

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
                <InputField
                    label="E-mail"
                    name="email"
                    type="email"
                />
                <InputField
                    label="Senha"
                    name="password"
                    type="password"
                />
                <Redirect>
                    Esqueceu a sua senha?
                </Redirect>
                <ButtonSubmit
                    buttonLabel="Entrar"
                />
            </Form>
        </Formik>
    )
}

export default LoginForm