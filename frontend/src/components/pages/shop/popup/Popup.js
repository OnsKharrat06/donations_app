import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ThemeButton from '../../../buttons/ThemeButton';
import AddCircleIcon from '@mui/icons-material/AddCircleTwoTone';
import axios from 'axios';
import { useState } from 'react';

const url = "http://localhost:9000/api/donations";








const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 700,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
  overflow: 'auto',
  borderRadius: '10px',
};

export default function BasicModal(props) {
  const reload=()=>window.location.reload();

  const [user, setUsers] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setdonation({ ...donation, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {

    axios.post(url, donation)
      .then((response) => {
        console.log(response.data);
        alert(response.data.msg);
      })
      .catch((error) => {
        alert(error.response.data.msg);
        console.error("There was an error!", error);
      });
      reload();
  };

  const [donation, setdonation] = useState({
    image: "NULL",
    name: "",
    description: "",
    rate: "",
    category: "",
    submition_type: "",
    date: "NULL",
    Submitted_by: "NULL",
    type: props.type =="provided"?"provided donation":"saught donation",
  });

  const [open, setOpen] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [selectedSubmitionType, setselectedSubmitionType] = React.useState(false);
  const [selectedState, setSelectedState] = React.useState(0);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setSelectedFile(null);
    setSelectedCategory('');
    setselectedSubmitionType(false);
  };
  const handleAdd = () => {
    if (!selectedCategory || !selectedState || !selectedSubmitionType) {
      alert("Please fill in all required fields before adding the item.");
    }
  };
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleSubmittedByChange = (event) => {
    setselectedSubmitionType(event.target.value);
  };
  const handleStateChange = (event, newValue) => {
    setSelectedState(newValue);
  };

  const [donationType, setdonationType] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");


  return (
    <div>
      {isLoggedIn && (
        <ThemeButton onClick={handleOpen} variant="contained" style={{ padding: "8px 3.3rem", backgroundColor: "#896cc9", gridColumnStart: "span 2" }}>
          Add Item <AddCircleIcon style={{ margin: "0 10px" }}></AddCircleIcon>
        </ThemeButton>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{
              textAlign: "center",
              fontSize: "25px",
              fontWeight: 800,
              color: "#896cc9",
            }}
          >
            Add a new {props.name}
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "30px",
              width: "400px",
              marginLeft: "70px",
              marginTop: "20px",
            }}
          >
            <Button
              variant="contained"
              component="label"
              style={{
                display: "flex",
                height: "30px",
                backgroundColor: "#896cc9",
              }}
            >
              Upload Image
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: "none" }}
                id="image"
              />
            </Button>
            {selectedFile && (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected Item Image"
                style={{ maxWidth: "100%" }}
              />
            )}
            <TextField onChange={handleChange} label="Name Of The Item *" variant="outlined" style={{ marginBottom: "20px", marginTop: "20px" }} id="name" />

            <TextField onChange={handleChange} label="Description *" variant="outlined" style={{ marginBottom: "20px" }} id="description" />
            <p style={{ color: "#896cc9", fontSize: "20px" }}>State* : {selectedState}</p>
            {/* <TextField
              value={selectedState}
              
              min={0}
              max={5}
              step={1}
              id = "rate"
              onChange={handleChange}
              valueLabelDisplay="auto"
              
              sx={{ color: "#636365" }}
            /> */}

            <TextField onChange={handleChange} label="Rate *" variant="outlined" style={{ marginBottom: "20px" }} id="rate" />
            <p style={{ color: "#896cc9", fontSize: "20px" }}></p>

            <p onChange={handleChange} style={{ color: "#896cc9", fontSize: "20px" }} >Category* :</p>
            <Select
              value={donationType}
              id="category"
              onChange={(e) => {
                // handleCategoryChange
                const selectedType = e.target.value;
                setdonationType(selectedType);
                setdonation({ ...donation, category: selectedType });
              }}
              variant="outlined"
              style={{
                display: "flex",
                marginBottom: "20px",
                width: "100%",
              }}
            >
              <MenuItem value="books">Books</MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem>
              <MenuItem value="schoolSupplies">School Supplies</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            <br></br>

            <p style={{ color: '#896cc9', fontSize: '20px' }}>Submission Type* :</p>
            {/* <RadioGroup
              value={selectedSubmitionType ? "anonymous" : "not anonymous"}
              onChange={handleChange}
              id ="submition_type"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FormControlLabel
                value="anonymous"
                onChange={handleSubmittedByChange}
                control={<Radio />}
                label="Anonymous"
                id ="submition_type"
              />
              <FormControlLabel
                value="not anonymous"
                onChange={handleSubmittedByChange}
                control={<Radio />}
                label="Non-Anonymous"
                id ="submition_type"
              />
            </RadioGroup> */}

            <Select
              value={additionalInfo}
              id="submition_type"
              onChange={(e) => {
                // handleCategoryChange
                const selectedInfo = e.target.value;
                setAdditionalInfo(selectedInfo);
                setdonation({ ...donation, submition_type: selectedInfo });
              }}
              variant="outlined"
              style={{
                display: "flex",
                marginBottom: "20px",
                width: "100%",
              }}
            >
              <MenuItem value="Anonymous">Anonymous</MenuItem>
              <MenuItem value="Not anonymous">Not anonymous</MenuItem>
              
            </Select>

          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >

            <Button
              onClick={handleClose}
              variant="contained"
              style={{
                height: "30px",
                width: "100px",
                backgroundColor: "#896cc9",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              style={{
                height: "30px",
                width: "100px",
                backgroundColor: "#896cc9",
                marginLeftLeft: "50px",
              }}
            >
              Add
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
