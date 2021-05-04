import React from 'react';
import './profile.scss';
import Template from './Template';
import ProfileLink from './ProfileLink';
import logout from '../../assets/profile/logout.png';
import padlock from '../../assets/profile/padlock.png';
import infos from '../../assets/profile/infos.png';
import delete_account from '../../assets/profile/delete_account.png';
import picture from '../../assets/profile/picture.png';
import share from '../../assets/profile/share.png';
import description from '../../assets/profile/description.png';
import chevron from '../../assets/profile/chevron.png';
import { checkToken, clearToken } from '../../utils/Token';

function Profile({setToken, user}) {

  const openConfirmDelete = () => {
    let subMenu = document.querySelector(".confirm");
    subMenu.style.display = "block";
  }

  const closeConfirmDelete = () => {
    let subMenu = document.querySelector(".confirm");
    subMenu.style.display = "none";
  }

  const deleteToken = () => {
    clearToken();
    setToken(checkToken());
  }

  const deleteUser = () => {
    deleteToken()
  }

  return(
    <div>
      <Template>
        <div className="profile">
          <div>
            <div className="logout">
              <div className="link-profile" onClick={() => deleteToken()} >
                <div className="profile-menu">
                  <img className="icon" src={logout} alt={'Logout'} />
                  <span>Logout</span>
                  <img className="chevron" src={chevron} alt="Chevron" />
                </div>
              </div >
            </div>
            <ProfileLink link='/profile/password' icon={padlock} title='Change password' />
          </div>
          <div className="edit">
            <ProfileLink link='/profile/infos' icon={infos} title='Personal Infos' />
            <ProfileLink link='/profile/tags' icon={description} title='Tags & Description' />
            <ProfileLink link='/profile/social-media' icon={share} title='Social Media' />
            <ProfileLink link='/profile/images' icon={picture} title='Images' />
          </div>
          <div className="delete">
            <div className="link-profile" onClick={() => openConfirmDelete()} >
              <div className="profile-menu">
                <img className="icon" src={delete_account} alt={'Delete account'} />
                <span>Delete account</span>
                <img className="chevron" src={chevron} alt="Chevron" />
              </div>
            </div >
          </div>
        </div>
        <div className="confirm">
          <span>Willst du deinen User wirklich löschen?</span>
          <div className="container">
            <div className="row">
              <div className="cancel btnConfirm" onClick={() => closeConfirmDelete()}>
                <span>
                  Abbrechen
                </span>
              </div>
              <div className="btnConfirm save" onClick={() => deleteUser()} >
                <span>
                  Löschen
                </span>
              </div>
            </div>
          </div>
        </div>
      </Template>
    </div>
  )
}

export default Profile;