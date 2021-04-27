import React from 'react';
import './template.scss';
import Andreas_1 from '../../../assets/andreas/Andreas_1.jpg';

function Template({children}) {

  return(
    <div>
    <div className="red-box">
      <div className="container">
        <div className="row">
          <div className="white-circle">
            <div className="profile-pic" style={{ backgroundImage: `url(${Andreas_1})` }} />
          </div>
          <div className="profile">
            <span className="name">Andreas</span>
            <span className="age">23</span>
            <p className="gender">Männlich</p>
          </div>
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