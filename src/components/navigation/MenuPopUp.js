import React from 'react';
import { Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const MenuPopUp = (props) => {
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
                    <>
                      { props.anchorEl && menuItem.linkTo ? 
                        <Link to={ menuItem.linkTo + props.extraLinkAttribute }
                              onClick={ menuItem.handleClick }
                              className="link" >
                         <MenuItem>
                           { menuItem.text }
                        </MenuItem>
                      </Link> :
                      <MenuItem onClick={ menuItem.handleClick } >
                          { menuItem.text }
                      </MenuItem> 
                      }
                    </>
                  )
                  // if(props.anchorEl && menuItem.linkTo) {
                  //   return(
                  //     <Link to={ menuItem.linkTo + props.extraLinkAttribute }
                  //       onClick={ menuItem.handleClick }
                  //       className="link" >
                  //       <MenuItem>
                  //         { menuItem.text }
                  //       </MenuItem>
                  //     </Link>
                  //   )
                  // } else {
                  //   return (
                  //     <MenuItem onClick={ menuItem.handleClick } >
                  //       { menuItem.text }
                  //     </MenuItem>
                  //   )
                  // }
                  })}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  )
}
