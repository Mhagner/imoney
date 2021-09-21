import ButtonAction from "../ButtonAction/ButtonAction"
import { IconProfile } from "../Icons/Icons"
import "./Profile.css"

const Profile = ({ profileName }) => {
    return (
        <div className="profile">
            <p>Bem-Vindo! <strong>{profileName}</strong></p>
            <ButtonAction
                className="buttonProfile"
            >
                <IconProfile />
            </ButtonAction>
        </div>
    )
}

export default Profile