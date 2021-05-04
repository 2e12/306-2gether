import React from 'react';
import User from '../../User';
import Tags from '../../Tags';
import Buttons from '../../Buttons';
import arrow from '../../../assets/home/arrow.png';
import UserCarousel from '../../Carousel';

function UserDetails({user, setShowUser, setAction}) {
  return(
    <div>
      {/* <div className="infoDetailsBackground" style={{ backgroundImage: `url(${user.images[0]})` }}/> */}
      <div className="infoDetailsBackground">
        <UserCarousel user={user} />
      </div>
      <div className="infoDetails">
        <div className="arrowUser" onClick={() => setShowUser(true)}>
          <img alt="arrow to top" src={arrow} />
        </div>
        <div>
          <User user={user} />
        </div>
        <div className="tagsUser">
          <Tags tags={user.tags} />
        </div>
        <div>
          {user.description}
        </div>
        <div>
          <Buttons setAction={setAction} />
        </div>
      </div>
    </div>
  )
}

export default UserDetails;