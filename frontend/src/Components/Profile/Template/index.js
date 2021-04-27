import React from 'react';
import './template.scss';
import Andreas_1 from '../../../assets/andreas/Andreas_1.jpg';
import User from '../../../Pages/User';

function Template({children}) {
  var user = {
    userName: "Andreas",
    birthdate: new Date('1998-12-17'),
    gender: "Mänlich",
    images: [
      Andreas_1
    ]
  }

  return(
    <div>
    <div className="red-box">
      <div className="container">
        <div className="row">
          <div className="white-circle">
            <div className="profile-pic" style={{ backgroundImage: `url(${user.images[0]})` }} />
          </div>
          <User user={user} size="small"/>
        </div>
      </div>
    </div>
    <div className="white-box">
      {children}
    </div>
    </div>
  )
}

export default Template;