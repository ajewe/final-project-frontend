import React from 'react';
import { MenuPopUp } from './MenuPopUp'
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   paper: {
//     marginRight: theme.spacing(2),
//   },
// }));

export const LeftNavigation = () => {
  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
        {['Inventory', 'Members', 'Announcements'].map((text) => (
          <ListItem
            button
            key={ text }
          >
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Book 1', 'Book 2', 'Book 3'].map((text, index) => (
          <ListItem 
            button 
            key={ text }
            onClick={ handleClick }
            aria-describedby={ id }
          >
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <MenuPopUp 
        open={ open }
        handleClose={ handleClose }
        anchorEl={ anchorEl }
      />
    </Drawer>
  )
}