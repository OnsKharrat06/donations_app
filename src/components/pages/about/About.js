import "./About.css";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Mission from '../../../assets/Mission.png';
import Vision from '../../../assets/Vision.png';
import Ons from '../../../assets/Ons.jpg';
import Ikram from '../../../assets/Ikram.jpg';
import Ines from '../../../assets/Ines.jpg';
import Card from 'react-bootstrap/Card';
import environment from "../../../environments/environment.js";

function About(){
  return (
    <>
      <div className="container">
        {/* Vision */}
        <div className="section">    
            <div className="section-child-1">
                <h1 className="heading" >Our Vision </h1>
                <p>One post, one donation at a Time! <br></br> We envision a Tunisia where everyone has access to resources, reducing poverty and enhancing education through quality donations.</p>
            </div>
            <img className="image section-child-2" src={Vision} alt="Our Vision"/>   
        </div>

        {/* Mission */}
        
        <div className="section">
            <img className="image section-child-1" src={Mission} alt="Our Mission"/> 
            <div className="section-child-2">
                <h1 className="heading">Our Mission </h1>
                <p>
                Facilitating positive change through a user-friendly platform. <br></br> We help connect individuals seeking donations with generous donors in Tunisia, ensuring resources reach those who need them most. <br></br>Together we make a difference.
                </p>
            </div>    
        </div>
        <div style={{textAlign:"center"}}>
            <h1 className="heading">Our Team</h1>
            <p style={{margin:"30px 0px"}}>
            We are a group of four junior students from the Mediterranean Institute of Technology in Tunis, Tunisia.
            We believe in the power of community engagement and we are working on solving SDG4 and SDG1. 
            </p>
        </div>
        
      <div style={{ display: "flex", justifyContent: "space-around", alignItems:"center", gap:"20px", marginBottom:"50px"}}>
        {/* Ons */}
          <Card  style={{border:"2px solid #896cc9"}}>
            <Card.Img variant="top" src={Ons} />
            <Card.Body style={{textAlign:"center"}}>
              <Card.Title>{environment.developers.names[0]}</Card.Title>
              <Card.Text>
                <p>{environment.developers.position}</p>
              </Card.Text>
              <Card.Text>
                <p>{environment.developers.emails[0]}</p>
              </Card.Text>
              
            </Card.Body>
          </Card>

          {/* Ikram */}
          <Card style={{border:"2px solid #896cc9"}}>
            <Card.Img variant="top" src={Ikram} />
            <Card.Body style={{textAlign:"center"}}>
              <Card.Title>{environment.developers.names[1]}</Card.Title>
              <Card.Text>
                <p>{environment.developers.position}</p>
              </Card.Text>
              <Card.Text>
                <p>{environment.developers.emails[1]}</p>
              </Card.Text>
              
            </Card.Body>
          </Card>

          {/* Ines */}
          <Card style={{border:"2px solid #896cc9"}}>
            <Card.Img variant="top" src={Ines} />
            <Card.Body style={{textAlign:"center"}}>
              <Card.Title>{environment.developers.names[2]}</Card.Title>
              <Card.Text>
                <p>{environment.developers.position}</p>
              </Card.Text>
              <Card.Text>
                <p>{environment.developers.emails[2]}</p>
              </Card.Text>
              
            </Card.Body>
          </Card>

          {/* houssem */}
          <Card style={{border:"2px solid #896cc9"}}>
            <Card.Img variant="top" src={Ons} />
            <Card.Body style={{textAlign:"center"}}>
              <Card.Title>{environment.developers.names[3]}</Card.Title>
              <Card.Text>
                <p>{environment.developers.position}</p>
              </Card.Text>
              <Card.Text>
                <p>{environment.developers.emails[3]}</p>
              </Card.Text>
              
            </Card.Body>
          </Card>

          
        </div>

        
      </div>
      
      
    </>
  )
}




export default About;