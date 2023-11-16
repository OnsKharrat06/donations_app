import React, { useState } from "react";
import "./Login.css";
import environment from "../../../environments/environment.js";
import { Link, useNavigate } from "react-router-dom";
import ThemeButton from "../../buttons/ThemeButton";
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
const Login = () => {
    let navigate = useNavigate();
    document.title = `Login | ${environment.app.name}`;
    const [error, setError] = useState("");

    function generateToken() {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
        let result = '';
        for (var i = 0; i < 16; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const loginForm = (event) => {
        event.preventDefault();
          if(!validateEmail(event.target["email"].value)){
            setError("Invalid email address!");
            setOpen(true);
            return;
          }
          if(event.target["pass"].value.length < 8 ){
            setError("Password must contain minimum 8 characters!");
            setOpen(true);
            return;
          }
        let users = JSON.parse(localStorage.getItem("users"));
        if(users){
            users.forEach(element => {
                if (element.email === event.target["email"].value && element.pass === event.target["pass"].value) {
                    let currentUser = element;
                    currentUser["token"] = generateToken();
                    localStorage.setItem("currentUser", JSON.stringify(currentUser));
                    navigate(`/shop`);
                    return;
                }
            });
            setError("Wrong email or password!");
            return;
        }
        
        else{
            setError("User not registered!");
            return;
        } 
    }
    
    const [open, setOpen] = React.useState(true);
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
                                        <h1>LOGIN</h1>
                                    </div>

                                    <form onSubmit={loginForm}>
                                        {error !== "" ? <div className='error-73'>     
                                          <Box sx={{ width: '100%' }}> 
                                            <Collapse in={open}>
                                              <Alert variant="outlined" severity="error" icon={false}
                                                action={
                                                  <IconButton
                                                    aria-label="close"
                                                    color="inherit"
                                                    size="small"
                                                    onClick={() => {
                                                      setOpen(false);
                                                    }}
                                                    sx ={{ mb: 4 ,
                                                      
                                                      margintop:40,
                                                   }}
                                                  >
                                                    <CloseIcon fontSize="inherit" />
                                                  </IconButton>
                                                }
                                                sx={{ mb: 2 ,
                                                      width: '100%',
                                                      height:'50%',
                                                   }}
                                                                                          
                                              >
                                                {error}
                                              </Alert>
                                            </Collapse>
                                          </Box>     
                                  </div> : <></>}
                                         <div>
                                            <TextField
                                                required
                                                fullWidth
                                                id="email"
                                                name="email"
                                                type="text"
                                                aria-describedby="emailHelp"
                                                placeholder="email*"
                                                variant="standard"
                                            />
                                        </div>
                                        <div>
                                            <TextField
                                                required
                                                fullWidth
                                                id="pass"
                                                name="pass"
                                                type="password"
                                                placeholder="password*"
                                                autoComplete="current-password"
                                                variant="standard"
                                            />
                                        </div>

                                        <ThemeButton type="submit" >Login</ThemeButton>
                                        <p className="register" style={{fontSize:"18px", color: "#636365", marginTop:"10px"}}>Don't have an account?   
                                                <Link style={{fontSize:"18px", color: "#896cc9", textDecoration:"underline", fontWeight:"bold"}} to="/register"> Register</Link>
                                            </p>
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
    );
}

export default Login;