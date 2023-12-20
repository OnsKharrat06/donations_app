import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import environment from "../../../environments/environment.js";
import './Profile.css';
import bg from '../../../assets/bg.png';
import profile from '../../../assets/profile.png';

const Profile = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    console.log("heyyyy", currentUser); 
    setUser(currentUser);
  }, []);

  if (!user) {
    // Render a loading state or return null while waiting for user data
    return null;
  }

  document.title = `Profile | ${environment.app.name}`;

  return (
    <Card variant="outlined" className="Card">
      <Card.Body>
        <div className="card-image">
          <Card.Img className="custom-image" src={bg} />
        </div>
        <div className="profile-image">
          <Card.Img variant="top" src={profile} />
        </div>
        <Card.Title style={{ textAlign: "center", fontSize: '40px', color: '#636365', fontWeight: '800px' }}>
          {user.user.name}
        </Card.Title>
        <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", color: "#636365", fontSize: "20px", paddingRight: "150px", paddingLeft: "40px" }}>
          <p className='manage-usertype'><span className="user-type-label">User Type:</span> {user.user.typ}</p>
          <p className='manage-usertype'><span className="user-type-label">Occupation:</span> {user.user.occupation}</p>
          <p className='manage-usertype'><span className="user-type-label">User Name:</span> {user.user.username}</p>
          <p className='manage-email'><span className="user-type-label">Email:</span> {user.user.email}</p>
          <p className='manage-info'><span className="user-type-label">Phone Number:</span> {user.user.phone}</p>
          <p className='manage-info'><span className="user-type-label">City:</span> {user.user.city}</p>
          <p className='manage-info'><span className="user-type-label">State:</span> {user.user.state}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Profile;
