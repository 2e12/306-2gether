import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./carousel.scss";

function UserCarousel({user}) {

  return(
    <AliceCarousel className="carousel" >
      {
        user.images.map((pic, index) => (
          <div key={index}>
            <img src={pic} className="carouselImg" alt={user.userName} />
          </div>
        ))
      }
    </AliceCarousel>
  )
}

export default UserCarousel;