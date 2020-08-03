import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { endSession } from '../../redux/actions/userActions'
import { MenuPopUp } from './MenuPopUp'
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TopNavigation = () => {
  const dispatch = useDispatch()
  const [ anchorEl, setAnchorEl ] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = () => {
    console.log('yo')
    localStorage.removeItem('token')
    //dispatch action that clears isloggedin and stuff from redux store
    dispatch(endSession())
  }

  return (
    <div id="top-nav-container">
      <div>
        <Link to='/' >
            <FontAwesomeIcon icon={faHome} 
                            style={{ padding: '10px 20px'}}
            />
        </Link>
        {/* user icon that has logout option popout */}
        <FontAwesomeIcon icon={faUser} 
                         style={{ padding: '10px 20px'}}
                         onClick={ handleClick }
        />
        <MenuPopUp 
          open={ open }
          handleClose={ handleClose }
          anchorEl={ anchorEl }
          menuItemContent={
            [
              {
                text: "Sign Out",
                linkTo: "",
                handleClick: () => signOut()
              }
            ]
          }
          extraLinkAttribute={ "" }
        />
      </div>
    </div>
  )
}