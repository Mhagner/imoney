import LoginForm from '../../components/LoginForm/LoginForm';
import './Login.css';

const Login = () => {
    return (
        <>
            <LoginForm
                errors="error teste"
                handleSubmit={() => console.log("enviado!")}
            />
        </>
    )
}

export default Login