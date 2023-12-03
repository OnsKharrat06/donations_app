
import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ThemeButton from '../../buttons/ThemeButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
const UpdatePopup = ({ open, handleClose, item }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  const handleCancel = () => {
    handleClose();
  };
  const categories = ['Electronics', 'Books', 'School Supplies', 'Other'];
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="update-modal-title"
      aria-describedby="update-modal-description"
    >
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 500,
        backgroundColor: '#fff',
        outline: 'none',
       
        borderRadius: 10,
        padding: '20px 100px',
      }}>

        <br></br>
        <Typography id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{
              textAlign:"center",
              fontSize: "25px",
              fontWeight: 800,
              color: "#896cc9",
            }}
          >
          Update donation
        </Typography>
        <br></br>
        <br></br>
        <form onSubmit={handleFormSubmit}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            defaultValue={item.name}
            style={{ marginBottom: 10 ,width: 'calc(100% - 25px)' }}
          />
          <TextField
            label="Description"
            name="description"
            fullWidth
            defaultValue={item.description}
            style={{ marginBottom: 10 ,width: 'calc(100% - 25px)'}}
          />
          <TextField
            label="Rate"
            name="rate"
            type="number"
            fullWidth
            defaultValue={item.rate}
            inputProps={{ min: 0, max: 5 }}
            style={{ marginBottom: 10 ,width: 'calc(100% - 25px)'}}
          />
          <Select
            label="Category"
            name="category"
            fullWidth
            defaultValue={item.category}
            style={{ marginBottom: 10, width: 'calc(100% - 25px)' }}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
         
          <div style={{ textAlign: 'right' }}>
            <ThemeButton style={{ display: "flex", marginTop: "40px", marginBottom: "5px", backgroundColor: "#896cc9",marginLeft:"400px" }} type="submit">Save</ThemeButton>
          </div>
          <div style={{ textAlign: 'left' }}>
            <ThemeButton style={{ display: "flex", marginTop: "-45px", marginBottom: "5px", backgroundColor: "#896cc9",marginRight:"400px" }} type="button" onClick={handleCancel}>Cancel</ThemeButton>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpdatePopup;