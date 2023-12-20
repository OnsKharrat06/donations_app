import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import BasicModal from './updatepopup';
import ThemeButton from '../../buttons/ThemeButton';
import axios from 'axios';

const url = "http://localhost:9000/api/donations";


const MyItems = () => {
  const reload=()=>window.location.reload();
  const [donation, setdonation] = useState([]);

  useEffect(() => {
    axios.get(url)
        .then((res) => {
            setdonation(res.data.donation)
        })
        .catch((error) => {
            alert(error.response.data.msg);
            console.error("There was an error!", error);
        });
}, []);

const handleDelete = (id) => {
  axios.delete(`http://localhost:9000/api/donations/${id}`)
    .then((response) => {
      console.log(response.data);
      
      alert(response.data.msg);
      reload();
      
    })
    .catch((error) => {
      alert(error.response.data.msg);
    });
}

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // const handleUpdate = (item) => {
  //   setSelectedItem(item);
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", textTransform:"uppercase",marginTop: "40px", color: "#896cc9", fontSize: "40px", fontWeight: 800 }}>My donations</h1>
      <div className="row justify-content-center" style={{ display: 'flex', marginTop: '100px', marginBottom: '60px' }}>
        {donation.map((element) => (
          <div className="col-lg-3 col-md-4 col-sm-6 pb-3" key={element.id}>
            <div className="pro-card" style={{ height: '360px', width: '300px' }}>
              <div style={{ display: "flex" }}>
                <img src={"https://cdn.refurb.eu//files/refurb.eu/BareboneProductFile/239-apple-ipad-pro-105.jpg"} alt="Item" height="200px" style={{ margin: "0 auto" }} />
              </div>
              <div className="info">
                <div className="px-3">
                  <div className="price">
                    <h6 style={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden"
                    }}>
                      {element.name}
                    </h6>
                  </div>
                  <div className="d-flex" style={{ justifyContent: "start" }}>
                    <h6>Item State :   </h6>
                    <Rating name="read-only" size="small" value={element.rate} readOnly />
                  </div>
                  <div className="d-flex" style={{ justifyContent: "start" }}>
                    <h6>Added On : </h6>
                    <span>{element.addedOn}</span>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <ThemeButton style={{ display: "flex", marginTop: "25px", marginBottom: "10px", backgroundColor: "#896cc9", justifyContent: "flex-start" }} size="medium" onClick={() =>handleDelete(element.id)}>Delete</ThemeButton>
                    {/* <ThemeButton style={{ display: "flex", marginTop: "-45px", marginBottom: "10px", backgroundColor: "#896cc9",marginLeft:"190px" }} size="medium" onClick={() => handleUpdate(item)}>Update</ThemeButton> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {open && <BasicModal open={open} handleClose={handleClose} item={selectedItem} />}
    </div>
  );
};

export default MyItems;