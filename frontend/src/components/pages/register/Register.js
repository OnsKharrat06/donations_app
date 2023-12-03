import React, { useState } from 'react';
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
import axios from 'axios';

const Register = () => {
  const url = "http://localhost:9000/api/users";
  const navigate = useNavigate();
  document.title = `Register | ${environment.app.name}`;
  
  const [user, setUsers] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    person: "person",
    phone: "",
    state: "",
    typ: "",
    city: "",
    zipcode: "",
    occupation: "",
    typinst: "not school",
  });

  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [error, setError] = useState("");
 
  const handleChange = (e) => {
    const { id, value } = e.target;
  
    if (id === 'typ' && value === 'seeker') {
      setUsers({ ...user, [id]: value });
    } else if (id === 'person') {
      setUsers({ ...user, typinst: value });  
    } else if (id === 'occupation') {
      setUsers({ ...user, occupation: value });
    } else {
      setUsers({ ...user, [id]: value });
    }
  };

  const handleNext = () => {
    if (step === 1) {
      if (userType === "") {
        setError("Please choose a user type");
        return;
      }
      if (userType === "seeker" && additionalInfo === "") {
        setError("Please choose donation seeker type");
        return;
      }
      setError("");
      setStep(2);
    }
  };

  const handleSubmit = () => {
    if (step === 2) {
      axios.post(url, user)
        .then((response) => {
          console.log(response.data);
          alert(response.data.msg);
          navigate(`/login`);
        })
        .catch((error) => {
          alert(error.response.data.msg);
          console.error("There was an error!", error);
        });
    }
  };

  const renderFormStep = () => {
    if (step === 1) {
      return (
        <div>
          <InputLabel id="demo-simple-select-standard-label">PLEASE CHOOSE USER TYPE:</InputLabel>
          <FormControl style={{ margin: "0px", width: "100%" }} variant="standard" sx={{ m: 1, minWidth: 350 }}>
            <Select
              fullWidth
              labelId="userlabel"
              id="typ"
              value={userType}
              onChange={(e) => {
                const selectedType = e.target.value;
                setUserType(selectedType);
                setUsers({ ...user, typ: selectedType });
              }}
              label="Are you a :"
            >
              <MenuItem value="seeker">Donation Seeker</MenuItem>
              <MenuItem value="provider">Donation Provider</MenuItem>
            </Select>
          </FormControl>
  
          {userType === "seeker" && (
            <div>
              <InputLabel id="label">PLEASE CHOOSE DONATION SEEKER TYPE:</InputLabel>
              <FormControl style={{ margin: "0px", width: "100%" }} variant="standard" sx={{ m: 1, minWidth: 350 }}>
                <Select
                  labelId="seekerlabel"
                  id="person"
                  value={additionalInfo}
                  onChange={(e) => {
                    const selectedInfo = e.target.value;
                    setAdditionalInfo(selectedInfo);
                    setUsers({ ...user, person: selectedInfo });
                  }}
                  label="Choose Seeker Type:"
                >
                  <MenuItem value="person">Person</MenuItem>
                  <MenuItem value="institution">Institute</MenuItem>
                </Select>
              </FormControl>
            </div>
          )}
  
          <ThemeButton onClick={handleNext}>Next</ThemeButton>
        </div>
      );
    } else if (step === 2) {
      return (
        <div>
          <TextField required fullWidth id="name" name="name" type="text" placeholder="Full Name*" onChange={handleChange} variant="standard" />
          <TextField required fullWidth id="phone" name="phone" type="number" placeholder="Phone Number*" onChange={handleChange} variant="standard" />
          <TextField required fullWidth id="email" name="email" type="text" aria-describedby="emailHelp" placeholder="Email Address*" onChange={handleChange} variant="standard" />
          <TextField required fullWidth id="username" name="username" type="text" placeholder="User Name*" onChange={handleChange} variant="standard" />
          <TextField required fullWidth id="password" name="password" type="password" placeholder="Password*" autoComplete="current-password" onChange={handleChange} variant="standard" />
          {/* Additional fields based on user type */}
          {userType === "provider" && (
            <TextField required fullWidth id="occupation" name="occupation" type="text" placeholder="Occupation*" onChange={handleChange} variant="standard" />
          )}
          {userType === "seeker" && additionalInfo === "person" && (
            <TextField required fullWidth id="occupation" name="occupation" type="text" placeholder="Occupation*" onChange={handleChange} variant="standard" />
          )}
          {userType === "seeker" && additionalInfo === "institution" && (
            <TextField required fullWidth id="typinst" name="typinst" type="text" placeholder="Institute Type*" onChange={handleChange} variant="standard" />
          )}
          <TextField required fullWidth id="city" name="city" type="text" placeholder="City*" onChange={handleChange} variant="standard" />
          <TextField required fullWidth id="state" name="state" type="text" placeholder="State*" onChange={handleChange} variant="standard" />
          <TextField required fullWidth id="zipcode" name="zipcode" type="number" placeholder="Zip Code*" onChange={handleChange} variant="standard" />
          <ThemeButton onClick={handleSubmit}>Register</ThemeButton>
        </div>
      );
    }
  };

  return (
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
                <form id="signup-form">
                  {error !== "" && (
                    <div className='error-73'>
                      <Box sx={{ width: '100%'}}>
                        <Collapse in={true}>
                          <Alert variant="outlined" severity="error" icon={false}
                            action={
                              <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                style={{ marginTop: "0px" }}
                                onClick={() => setError("")}
                              >
                                <CloseIcon fontSize="inherit" />
                              </IconButton>
                            }
                            sx={{ mb: 2, width: '100%', height: '70%' }}
                          >
                            {error}
                          </Alert>
                        </Collapse>
                      </Box>
                    </div>
                  )}
                  {renderFormStep()}
                </form>
              </div>
            </div>
            <div className="col-md-4 col-sm-3 col-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
