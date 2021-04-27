import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './user.scss';
import chevron from '../../../assets/chevron_grey.png';
import Matches from '..';
import Tags from '../../../Pages/Tags';
import SocialMedia from '../../../Pages/SocialMedia';
import { getUser } from '../../../utils/Matches';

function User() {
  const location = useLocation();
  const history = useHistory();
  var path = location.pathname.replace('/matches/', '');

  var user = getUser(path);
  function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  if(!user) return <Matches />

  return(
    <div className="userM">
      <div className="profilePic" style={{ backgroundImage: `url(${user.images[0]})` }}/>
      <div onClick={() => history.goBack()} className="backBtn" >
        <img src={chevron} className="back" alt="back" />
        <span className="text">Back</span>
      </div>
      <div className="infos">
        <div className="matches">
          <span className="name">{user.userName}</span>
          <span className="age">{calculateAge(user.birthdate)}</span>
          <p className="gender">{user.gender}</p>
        </div>
        <div className="tags-matches">
          <Tags tags={user.tags} />
        </div>
        <div className="description">
          {user.description}
        </div>
        <div className="socialMedia" >
          <SocialMedia user={user} />
        </div>
      </div>
    </div>
  )
}

export default User;