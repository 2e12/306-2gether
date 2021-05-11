import React, {useState, useEffect} from 'react';
import './home.scss';
import { getSuggestion, getUsers, setInteraction } from '../../utils/Matches';
import UserShort from './UserShort';
import UserDetails from './UserDetails';

function Home() {
  const [users, setUsers] = useState(getUsers())
  const [userNr, setUserNr] = useState(0)
  const [showUser, setShowUser] = useState(true);
  const [action, setAction] = useState();
  
  const nextUser = async () => {
    if(!users[userNr] || !action) return null;
    console.log("you " + action + " user: " + users[userNr].userName);
    await setInteraction(users[userNr].id);
    setUserNr(userNr + 1)
  }
  
  useEffect(() => {
    const getData = async () => {
      var user = await getSuggestion;
      setUsers(user);
    }
    getData();
  }, [])

  useEffect(() => {
    if(!action);
    nextUser();
    setAction(null);
  }, [action])

  if(!users || !users[userNr]){
    return(
      <p>Momentan gibt es keine neuen potentiellen Matches</p>
    )
  }

  return(
    <div>
      {
        showUser ? 
          <UserShort 
            user={users[userNr]} 
            setShowUser={setShowUser} 
            setAction={setAction} 
          /> 
        :  
          <UserDetails 
            user={users[userNr]} 
            setShowUser={setShowUser} 
            setAction={setAction}
          />
      }
    </div>
  )
}

export default Home;