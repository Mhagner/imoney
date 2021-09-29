import LogoImg from '../../assets/images/logo.png';
import './Logo.css';

const Logo = ({ type = 'dark', width, height }) => {
    return (
        <div className="logoContainer">
            <img
                src={LogoImg}
                alt="logo"
                width={width}
                height={height}
            />
        </div>
    )
}

export default Logo