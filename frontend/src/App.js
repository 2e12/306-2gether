import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Matches from './Components/Matches';
import Profile from './Components/Profile';
import Menu from './Components/Profile/Menu';
import User from './Components/Matches/User';
import Register from './Pages/Register';

const App = () => {
  const [token, setToken] = useState(false);
  return(
    <Router>
      {
        !token ? <UnregisterApp setToken={setToken} /> : <RegisterApp setToken={setToken} />
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

const UnregisterApp = ({setToken}) => {
  return(
    <Router>
      <Switch>
        <Route exact path="/register">
          <Register setToken={setToken} />
        </Route>
        <Route path="*">
          <Login setToken={setToken} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;