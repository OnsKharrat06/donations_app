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
  borderRadius:'10px',
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [selectedSubmitionType, setselectedSubmitionType] = React.useState(false);
  const [selectedState, setSelectedState] = React.useState(0);
  const handleOpen = () => setOpen(true);
  
  const handleClose = () => {
    setOpen(false);
    setSelectedFile(null);
    setSelectedCategory('');
    setselectedSubmitionType(false);
  };
  const handleAdd = () => {
    if (!selectedFile || !selectedCategory || !selectedState || !selectedSubmitionType) {
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
  return (
    <div>
      <ThemeButton onClick={handleOpen} variant="contained" style={{padding: "8px 3.3rem" ,backgroundColor: "#896cc9", gridColumnStart: "span 2" }}>
        Add Item <AddCircleIcon style={{ margin:"0 10px"}}></AddCircleIcon>
      </ThemeButton>

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
              textAlign:"center",
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
                id="upload-image"
              />
            </Button>
            {selectedFile && (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected Item Image"
                style={{ maxWidth: "100%" }}
              />
            )}
            <TextField label="Name Of The Item *" variant="outlined" style={{ marginBottom: "20px", marginTop: "20px" }} />

            <TextField label="Description *" variant="outlined" style={{ marginBottom: "20px" }} />
            <p style={{ color: "#896cc9",fontSize: "20px" }}>State* : {selectedState}</p>
            <Slider
              value={selectedState}
              onChange={handleStateChange}
              min={0}
              max={5}
              step={1}
              valueLabelDisplay="auto"
              sx={{ color: "#636365" }}
            />
           
            <p style={{ color: "#896cc9",fontSize: "20px" }}>Category* :</p>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              variant="outlined"
              style={{
                display:"flex",
                marginBottom: "20px",
                width:"100%",
              }}
            >
              <MenuItem value="books">Books</MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem>
              <MenuItem value="schoolSupplies">School Supplies</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            <br></br>
            
            <p style={{ color: '#896cc9',fontSize: '20px' }}>Submission Type* :</p>
            <RadioGroup
              value={selectedSubmitionType ? "anonymous" : "non-anonymous"}
              onChange={handleSubmittedByChange}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FormControlLabel
                value="anonymous"
                control={<Radio />}
                label="Anonymous"
              />
              <FormControlLabel
                value="non-anonymous"
                control={<Radio />}
                label="Non-Anonymous"
              />
            </RadioGroup>
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
                onClick={handleAdd}
                variant="contained"
                style={{
                  height: "30px",
                  width: "100px",
                  backgroundColor: "#896cc9",
                  marginLeftLeft:"50px",
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
