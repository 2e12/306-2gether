import React from 'react';
import './tags.scss';

function Tags({tags, color, edit, setTags}) {
  const removeTag = (index) => {
    var removeItem = [...tags];
    removeItem.splice(index, 1);
    setTags([...removeItem]);
  }

  const showTags = (tag, index) => {
    return (
      <div key={index} className={`tags ${color}`} >
        <p>{tag}</p>
      </div>
    )
  }

  const editTags = (tag, index) => {
    return (
      <div key={index} className="tags-small" >
        <span>{tag}</span>
        <span className="cross" onClick={() => removeTag(tag, index)}>X</span>
      </div>
    )
  }

  if(!tags) {
    return null;
  }

  return(
    <div className="container" >
      <div className="row">
        {tags.map((tag, index) => (
          edit ? editTags(tag, index) : showTags(tag, index)
        ))}
      </div>
    </div>
  )
}

export default Tags;