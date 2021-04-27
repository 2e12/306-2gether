import React from 'react';
import { NavLink } from 'react-router-dom';
import './matches.scss';
import search_color from './../../assets/search_color.png';
import { getMatches } from '../../utils/Matches';

function Matches() {
  var matches = getMatches();

  const calculateAge = (birthday) => { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  const searchMatches = (e) => {
    console.log(e.target.value);
  }

  const getInputField = () => {
    let text = document.querySelector(".text-input");
    text.style.display = "none";
    let input = document.querySelector("#match");
    input.style.display = "block";
  }

  return(
    <div className="container">
      <div className="container searchTag">
        <div className="row" onClick={() => getInputField()}>
          <img src={search_color} alt="search" className="search" />
          <span className="text-input" >{matches.length} Matches durchsuchen</span>
          <input id="match" type="text" name="match" onChange={(e) => searchMatches(e)} />
        </div>
      </div>
      <div className="list">
        {matches.map((user, index) => (
          <div className="user">
          <NavLink to={`matches/${user.id}`}  key={index} activeClassName="text-style">
            <div className="container">
              <div className="row">
                <div className="profile-pic" style={{ backgroundImage: `url(${user.images[0]})` }} />
                <div className="matches">
                  <span className="name">{user.userName}</span>
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