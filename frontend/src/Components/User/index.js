import React from 'react';
import './user.scss';

function User({user, color, size}) {
  function calculateAge(birthday) { // birthday is a date
    var birthDate = new Date(birthday)
    var ageDifMs = Date.now() - birthDate.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  console.log(user);

  return(
    <div className={`user ${color} ${size}`}>
      <span className="name">{user.username}</span>
      <span className="age">{calculateAge(user.birthdate)}</span>
      <p className="gender">{user.gender}</p>
    </div>
  )
}

export default User;