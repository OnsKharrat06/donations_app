import React from "react";
import { Link } from "react-router-dom"
import "./Home.css";
import landingPic from '../../../assets/home-landing-page.png';
import environment from "../../../environments/environment.js";
import ThemeButton from "../../buttons/ThemeButton";
import Footer from "../../../components/footer/Footer";

const Home = () => {
  document.title = `${environment.app.name}`;

    return (
        <>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6 pt-5">
                <h1 className="pt-5 pb-2 heading">Welcome to {environment.app.name}</h1>
                <p>{environment.app.description}</p>
                <p style={{fontWeight:"bold", color: "#896cc9", fontStyle:"italic", textAlign:"center", marginBottom:"80px"}}>{environment.app.slogan}</p>
                <Link to="/login" className="first-button"><ThemeButton  variant="contained" size="medium">Login</ThemeButton></Link>
                <Link to="/register"><ThemeButton variant="contained" size="medium">Register</ThemeButton></Link>
                <br/>
                
              </div>
              <div className="col-md-6 pt-5">
              <div style={{display:"flex", flexStart:"end"}}>
                  <img src={landingPic} width="100%" style={{marginRight: 0, marginLeft: "auto"}} alt="Landing Image"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        </>
    );
}
  
export default Home;