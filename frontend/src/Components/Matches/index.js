import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './matches.scss';
import search_color from './../../assets/search_color.png';
import { getMatches, getSuggestion } from '../../utils/Matches';

function Matches() {
  const [matches, setMatches] = useState(getMatches());

  const calculateAge = (birthday) => { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  const searchMatches = (e) => {
    // console.log(e.target.value);
  }

  return(
    <div className="container">
      <div className="container searchTag">
        <div className="row">
          <img src={search_color} alt="search" className="search" />
          <input id="match" type="text" name="match" onChange={(e) => searchMatches(e)} placeholder={`${matches ? matches.length : 0} Matches durchsuchen`} autoComplete="off" />
        </div>
      </div>
      <div className="list">
        {matches && matches.map((user, index) => (
          <div className="user" key={index}>
          <NavLink to={`/matches/${user.id}`}  key={index} activeClassName="text-style">
            <div className="container">
              <div className="row">
                <div className="profile-pic" style={user.images ? { backgroundImage: `url(${user.images[0]})` } : {}} />
                <div className="matches">
                  <span className="name">{user.username}</span>
                  <span className="age">{calculateAge(user.birthdate)}</span>
                  <p className="gender">{user.gender}</p>
                </div>
              </div>
            </div>
          </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Matches;