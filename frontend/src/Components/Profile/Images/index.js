import React, { useState, useEffect } from 'react';
import {Cloudinary} from 'cloudinary-core';
import './images.scss';
import Andreas_1 from '../../../assets/andreas/Andreas_1.jpg';
import Andreas_2 from '../../../assets/andreas/Andreas_2.jpg';
import Andreas_3 from '../../../assets/andreas/Andreas_3.jpg';
import Andreas_4 from '../../../assets/andreas/Andreas_4.jpg';
import Andreas_5 from '../../../assets/andreas/Andreas_5.jpg';
import Andreas_6 from '../../../assets/andreas/Andreas_6.jpg';
import { uploadFile } from '../../../utils/CloudinaryService';
import { getUser } from '../../../utils/User';


function Images() {
  const [images, setImages] = useState();
  
  // var images = [
  //   Andreas_1,
  //   Andreas_2,
  //   Andreas_3,
  //   Andreas_4,
  //   Andreas_5,
  //   Andreas_6
  // ]

  const uploadImage = (event) => {
    uploadFile(event.target.files[0]);
  }

  useEffect(() => {
    const getData = async () => {
      var user = await getUser();
      setImages(user.images);
    }
    getData();
  }, [])

  if (!images) {
    return null;
  }

  return(
    <div className="pictures">
      <div className="container profilePic">
        <div className="row">
          {images.map((image, index) => (
            <div className="images" key={index}>
              <div className="pic" style={{ backgroundImage: `url(${image})` }}/>
              <div className="remove">
                <span>Remove</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <label htmlFor="file-upload" className="uploadBtn">
        <span>
          Upload image
        </span>
      </label>
      <input id="file-upload"  type='file' onChange={(e) => uploadImage(e)} />
    </div>
  )
}

export default Images;