import React from 'react';
import {Switch,Route, Router} from 'react-router-dom'
import Header from '../../Components/Header/Header';
import NewHome from '../NewHome/NewHome';
import Explore from '../Explore/Explore'
import Profile from '../Profile/Profile';

function Home(handleLogged) {
    console.log(handleLogged);
    return(
        <Router>
            <Header />
            {/* <Switch>
                <Route exact path='/' component={NewHome}/>
                <Route exact path='/explore' component={Explore}/>
                <Route path='/:username' component={Profile}/>
            </Switch> */}
        </Router>
    )
}

export default Home;