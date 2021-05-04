import React, {useState} from 'react';
import Template from '../Template';
import back from '../../../assets/chevron_white.png';
import mail from '../../../assets/socialmedia/gmail.png';
import facebook from '../../../assets/socialmedia/facebook.png';
import instagram from '../../../assets/socialmedia/instagram.png';
import youtube from '../../../assets/socialmedia/youtube.png';
import snapchat from '../../../assets/socialmedia/snapchat.png';
import share from '../../../assets/socialmedia/share.png';
import tiktok from '../../../assets/socialmedia/tik-tok.png';
import chat from '../../../assets/socialmedia/chat-bubbles-with-ellipsis.png';
import { checkToken, getToken } from '../../../utils/Token';
import { register } from 'react-scroll/modules/mixins/scroller';
import { createUser } from '../../../utils/User';

function SocialMedia({setStep, user, setUser, setToken}) {
  const [mailData, setMailData] = useState();
  const [facebookData, setFacebookData] = useState();
  const [instagramData, setInstagramData] = useState();
  const [youtubeData, setYoutubeData] = useState();
  const [snapchatData, setSnapchatData] = useState();
  const [shareData, setShareData] = useState();
  const [tiktokData, setTikTokData] = useState();
  const [numberData, setNumberData] = useState();

  console.log(user);

  const header = () => {
    return(
      <div className="header">
        <img src={back} alt="back" className="back-register" onClick={() => setStep(1)} />
        <div className="percent"><span>60%</span>Complete</div>
        <div className="status">Social Media</div>
        <div className="container">
          <div className="row lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line aktiv"></div>
          </div>
        </div>
      </div>
    )
  }

  const register = () => {
    var userLocal = {
      userName: user.userName,
      birthdate: new Date(user.birthdate),
      name: user.name,
      lastName: user.lastName,
      mail: user.mail,
      password: user.password,
      gender: user.gender,
      tags: [...user.tags],
      description: user.description,
      socialMedia: [
        {
          name: 'instagram',
          userName: instagramData,
          icon: instagram,
        },
        {
          name: 'facebook',
          userName: facebookData,
          icon: facebook,
        },
        {
          name: 'snapchat',
          userName: snapchatData,
          icon: snapchat,
        },
        {
          name: 'tiktok',
          userName: tiktokData,
          icon: tiktok,
        },
        {
          name: 'num',
          userName: numberData,
          icon: chat,
        },
        {
          name: 'mail',
          userName: mailData,
          icon: mail,
        },
        {
          name: 'youtube',
          userName: youtubeData,
          icon: youtube,
        },
        {
          name: 'other',
          userName: shareData,
          icon: share,
        },
      ],
      images: [...user.images]
    };
    setUser(userLocal);
    createUser(userLocal);
    getToken()
    setToken(checkToken())
  }

  return(
    <form onSubmit={() => register()} >
      <Template header={header()} >
        <div className="socialMedia">
          <div className="info">Please enter your social media</div>
          <div>
            <div className="container">
              <div className="row">
                <img src={mail} alt="mail" className="icon" />
                <div className="socialMail">
                  <label htmlFor="socialMail">
                    <div>Enter Mail</div>
                  </label>
                  <input type="text" id="socialMail" placeholder="Enter Mail" onChange={(e) => setMailData(e.target.value)} autoComplete="off" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <img src={facebook} alt="facebook" className="icon" />
                <div className="facebook">
                  <label htmlFor="facebook">
                    <div>Enter Facebook</div>
                  </label>
                  <input type="text" id="facebook" placeholder="Enter Facebook" onChange={(e) => setFacebookData(e.target.value)} autoComplete="off" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <img src={instagram} alt="instagram" className="icon" />
                <div className="instagram">
                  <label htmlFor="instagram">
                    <div>Enter Instagram</div>
                  </label>
                  <input type="text" id="instagram" placeholder="Enter Instagram" onChange={(e) => setInstagramData(e.target.value)} autoComplete="off" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <img src={snapchat} alt="snapchat" className="icon" />
                <div className="snapchat">
                  <label htmlFor="snapchat">
                    <div>Enter Snapchat</div>
                  </label>
                  <input type="text" id="snapchat" placeholder="Enter Snapchat" onChange={(e) => setSnapchatData(e.target.value)} autoComplete="off" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <img src={tiktok} alt="tiktok" className="icon" />
                <div className="tiktok">
                  <label htmlFor="tiktok">
                    <div>Enter Tik Tok</div>
                  </label>
                  <input type="text" id="tiktok" placeholder="Enter Tik Tok" onChange={(e) => setTikTokData(e.target.value)} autoComplete="off" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <img src={chat} alt="number" className="icon" />
                <div className="number">
                  <label htmlFor="number">
                    <div>Enter Number</div>
                  </label>
                  <input type="text" id="number" placeholder="Enter Number" onChange={(e) => setNumberData(e.target.value)} autoComplete="off" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <img src={youtube} alt="youTube" className="icon" />
                <div className="youTube">
                  <label htmlFor="youTube">
                    <div>Enter YouTube</div>
                  </label>
                  <input type="text" id="youTube" placeholder="Enter YouTube" onChange={(e) => setYoutubeData(e.target.value)} autoComplete="off" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <img src={share} alt="other social media" className="icon" />
                <div className="otherSocialMedia">
                  <label htmlFor="otherSocialMedia">
                    <div>Enter More</div>
                  </label>
                  <input type="text" id="otherSocialMedia" placeholder="Enter More" onChange={(e) => setShareData(e.target.value)} autoComplete="off" />
                </div>
              </div>
            </div>
          </div>
          <div className="btnSocialMedia">
            <input type="submit" className="accountBtn" value="Save Account" />
          </div>
        </div>
      </Template>
    </form>
  )
}


export default SocialMedia;