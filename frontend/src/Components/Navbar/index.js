import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import tinder from '../../assets/navbar/tinder.png';
import tinder_red from '../../assets/navbar/tinder_red.png';
import deal from '../../assets/navbar/deal.png';
import deal_red from '../../assets/navbar/deal_red.png';
import user from '../../assets/navbar/user.png';
import user_red from '../../assets/navbar/user_red.png';
import './navbar.scss';

function Navbar() {
  const location = useLocation();
  var menu = [
    {
      title: 'Matches',
      path: '/matches',
      icon: tinder,
      active: tinder_red,
    },
    {
      title: 'Home',
      path: '/',
      icon: deal,
      active: deal_red,
    },
    {
      title: 'Profile',
      path: '/profile',
      icon: user,
      active: user_red,
    }
  ]

  const isPath = (nav) => {
    if (location.pathname !== '/' & nav.path === '/') {
      return false;
    } if (!location.pathname.includes(nav.path)) {
      return false;
    }
    else {
      return true;
    }
  }

  return(
    <div className="fixed-bottom">
      <div className="navbar">
        {menu.map((nav, index) => (
          <NavLink key={index} to={nav.path} activeClassName="active">
            <div className="menu">
              {!isPath(nav) ? 
                <img src={nav.icon} alt={nav.title} /> :
                <img src={nav.active} alt={nav.title} />  
              }
            </div>
          </NavLink >
        ))}
      </div>
    </div>
  )
}

export default Navbar;