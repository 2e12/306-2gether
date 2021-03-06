import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Matches from './Components/Matches';
import Profile from './Components/Profile';
import Menu from './Components/Profile/Menu';
import User from './Components/Matches/User';
import Register from './Components/Register';
import { checkToken } from './utils/Token';

const App = () => {
  const [token, setToken] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    setToken(checkToken())
  }, [])

  return(
    <Router>
      {
        !token ? <UnregisterApp setToken={setToken} setPassword={setPassword} setUser={setUser}  /> : <RegisterApp setToken={setToken} />
      }
    </Router>
  )
}

const RegisterApp = ({setToken}) => {
  return(
    <Router>
      <Switch>
        <Route exact path="/matches">
          <Matches />
        </Route>
        <Route exact path="/matches/:userID">
          <User />
        </Route>
        <Route exact path="/profile">
          <Profile setToken={setToken} />
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

const UnregisterApp = ({setToken, setPassword, setUser}) => {
  return(
    <Router>
      <Switch>
        <Route exact path="/register">
          <Register setToken={setToken} setPassword={setPassword} setUser={setUser} />
        </Route>
        <Route path="*">
          <Login setToken={setToken} setPassword={setPassword} setUser={setUser} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;