import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./carousel.scss";

function UserCarousel({user}) {

  return(
    <AliceCarousel className="carousel" >
      {
        user.pictures.map((pic, index) => (
          <div key={index}>
            <img src={pic.path} className="carouselImg" alt={user.userName} />
          </div>
        ))
      }
    </AliceCarousel>
  )
}

export default UserCarousel;