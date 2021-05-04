import React from 'react';
import './button.scss';
import accept from '../../assets/home/tick-mark.png';
import decline from '../../assets/home/cross.png';

function Button({setAction}) {

  return(
    <div>
      <div className="accDec">
        <img alt="decline" src={decline} onClick={() => setAction("dislike")} />
        <img alt="accept" src={accept} onClick={() => setAction("like")} />
      </div>
    </div>
  )
}

export default Button;