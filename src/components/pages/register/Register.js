import React, { useState } from 'react'
import "./Register.css";
import environment from "../../../environments/environment.js";
import { useNavigate } from 'react-router-dom';
import ThemeButton from "../../buttons/ThemeButton";

const Register = () => {
  let navigate = useNavigate();
  document.title = `Register | ${environment.app.name}`;

  const passwordMatch = (pass1, pass2) => {
    if (pass1 === pass2) return true;
    return false;
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const [error, setError] = useState("");
  const registerForm = (event) => {
    event.preventDefault();
    if (event.target["name"].value.length === 0) {
      setError("Name can't be empty!");
      return;
    }
    if (event.target["email"].value.length === 0) {
      setError("Email address can't be empty!");
      return;
    }
    if (!validateEmail(event.target["email"].value)) {
      setError("Invalid email address!");
      return;
    }
    if (!passwordMatch(event.target["pass"].value, event.target["pass2"].value)) {
      setError("Confirm password mismatch!");
      return;
    }
    if (event.target["pass"].value.length < 8) {
      setError("Password must contain minimum 8 characters!");
      return;
    }
    let users = localStorage.getItem("users");
    let currUser = {
      email: event.target["email"].value,
      pass: event.target["pass"].value,
      name: event.target["name"].value
    }
    if (!users) {
      users = [currUser];
    }
    else {
      users = JSON.parse(users);
      users.push(currUser);
    }
    localStorage.setItem("users", JSON.stringify(users));
    navigate(`/login`);
  }

  return (
    <>

      <section>
        <div className="admin-login">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-4 col-sm-3 col-12"></div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="login">
                  <div className="d-flex justify-content-between">
                    <h1>Multi Step Register</h1>
                  </div>
                  <form id="signup-form" onSubmit={registerForm}>
                    {error !== "" ? <div className='error-73'><small>{error}</small></div> : <></>}

                    <input type="text" id="name" name="name" aria-describedby="emailHelp"
                      placeholder="Full Name" />
                    <input type="text" id="email" name="email" aria-describedby="emailHelp"
                      placeholder="Email" />
                    <input type="password" id="pass" name="pass" placeholder="Password" />
                    <input type="password" id="pass2" name="pass2" placeholder="Confirm Password" />

                    <ThemeButton type="submit">Register</ThemeButton>
                    <br />

                  </form>
                </div>
              </div>
              <div className="col-md-4 col-sm-3 col-12"></div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Register;