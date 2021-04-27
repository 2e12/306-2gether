import React from 'react';
import './home.scss';
import { getUsers } from '../../utils/Matches';
import User from '../../Pages/User';
import Tags from '../../Pages/Tags';
import Buttons from '../../Pages/Buttons';
import arrow from '../../assets/home/arrow.png';

function Home() {
  var users = getUsers();
  var user = users[0];

  return(
    <div>
      <div className="backgroundPic" style={{ backgroundImage: `url(${user.images[0]})` }}>
        <div className="infoUser">
          <div className="name">
            <User user={user} color="white" />
          </div>
          <div>
            <Tags tags={user.tags} color="black" />
          </div>
          <div>
            <Buttons />
          </div>
        </div>
      </div>
      <div>
        <div className="infoDetailsBackground" style={{ backgroundImage: `url(${user.images[0]})` }}/>
        <div className="infoDetails">
          <div className="arrowUser">
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
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;