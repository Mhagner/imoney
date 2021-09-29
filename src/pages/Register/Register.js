import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Logo from '../../components/Logo/Logo';
import history from '../../history';
import Redirect from '../../components/Redirect/Redirect';

import './Register.css'

const Register = () => {
    return (
        <div className="register">
            <div className="contentRegister">
                <Logo
                    width={200}
                    height={80}
                />
                <RegisterForm
                    handleSubmit={() => history.push('/home')}
                />
                <Redirect
                    url='/login'
                >
                    Já possui uma conta? entre por aqui
                </Redirect>
            </div>
        </div>
    )
}

export default Register
