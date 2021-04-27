import Anna_1 from './../assets/user/Anna_1.png';
import Anna_2 from './../assets/user/Anna_2.png';
import Anna_3 from './../assets/user/Anna_3.jpeg';
import Luana from './../assets/user/Luana.png';
import Lena from './../assets/user/Lena.png';
import num from './../assets/socialmedia/chat-bubbles-with-ellipsis.png';
import instagram from './../assets/socialmedia/instagram.png';
import facebook from './../assets/socialmedia/facebook.png';
import gmail from './../assets/socialmedia/gmail.png';
import share from './../assets/socialmedia/share.png';
import snapchat from './../assets/socialmedia/snapchat.png';
import youtube from './../assets/socialmedia/youtube.png';
import tiktok from './../assets/socialmedia/tik-tok.png';

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
        icon: instagram,
      },
      {
        name: 'facebook',
        userName: 'Anna_123',
        icon: facebook,
      },
      {
        name: 'snapchat',
        userName: 'Anna_123',
        icon: snapchat,
      },
      {
        name: 'tiktok',
        userName: 'Anna_123',
        icon: tiktok,
      },
      {
        name: 'num',
        userName: '079 123 45 67',
        icon: num,
      },
      {
        name: 'mail',
        userName: 'Anna@gmail.com',
        icon: gmail,
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
        icon: instagram,
      },
      {
        name: 'facebook',
        userName: 'Anna_123',
        icon: facebook,
      },
      {
        name: 'snapchat',
        userName: 'Anna_123',
        icon: snapchat,
      },
      {
        name: 'tiktok',
        userName: 'Anna_123',
        icon: tiktok,
      },
      {
        name: 'num',
        userName: '079 123 45 67',
        icon: num,
      },
      {
        name: 'mail',
        userName: 'Anna@gmail.com',
        icon: gmail,
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
        icon: instagram,
      },
      {
        name: 'facebook',
        userName: 'Anna_123',
        icon: facebook,
      },
      {
        name: 'snapchat',
        userName: 'Anna_123',
        icon: snapchat,
      },
      {
        name: 'tiktok',
        userName: 'Anna_123',
        icon: tiktok,
      },
      {
        name: 'num',
        userName: '079 123 45 67',
        icon: num,
      },
      {
        name: 'mail',
        userName: 'Anna@gmail.com',
        icon: gmail,
      },
    ],
    images: [
      Lena
    ]
  },
]

export function getMatches() {
  return matches;
};

export function getUser(index) {
  return matches.find((user) => user.id === parseInt(index));
};

export function getUsers() {
  return matches;
};