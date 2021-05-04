import React, {useState} from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './user.scss';
import chevron from '../../../assets/chevron_grey.png';
import Matches from '..';
import Tags from '../../Tags';
import SocialMedia from '../../SocialMedia';
import { getUser } from '../../../utils/Matches';
import UserCarousel from '../../../Pages/Carousel';

function User() {
  const location = useLocation();
  const history = useHistory();
  var path = location.pathname.replace('/matches/', '');

  const [user, setUser] = useState(getUser(path));

  if(!user) return <Matches />

  return(
    <div className="userM">
      <UserCarousel user={user} />
      <div onClick={() => history.goBack()} className="backBtn" >
        <img src={chevron} className="back" alt="back" />
        <span className="text">Back</span>
      </div>
      <div className="infos">
        <Info user={user} />
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