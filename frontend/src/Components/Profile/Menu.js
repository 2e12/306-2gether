import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import './menu.scss';
import Template from './Template';
import Password from './Password';
import chevron from '../../assets/chevron_grey.png';
import Images from './Images';
import Profile from './';
import Personalinfo from "./Personalinfo";
import Description from "./Description";
import SocialMedia from "./SocialMedia";


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
            content: <Personalinfo />,
        },
        'tags': {
            path: 'tags',
            title: 'Tags & Descriptions',
            content: <Description/>,
        },
        'social-media': {
            path: 'socialmedia',
            title: 'Social Media',
            content: <SocialMedia/>,
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
                    <div onClick={() => history.goBack()} className="backBtn" >
                        <img src={chevron} className="back" alt="back" />
                        <span className="text">Back</span>
                    </div>
                    <div className="title">
                        <span>{menu[path].title}</span>
                    </div>
                    {menu[path].content}
                </div>
            </Template>
        </div>
    )
}

export default Menu;