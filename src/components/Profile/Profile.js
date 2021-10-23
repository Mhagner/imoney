import Drawer from "../Drawer/Drawer"
import { IconProfile } from "../Icons/Icons"
import "./Profile.css"

const Profile = ({ profileName }) => {
    return (
        <div className="profile">
            <p>Bem-Vindo! <strong>{profileName}</strong></p>
            <Drawer
                direction="right"
                className="drawerMenu"
            >
                <IconProfile />
            </Drawer>
        </div>
    )
}

export default Profile