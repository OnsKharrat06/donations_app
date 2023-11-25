import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import BasicModal from './updatepopup';
import ThemeButton from '../../buttons/ThemeButton';

const MyItems = () => {
  const [items, setItems] = useState([
    {
      "id": 1,
      "image": "https://cdn.refurb.eu//files/refurb.eu/BareboneProductFile/239-apple-ipad-pro-105.jpg",
      "name": "PC LENOVO IDEAPAD 3",
      "rate": 1.9,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "submittedBy": ["Ons ", "Ons@gmail.com ", " 12365478"],
      "addedOn": "14 November,2023",
      "category": "electronics"
    },
    {
      "id": 2,
      "image": "https://cdn.refurb.eu//files/refurb.eu/BareboneProductFile/239-apple-ipad-pro-105.jpg",
      "name": "Le Bal des folles",
      "rate": 2.8,
      "description": "1885 : Hôpital de la Salpêtrière, Paris.",
      "submittedBy": ["Ons ", "Ons@gmail.com ", " 12365478"],
      "addedOn": "14 November,2023",
      "category": "books"
    }
  ]);

  const handleDelete = (itemId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleUpdate = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", textTransform:"uppercase",marginTop: "40px", color: "#896cc9", fontSize: "40px", fontWeight: 800 }}>My donations</h1>
      <div className="row justify-content-center" style={{ display: 'flex', marginTop: '100px', marginBottom: '60px' }}>
        {items.map((item) => (
          <div className="col-lg-3 col-md-4 col-sm-6 pb-3" key={item.id}>
            <div className="pro-card" style={{ height: '360px', width: '300px' }}>
              <div style={{ display: "flex" }}>
                <img src={item.image} alt="Item" height="200px" style={{ margin: "0 auto" }} />
              </div>
              <div className="info">
                <div className="px-3">
                  <div className="price">
                    <h6 style={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden"
                    }}>
                      {item.name}
                    </h6>
                  </div>
                  <div className="d-flex" style={{ justifyContent: "start" }}>
                    <h6>Item State :   </h6>
                    <Rating name="read-only" size="small" value={item.rate} readOnly />
                  </div>
                  <div className="d-flex" style={{ justifyContent: "start" }}>
                    <h6>Added On : </h6>
                    <span>{item.addedOn}</span>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <ThemeButton style={{ display: "flex", marginTop: "25px", marginBottom: "10px", backgroundColor: "#896cc9", justifyContent: "flex-start" }} size="medium" onClick={() => handleDelete(item.id)}>Delete</ThemeButton>
                    <ThemeButton style={{ display: "flex", marginTop: "-45px", marginBottom: "10px", backgroundColor: "#896cc9",marginLeft:"190px" }} size="medium" onClick={() => handleUpdate(item)}>Update</ThemeButton>
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