import React from 'react';
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux';
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TopNavigation = () => {

  return (
    <div id="top-nav-container">
      <div>
      <Link to='/' />
          <FontAwesomeIcon icon={faHome} style={{ padding: '0 20px'}} />
        {/* user icon that has logout option popout */}
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  )
}