import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  listItem: {
    color: "rgb(32, 65, 97)",
  }
}))

export const MenuPopUp = (props) => {
  const classes = useStyles();

  return (
    <Popper open={props.open} 
            anchorEl={props.anchorEl} 
            role={undefined} 
            transition disablePortal >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }} >
          <Paper>
            <ClickAwayListener onClickAway={props.handleClose}>
              <MenuList autoFocusItem={ props.open } id="menu-list-grow">
                {props.menuItemContent.map((menuItem, i) => {
                  return (
                    <div>
                      { props.anchorEl && menuItem.linkTo ? 
                        <Link to={ menuItem.linkTo + props.extraLinkAttribute }
                              onClick={ menuItem.handleClick }
                              className="link" >
                         <MenuItem className={ classes.listItem }>
                           { menuItem.text }
                        </MenuItem>
                      </Link> :
                      <MenuItem onClick={ menuItem.handleClick } 
                                className={ classes.listItem }>
                          { menuItem.text }
                      </MenuItem> 
                      }
                    </div>
                  )
                  })}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  )
}
