import Card from 'react-bootstrap/Card';
import environment from "../../../environments/environment.js";
import './Profile.css';
import bg from '../../../assets/bg.png';
import profile from '../../../assets/profile.png';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  document.title = `Profile | ${environment.app.name}`;
  
  const [user, setUser] = useState({});

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    console.log(currentUser); 
    setUser(currentUser);
  }, []);

  return (
    <Card variant="outlined" className="Card" >
    <Card.Body>
      
      <div className="card-image">
      <Card.Img  className="custom-image" src={bg} />
      </div>
      <div className="profile-image">
      <Card.Img variant="top" src={profile} />
      </div>
      <Card.Title style={{textAlign: "center",fontSize: '40px',color:'#636365',fontWeight:'800px'}}>{user.name}</Card.Title>
      <Card.Text style={{display: "flex",flexDirection:"column",alignItems:"flex-start",color:"#636365", fontSize:"20px", paddingRight:"150px", paddingLeft:"40px"}}>
          
      <p className='manage-usertype'><span className="user-type-label">User Type:</span> {user.usrType}</p>
          <p className='manage-usertype'><span className="user-type-label">Occupation:</span> {user.addInfo}</p>
          <p className='manage-usertype'><span className="user-type-label">User Name:</span> {user.username}</p>
          <p className='manage-email'><span className="user-type-label">Email:</span> {user.email}</p>
          <p className='manage-info'><span className="user-type-label">Phone Number:</span> {user.number}</p>
          <p className='manage-info'><span className="user-type-label">City:</span> {user.city}</p>
          <p className='manage-info'><span className="user-type-label">State:</span> {user.state}</p>
              
              
        </Card.Text>
      
       </Card.Body>
       </Card>
  );
};

export default Profile;