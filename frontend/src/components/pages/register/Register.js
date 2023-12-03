import React, { useState, useEffect } from 'react';
import "./Register.css";
import environment from "../../../environments/environment.js";
import { useNavigate } from 'react-router-dom';
import ThemeButton from "../../buttons/ThemeButton";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';


const Register = () => {
  const navigate = useNavigate();
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
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState(null);

  
  const registerForm = (event) => {
    event.preventDefault();

    if (step === 1) {
      
      if (userType === null ) {
        setError("Please choose a user type");
        setOpen(true);
        return;
      }
      if (userType === "seeker" && additionalInfo === null){
        setError("Please choose donation seeker type");
        setOpen(true);
        return;
      }else {
        setError("");
        setOpen(false);
      }
      
      setStep(2);

    }else if (step === 2) {

      if (event.target["number"].value.length !== 8 ) {
        setError("Please enter a valid phone number!");
        setOpen(true);
        return;
      }
      if (!validateEmail(event.target["email"].value)) {
        setError("Please enter a valid email!");
        setOpen(true);
        return;
      }
      if (event.target["pass1"].value.length < 8) {
        setError("Password must contain minimum 8 characters !!");
        setOpen(true);
        return;
      }
      if (!passwordMatch(event.target["pass1"].value, event.target["pass2"].value)) {
        setError("Please enter a matching password!");
        setOpen(true);
        return;
      }
      let users = localStorage.getItem("users");
      let currUser = {
        name: event.target["name"].value,
        number: event.target["number"].value,
        email: event.target["email"].value,
        username: event.target["user"].value,
        pass: event.target["pass1"].value,
        addInfo: event.target["Occupation"].value,
        city: event.target["city"].value,
        state: event.target["state"].value,
        code: event.target["code"].value,
        usrType: userType,
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
  
}

  const renderFormStep = () => {
    if (step === 1) {
      return (
        <div>

          <div>
            <InputLabel id="demo-simple-select-standard-label">PLEASE CHOOSE USER TYPE:</InputLabel>
            <FormControl style={{margin:"0px", width:"100%"}} variant="standard" sx={{ m: 1, minWidth: 350 }}>
              <Select
                fullWidth
                labelId="userlabel"
                id="usertype"
                value={userType}
                onChange={e => setUserType(e.target.value)}
                label="Are you a :"
              >
                <MenuItem  value="seeker">Donation Seeker</MenuItem>
                <MenuItem  value="donor">Donation Provider</MenuItem>
             </Select>
            </FormControl>
         </div>
          {userType === "seeker" && (
            <div>
              <InputLabel id="label">PLEASE CHOOSE DONATION SEEKER TYPE:</InputLabel>
              <FormControl style={{margin:"0px", width:"100%"}} variant="standard" sx={{ m: 1, minWidth: 350 }}>
                <Select
                  labelId="seekerlabel"
                  id="seekertype"
                  
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  label="Choose Seeker Type:"
                >
                <MenuItem value="person">Person</MenuItem>
                <MenuItem value="institute">Institute</MenuItem>
              </Select>
              </FormControl>
            </div>
          )}
          <ThemeButton type="submit">Next</ThemeButton>
        </div>
      );
    } 
    if (step === 2) {
      return (
        <div>
            <div>
              <TextField
              required
              fullWidth
              id="name"
              name="name"
              type="text"
              placeholder="Full Name*"
              variant="standard"
              />
            </div>
            <div>
              <TextField
                required
                fullWidth
                id="number"
                name="number"
                type="number"
                placeholder="Phone Number*"
                variant="standard"
             />
            </div>
            <div>
              <TextField
              required
              fullWidth
              id="email"
              name="email"
              type="text"
              aria-describedby="emailHelp"
              placeholder="Email Address*"
              variant="standard"
              />
            </div>
            <div>
              <TextField
              required
              fullWidth
              id="user"
              name="user"
              type="text"
              placeholder="User Name*"
              variant="standard"
              />
            </div>
            <div>
              <TextField
                required
                fullWidth
                id="pass1"
                name="pass1"
                type="password"
                placeholder="Password*"
                autoComplete="current-password"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                required
                fullWidth
                id="pass2"
                name="pass2"
                type="password"
                placeholder="Confirm Password*"
                autoComplete="current-password"
                variant="standard"
              />
            </div>
            {userType === "donor" && (
            <div>
              <TextField
                required
                fullWidth
                id="Occupation"
                name="Occupation"
                type="text"
                placeholder="Occupation*"
                variant="standard"
              />
            </div>
          )}
          {userType === "seeker" && (
            <div>
              <TextField
                required
                fullWidth
                id="Occupation"
                name="Occupation"
                type="text"
                placeholder={additionalInfo === "person" ? "Occupation*" : "Institute Type*"}
                variant="standard"
              />
            </div>
          )}
          
          <div>
              <TextField
              required
              fullWidth
              id="city"
              name="city"
              type="text"
              placeholder="City*"
              variant="standard"
              />
            </div>
            <div>
              <TextField
              required
              fullWidth
              id="state"
              name="state"
              type="text"
              placeholder="State*" 
              variant="standard"
              />
            </div>
            <div>
              <TextField
                required
                fullWidth
                id="code"
                name="code"
                type="number"
                placeholder="Zip Code*"
                variant="standard"
             />
            </div>
          <ThemeButton type='submit'>Register</ThemeButton>
        </div>
      );
    }
  };

  const [open, setOpen] = React.useState(true);
  return(
    <section>
      <div className="admin-login">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4 col-sm-3 col-12"></div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="login">
                <div className="d-flex justify-content-between">
                  <h1>Register</h1>
                </div>
                <form id="signup-form" onSubmit={registerForm}>
                  {error !== "" ? <div className='error-73'>     
                                          <Box sx={{ width: '100%' }}> 
                                            <Collapse in={open}>
                                              <Alert variant="outlined" severity="error" icon={false}
                                                action={
                                                  <IconButton
                                                  aria-label="close"
                                                  color="inherit"
                                                  size="small"
                                                  style={{marginTop:"0px"}}
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
                    {renderFormStep()}
                </form>
              </div>
            </div>
            <div className="col-md-4 col-sm-3 col-12"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register;
