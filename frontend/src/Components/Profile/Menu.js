import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import './menu.scss';
import Template from './Template';
import Password from './Password';
import chevron from '../../assets/chevron_grey.png';
import Images from './Images';
import Profile from './';


function Menu() {
    const location = useLocation();
    const history = useHistory();
    var path = location.pathname.replace('/profile/', '');

    var menu = {
        'password': {
            path: 'password',
            title: 'Change Password',
            content: <Password/>,
        },
        'infos': {
            path: 'infos',
            title: 'Personal informations',
            content: <Password/>,
        },
        'tags': {
            path: 'tags',
            title: 'Tags & Descriptions',
            content: <Password/>,
        },
        'social-media': {
            path: 'social-media',
            title: 'Social Media',
            content: <Password/>,
        },
        'images': {
            path: 'images',
            title: 'Images',
            content: <Images/>,
        },
    }


    if (!menu[path]) {
        return <Profile/>
    }

    return (
        <div>
            <Template>
                <div>
                    <div onClick={() => history.goBack()} className="backBtn">
                        <img src={chevron} className="back" alt="back"/>
                        <span className="text">Back</span>
                    </div>
                    <h1>
                        {menu[path].title}
                    </h1>
                    <div className="inputpackage">
                        <p className="description">Username</p>
                        <input type="text" placeholder="Username" required></input>
                    </div>
                    <div className="inputpackage">
                        <p className="description">Firstname</p>
                        <input type="text" placeholder="Firstname" required></input>
                    </div>
                    <div className="inputpackage">
                        <p className="description">Lastname</p>
                        <input type="text" placeholder="Lastname" required></input>
                    </div>
                    <div className="inputpackage">
                        <p className="description">Mail</p>
                        <input type="text" placeholder="Mail" required></input>
                    </div>
                    <div className="inputpackage">
                        <p className="description">Gender</p>
                        <input type="text" placeholder="Gender" required></input>
                    </div>
                    <div className="inputpackage">
                        <p className="description">Birthdate</p>
                        <input type="date" required></input>
                    </div>
                    <div className="fuckingWaste">
                        <button className="otherbutton">Save</button>
                    </div>
                </div>
            </Template>
        </div>
    )
}

export default Menu;