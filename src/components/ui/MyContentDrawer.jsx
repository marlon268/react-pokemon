import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export const MyContentDrawer = () => {
   return (
      <div>
         <Toolbar>
            <Typography variant="h6" color="initial">
               PokeNav
            </Typography>
         </Toolbar>
         <Divider />
         <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
               <ListItem button key={text}>
                  <ListItemIcon>
                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
               </ListItem>
            ))}
         </List>
         <Divider />
         <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
               <ListItem button key={text}>
                  <ListItemIcon>
                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
               </ListItem>
            ))}
         </List>
      </div>
   );
};
