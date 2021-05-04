import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Pages/Login/Login';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Matches from './Components/Matches';
import Profile from './Components/Profile';
import Menu from './Components/Profile/Menu';
import User from './Components/Matches/User';

const App = () => {
  const [isLog, setIsLog] = useState(false);

  return(
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/matches">
          <Matches />
        </Route>
        <Route exact path="/matches/:userID">
          <User />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/profile/:profileID">
          <Menu />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
      <Navbar />
    </Router>
    
  )
}

export default App;