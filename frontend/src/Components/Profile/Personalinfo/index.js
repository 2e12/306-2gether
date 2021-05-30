import React from "react";
import './../menu.scss';

function Personalinfo() {
    return (
        <div>
            <div className="inputpackage">
                <p className="description">Username</p>
                <input type="text" placeholder="Username" required/>
            </div>
            <div className="inputpackage">
                <p className="description">Firstname</p>
                <input type="text" placeholder="Firstname" required/>
            </div>
            <div className="inputpackage">
                <p className="description">Lastname</p>
                <input type="text" placeholder="Lastname" required/>
            </div>
            <div className="inputpackage">
                <p className="description">Mail</p>
                <input type="text" placeholder="Mail" required/>
            </div>
            <div className="inputpackage">
                <p className="description">Gender</p>
                <input type="text" placeholder="Gender" required/>
            </div>
            <div className="inputpackage">
                <p className="description">Birthdate</p>
                <input type="date" required/>
            </div>
            <div className="fuckingWaste">
                <button className="otherbutton">Save</button>
            </div>
        </div>
    )
}

export default Personalinfo;

