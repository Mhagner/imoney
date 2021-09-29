import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo/Logo';
import './Login.css';
import history from '../../history';
import Redirect from '../../components/Redirect/Redirect';

const Login = () => {
    return (
        <div className="login">
            <div className="contentLogin">
                <Logo
                    width={200}
                    height={80}
                />
                <LoginForm
                    errors="error teste"
                    handleSubmit={() => history.push('/home')}
                />
                <Redirect
                    url="/register"
                >
                    Ainda não tem uma conta? crie uma agora mesmo por aqui
                </Redirect>
            </div>
        </div>
    )
}

export default Login