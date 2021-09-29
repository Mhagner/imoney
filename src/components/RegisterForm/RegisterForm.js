import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import InputField from '../../components/InputField/InputField'
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit'
import './RegisterForm.css';

const RegisterForm = ({ handleSubmit }) => {
    const validations = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
        repeatPassword: yup.string().min(8).required(),
    })

    return (
        <Formik
            initialValues={{}}
            onSubmit={handleSubmit}
            validationSchema={validations}
        >
            <Form className="loginForm">
                <InputField
                    className="inputRegister"
                    label="Nome completo"
                    name="name"
                />
                <InputField
                    className="inputRegister"
                    label="E-mail"
                    name="email"
                    type="email"
                />
                <InputField
                    className="inputRegister"
                    label="Senha"
                    name="password"
                    type="password"
                />
                <InputField
                    className="inputRegister"
                    label="Repita a senha"
                    name="repeatPassword"
                    type="password"
                />
                <ButtonSubmit
                    className="buttonRegister"
                    buttonLabel="Criar minha conta"
                />
            </Form>
        </Formik>
    )
}

export default RegisterForm;