import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { MyContentDrawer } from './MyContentDrawer';

const drawerWidth = 180;

export const MyDrawer = ({ container, handleDrawerToggle, mobileOpen }) => {
    return (
        <Box
            component="nav"
            sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .root': {
                        backgroundColor: 'black',
                    },
                    '& .MuiDrawer-paper': {
                        color: 'white',
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        backgroundColor: 'secondary.dark',
                    },
                }}
            >
                <MyContentDrawer />
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', md: 'block' },
                    '& .MuiDrawer-paper': {
                        color: 'white',
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        backgroundColor: 'secondary.dark',
                    },
                }}
                open
            >
                <MyContentDrawer />
            </Drawer>
        </Box>
    );
};
