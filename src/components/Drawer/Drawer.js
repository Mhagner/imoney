import * as React from 'react';
import {
    SwipeableDrawer,
    Button,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
} from '@material-ui/core'

import './Drawer.css'

export default function Drawer({ children, direction, className, menuItems }) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Divider />
            {menuItems &&
                <List>
                    {menuItems.map((menuItem) => (
                        <ListItem button key={menuItem.text}>
                            <ListItemIcon>
                                {menuItem.icon}
                            </ListItemIcon>
                            <ListItemText primary={menuItem.text} />
                        </ListItem>
                    ))}
                </List>
            }
            <Divider />
        </Box>
    );

    return (
        <div>
            {[direction].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button className={className} onClick={toggleDrawer(anchor, true)}>{children}</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}