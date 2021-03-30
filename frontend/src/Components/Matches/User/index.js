import React, {useEffect, useState} from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import './user.scss';
import Anna_1 from './../../../assets/user/Anna_1.png';
import Anna_2 from './../../../assets/user/Anna_2.png';
import Anna_3 from './../../../assets/user/Anna_3.jpeg';
import Luana from './../../../assets/user/Luana.png';
import Lena from './../../../assets/user/Lena.png';
import chevron from '../../../assets/chevron_grey.png';
import Matches from '..';

function User() {
  const location = useLocation();
  const history = useHistory();
  var path = location.pathname.replace('/matches/', '');

  var matches = [
    {
      id: 1,
      userName: 'Anna',
      birthdate: new Date('1995-12-17'),
      name: 'Anna',
      lastName: 'Mustermann',
      gender: 'Weiblich',
      tags: ['Musik', 'Reisen', 'Fitness', 'Was trinken gehen', 'Mode'],
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      socialMedia: {
        instagram: 'Anna_123',
        facebook: 'Anna_123',
        snapchat: 'Anna_123',
        tiktok: 'Anna_123',
        num: '079 123 45 67',
        mail: 'Anna@gmail.com',
      },
      images: [
        Anna_1, Anna_2, Anna_3
      ]
    },
    {
      id: 2,
      userName: 'Luana',
      birthdate: new Date('2002-12-17'),
      name: 'Anna',
      lastName: 'Mustermann',
      gender: 'Weiblich',
      tags: ['Musik', 'Reisen', 'Fitness', 'Was trinken gehen', 'Mode'],
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      socialMedia: {
        instagram: 'Anna_123',
        facebook: 'Anna_123',
        snapchat: 'Anna_123',
        tiktok: 'Anna_123',
        num: '079 123 45 67',
        mail: 'Anna@gmail.com',
      },
      images: [
        Luana
      ]
    },
    {
      id: 3,
      userName: 'Lena',
      birthdate: new Date('2000-12-17'),
      name: 'Anna',
      lastName: 'Mustermann',
      gender: 'Weiblich',
      tags: ['Musik', 'Reisen', 'Fitness', 'Was trinken gehen', 'Mode'],
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      socialMedia: {
        instagram: 'Anna_123',
        facebook: 'Anna_123',
        snapchat: 'Anna_123',
        tiktok: 'Anna_123',
        num: '079 123 45 67',
        mail: 'Anna@gmail.com',
      },
      images: [
        Lena
      ]
    },
  ];

  var user = matches.find((user) => user.id === parseInt(path));
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
      {/* <p>User</p> */}
      <div className="infos">
        <div className="matches">
          <span className="name">{user.userName}</span>
          <span className="age">{calculateAge(user.birthdate)}</span>
          <p className="gender">{user.gender}</p>
        </div>
        {user.tags.map((tag, index) => {
          <p key={index}>{tag}</p>
        })}
      </div>
    </div>
  )
}

export default User;