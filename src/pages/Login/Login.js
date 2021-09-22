import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo/Logo';
import './Login.css';
import history from '../../history';

const Login = () => {
    return (
        <div className="login">
            <div className="contentLogin">
                <Logo
                    width={213}
                    height={76}
                />
                <LoginForm
                    errors="error teste"
                    handleSubmit={() => history.push('/')}
                />
            </div>
        </div>
    )
}

export default Login