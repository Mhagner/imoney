import LogoDark from '../../assets/images/logo-dark.png';
import './Logo.css';

const Logo = ({ type = 'dark', width, height }) => {
    return (
        <div className="logoContainer">
            <img
                src={LogoDark}
                alt="logo"
                width={width}
                height={height}
            />
        </div>
    )
}

export default Logo