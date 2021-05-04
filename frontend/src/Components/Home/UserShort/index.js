import React from 'react';
import Swipe from 'react-easy-swipe';
import User from '../../User';
import Tags from '../../Tags';
import Buttons from '../../Buttons';

function UserShort({user, setShowUser, setAction}) {

  return(
    <Swipe
      onSwipeUp={() => setShowUser(false)}
      onSwipeLeft={() => setAction("dislike")}
      onSwipeRight={() => setAction("like")}
    >
      <div className="backgroundPic" style={{ backgroundImage: `url(${user.images[0]})` }}>
        <div className="infoUser">
          <div className="name">
            <User user={user} color="white" />
          </div>
          <div>
            <Tags tags={user.tags} color="black" />
          </div>
          <div>
            <Buttons setAction={setAction} />
          </div>
        </div>
      </div>
    </Swipe>
  )
}

export default UserShort;