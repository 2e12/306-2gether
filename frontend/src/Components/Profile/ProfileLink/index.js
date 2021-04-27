import React from 'react';
import { NavLink } from 'react-router-dom';
import './link.scss';
import chevron from '../../../assets/profile/chevron.png';

function ProfileLink({link, icon, title}) {

  return(
    <NavLink to={link} className="link-profile" >
      <div className="profile-menu">
        <img className="icon" src={icon} alt={title} />
        <span>{title}</span>
        <img className="chevron" src={chevron} alt="Chevron" />
      </div>
    </NavLink >
  )
}

export default ProfileLink;