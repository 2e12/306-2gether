import React from 'react';
import './socialMedia.scss';
import benutzer from '../../../assets/socialmedia/benutzer.png';

function SocialMedia({user}) {

    if(!user) return null;

    return (
        <div>
            <div className="container">
                <div className="row info">
                    <img src={benutzer} alt="user" className="benutzer"/>
                    <div>
                        <div className="fullName">
                            {user.name} {user.lastName}
                        </div>
                        <div>
                            {user.birthdate.getDate()}.{user.birthdate.getMonth()}.{user.birthdate.getFullYear()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="socialmedia">
                {user.socialMedia.map((socialMedia) => (
                    <div className="container">
                        <div className="row">
                            <img className="icons" src={socialMedia.icon} alt={socialMedia.name}/>
                            <div>
                                {socialMedia.userName}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SocialMedia;