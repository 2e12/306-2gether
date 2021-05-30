import React from 'react';
import './description.scss';
import Tags from "../../../Tags";

function Description() {

    return (
        <div>
            <div className="inputpackage">
                <p className="description">Description</p>
                <textarea type="text" rows="5" placeholder="Description" required/>
            </div>
            <div className="tagspackage">
                <p className="description">Tags</p>
                <div className="tags-matches">
                </div>
            </div>
        </div>
    )
}

export default Description;