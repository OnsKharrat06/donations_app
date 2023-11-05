import React from 'react'
import environment from "../../../environments/environment.js";
import './Profile.css';
const Profile = () => {
    document.title = `Profile | ${environment.app.name}`;
    let user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div>
        <div className="container-fluid pt-5">
            <div className="row pt-5">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h1 className='manage-name'>{user.name}</h1>
                    <h1 className='text-center manage-email'>{user.email}</h1>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
        
    </div>
  )
}

export default Profile;