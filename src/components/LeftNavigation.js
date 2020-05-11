import React from 'react';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

export const LeftNavigation = () => {
  return (
    <Drawer
      // className={classes.drawer}
      variant="permanent"
      // classes={{
      //   paper: classes.drawerPaper,
      // }}
      anchor="left"
    >
      {/* <div className={classes.toolbar} /> */}
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}