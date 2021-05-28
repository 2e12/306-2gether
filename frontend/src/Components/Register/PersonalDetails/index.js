import React, {useState} from 'react';
import Template from '../Template';
import arrow from '../../../assets/chevron_white_right.png';
import back from '../../../assets/chevron_white.png';
import Tags from '../../../Tags';

function PersonalDetails({setStep, user, setUser}) {
  const [tags, setTags] = useState(["Musik", "Reisen", "Fitness", "Was trinken gehen", "Mode"]);
  const [images, setImages] = useState([]);
  const [gender, setGender] = useState();
  const [birthdate, setBirthdate] = useState();
  const [description, setDescription] = useState();

  const header = () => {
    return(
      <div className="header">
        <img src={back} alt="back" className="back-register" onClick={() => setStep(0)} />
        <div className="percent"><span>20%</span>Complete</div>
        <div className="status">Personal Details</div>
        <div className="container">
          <div className="row lines">
            <div className="line"></div>
            <div className="line aktiv"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    )
  }

  const uploadImage = (event) => {
    setImages([...images, event.target.files[0]])
  }

  const removeImage = (index) => {
    var removeItem = [...images];
    removeItem.splice(index, 1);
    setImages([...removeItem]);
  }

  const nextStep = () => {
    var userLocal = {
      userName: user.userName,
      birthdate: new Date(birthdate),
      name: user.name,
      lastName: user.lastName,
      mail: user.mail,
      password: user.password,
      gender: gender,
      tags: [...tags],
      description: description,
      images: [...images]
    };
    setUser(userLocal);
    setStep(2);
  }

  return(
    <form onSubmit={() => nextStep()}>
      <Template header={header()} >
        <div className="personalDetails">
          <div className="info">Please enter your personal informations</div>
          <div>
            <div className="gender">
              <label htmlFor="gender">
                <div>Enter Gender</div>
              </label>
              <input type="text" id="gender" placeholder="Enter Gender" onChange={(e) => setGender(e.target.value)} autoComplete="off" required />
            </div>
            <div className="birthdate">
              <label htmlFor="birthdate">
                <div>Enter Birthdate</div>
              </label>
              <input type="date" id="birthdate" placeholder="Enter Birthdate" onChange={(e) => setBirthdate(e.target.value)} autoComplete="off" required />
            </div>
            <div className="description">
              <label htmlFor="description">
                <div>Enter Description</div>
              </label>
              <textarea id="description" placeholder="Enter Description" onChange={(e) => setDescription(e.target.value)} autoComplete="off" required></textarea>
             </div>
            <div className="tag">
              <label htmlFor="tag">
                <div>Enter Tags</div>
              </label>
              <Tags tags={tags} setTags={setTags} edit="true" />
              <input type="email" id="tags" placeholder="Enter Tags" autoComplete="off" />
            </div>
            <div className="photos">
              <label className="photosLbl">
                <div>Enter Photos</div>
              </label>
              <div className="container">
                <div className="row">
                  {images.map((image, index) => (
                    <div className="images" key={index}>
                      <div className="pic" style={{ backgroundImage: `url(${URL.createObjectURL(image)})` }}/>
                      <div className="remove" onClick={() => removeImage(index)} >
                        <span>Remove</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <label htmlFor="photos" className="photosBtn">
                <div>
                  Upload image
                </div>
              </label>
              <input id="photos"  type='file' onChange={(e) => uploadImage(e)}  required/>
            </div>
            <div>
              <label htmlFor="submitBtn" className="floatRight">
                <img src={arrow} alt="next" className="arrow" />
              </label>
              <input type="submit" id="submitBtn" className="submitBtn" />
            </div>
          </div>
        </div>
      </Template>
    </form>
  )
}


export default PersonalDetails;