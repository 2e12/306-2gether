import React from 'react';
import { NavLink } from 'react-router-dom';
import './matches.scss';
import Anna_1 from './../../assets/user/Anna_1.png';
import Anna_2 from './../../assets/user/Anna_2.png';
import Anna_3 from './../../assets/user/Anna_3.jpeg';
import Luana from './../../assets/user/Luana.png';
import Lena from './../../assets/user/Lena.png';
import search_color from './../../assets/search_color.png';

function Matches() {

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
      socialMedia: [
        {
          name: 'instagram',
          userName: 'Anna_123',
          icon: '',
        },
        {
          facebook: 'facebook',
          userName: 'Anna_123',
          icon: '',
        },
        {
          name: 'snapchat',
          userName: 'Anna_123',
          icon: '',
        },
        {
          facebook: 'tiktok',
          userName: 'Anna_123',
          icon: '',
        },
        {
          name: 'num',
          userName: '079 123 45 67',
          icon: '',
        },
        {
          facebook: 'mail',
          userName: 'Anna@gmail.com',
          icon: '',
        },
      ],
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
      socialMedia: [
        {
          name: 'instagram',
          userName: 'Anna_123',
          icon: '',
        },
        {
          facebook: 'facebook',
          userName: 'Anna_123',
          icon: '',
        },
        {
          name: 'snapchat',
          userName: 'Anna_123',
          icon: '',
        },
        {
          facebook: 'tiktok',
          userName: 'Anna_123',
          icon: '',
        },
        {
          name: 'num',
          userName: '079 123 45 67',
          icon: '',
        },
        {
          facebook: 'mail',
          userName: 'Anna@gmail.com',
          icon: '',
        },
      ],
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
      socialMedia: [
        {
          name: 'instagram',
          userName: 'Anna_123',
          icon: '',
        },
        {
          facebook: 'facebook',
          userName: 'Anna_123',
          icon: '',
        },
        {
          name: 'snapchat',
          userName: 'Anna_123',
          icon: '',
        },
        {
          facebook: 'tiktok',
          userName: 'Anna_123',
          icon: '',
        },
        {
          name: 'num',
          userName: '079 123 45 67',
          icon: '',
        },
        {
          facebook: 'mail',
          userName: 'Anna@gmail.com',
          icon: '',
        },
      ],
      images: [
        Lena
      ]
    },
  ]

  function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return(
    <div className="container">
      <div className="container searchTag">
        <div className="row">
          <img src={search_color} alt="search" className="search" />
          <span>{matches.length} Matches durchsuchen</span>
        </div>
      </div>
      <div className="list">
        {matches.map((user, index) => (
          <div className="user">
          <NavLink to={`matches/${user.id}`}  key={index} activeClassName="text-style">
            <div className="container">
              <div className="row">
                <div className="profile-pic" style={{ backgroundImage: `url(${user.images[0]})` }} />
                <div className="matches">
                  <span className="name">{user.userName}</span>
                  <span className="age">{calculateAge(user.birthdate)}</span>
                  <p className="gender">{user.gender}</p>
                </div>
              </div>
            </div>
          </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Matches;