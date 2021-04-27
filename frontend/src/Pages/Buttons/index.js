import React from 'react';
import './button.scss';
import accept from '../../assets/home/tick-mark.png';
import decline from '../../assets/home/cross.png';

function Button() {

  return(
    <div>
      <div className="accDec">
        <img alt="decline" src={decline} />
        <img alt="accept" src={accept} />
      </div>
    </div>
  )
}

export default Button;