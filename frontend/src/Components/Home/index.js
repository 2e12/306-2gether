import React from 'react';
import './home.scss';
import { getUsers } from '../../utils/Matches';

function Home() {
  var users = getUsers();

  return(
    <div>
      <p>Home</p>
    </div>
  )
}

export default Home;