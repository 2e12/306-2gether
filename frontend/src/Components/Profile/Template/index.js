import React, {useState, useEffect} from 'react';
import './template.scss';
import Andreas_1 from '../../../assets/andreas/Andreas_1.jpg';
import User from '../../User';
import { getUser } from '../../../utils/User';

function Template({children}) {
  const [user, setUser] = useState();


  // var user = {
  //   userName: "Andreas",
  //   birthdate: new Date('1998-12-17'),
  //   gender: "Mänlich",
  //   images: [
  //     Andreas_1
  //   ]
  // }

  useEffect(() => {
    const getData = async () => {
      setUser(await getUser());
    }
    getData();
  }, [])

  if (!user) {
    return null;
  }

  return(
    <div>
      <div className="red-box">
        <div className="container">
          <div className="row">
            <div className="white-circle">
              <div className="profile-pic" style={user.images ? { backgroundImage: `url(${user.images[0]})` } : {}} />
            </div>
            <div className="profile">
              <User user={user} size="small"/>
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