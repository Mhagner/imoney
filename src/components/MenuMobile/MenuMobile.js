import Drawer from '../Drawer/Drawer'
import { IconMenu } from '../Icons/Icons'

const MenuMobile = () => {
    return (
        <Drawer
            direction="left"
            className="drawerMenu"
        >
            <IconMenu />
        </Drawer>
    )

}

export default MenuMobile