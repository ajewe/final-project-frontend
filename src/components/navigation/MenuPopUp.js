import React from 'react';
import { Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const MenuPopUp = (props) => {
  return (
    <Popper open={props.open} anchorEl={props.anchorEl} role={undefined} transition disablePortal>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
        >
          <Paper>
            <ClickAwayListener onClickAway={props.handleClose}>
              <MenuList autoFocusItem={props.open} id="menu-list-grow">
                {props.menuItemContent.map((menuItem, i) => (
                  <Link to={ props.anchorEl ? menuItem.linkTo + props.extraLinkAttribute : null }
                        onClick={ menuItem.handleClick } 
                        className="link"
                  >
                    <MenuItem onClick={ props.handleClose }>
                      { menuItem.text }
                    </MenuItem>
                  </Link>
                ))}
                {/* <Link to={props.anchorEl ? props.linkTo + props.extraLinkAttribute : null} 
                  className="link"
                >
                  <MenuItem onClick={props.handleClose}>
                    New Entry
                  </MenuItem>
                </Link> */}
                {/* <MenuItem onClick={props.handleClose}>Table Of Contents</MenuItem>
                <MenuItem onClick={props.handleClose}>View All</MenuItem> */}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  )
}
