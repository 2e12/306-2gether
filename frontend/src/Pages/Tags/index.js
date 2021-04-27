import React from 'react';
import './tags.scss';

function Tags({tags, color}) {

  return(
    <div className="container" >
      <div className="row">
        {tags.map((tag, index) => (
          <div key={index} className={`tags ${color}`} >
            <p>{tag}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tags;