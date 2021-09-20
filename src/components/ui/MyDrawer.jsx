import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { MyContentDrawer } from './MyContentDrawer';

const drawerWidth = 200;

export const MyDrawer = ({ container, handleDrawerToggle, mobileOpen }) => {
   return (
      <Box
         component="nav"
         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
               display: { xs: 'block', sm: 'none' },
               '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: drawerWidth,
               },
            }}
         >
            <MyContentDrawer />
         </Drawer>
         <Drawer
            variant="permanent"
            sx={{
               display: { xs: 'none', sm: 'block' },
               '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: drawerWidth,
               },
            }}
            open
         >
            <MyContentDrawer />
         </Drawer>
      </Box>
   );
};
