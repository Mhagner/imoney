import MenuMobile from "../MenuMobile/MenuMobile"
import Profile from "../Profile/Profile"
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <MenuMobile />
            <Profile
                profileName="Adriel"
            />
        </div>
    )
}

export default Header
