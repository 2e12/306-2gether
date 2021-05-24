import React, {useState, useEffect} from 'react';
import './home.scss';
import { getSuggestion, setInteraction } from '../../utils/Matches';
import UserShort from './UserShort';
import UserDetails from './UserDetails';

function Home() {
  const [suggestion, setSuggestion] = useState();
  const [showUser, setShowUser] = useState(true);
  const [action, setAction] = useState();
  
  const nextUser = async () => {
    if(!suggestion || !action) return null;
    // console.log("you " + action + " user: " + suggestion.userName);
    await setInteraction({user: suggestion.id, is_like: action});
    // setUserNr(userNr + 1)
  }
  
  useEffect(() => {
    const getData = async () => {
      var user = await getSuggestion();
      console.log("suggestion: ", user);
      return user;
      
    }
    var data = getData();
    setSuggestion(data);
  }, [])

  useEffect(() => {
    if(!action);
    nextUser();
    setAction(null);
  }, [action])

  if(!suggestion){
    return(
      <p>Momentan gibt es keine neuen potentiellen Matches</p>
    )
  }

  return(
    <div>
      {
        showUser ? 
          <UserShort 
            user={suggestion} 
            setShowUser={setShowUser} 
            setAction={setAction} 
          /> 
        :  
          <UserDetails 
            user={suggestion} 
            setShowUser={setShowUser} 
            setAction={setAction}
          />
      }
    </div>
  )
}

export default Home;