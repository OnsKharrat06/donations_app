


// CODE INES
import React, { useState } from "react";
import { useNavigate } from 'react-router';
import "./Card.css";
import Rating from '@mui/material/Rating';
import ThemeButton from "../../../buttons/ThemeButton";
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardTwoTone';
import axios from "axios";

const Card = (props) => {
  
  const [showMore, setShowMore] = useState(false);
  const reload=()=>window.location.reload();
  let navigate = useNavigate();
  const handleDelete = () => {
    axios.delete(`http://localhost:9000/api/donations/${props.id}`)
      .then((response) => {
        console.log(response.data);
        alert(response.data.msg);
        reload();
        
      })
      .catch((error) => {
        alert(error.response.data.msg);
      });
  }
  

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  var source;

  if(props.category==="books"){
    source="https://media.istockphoto.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=0&k=20&c=ZxSsWKNcVpEzrJ3_kxAUuhBCT3P_dfnmJ81JegPD8eE="
  }
  else if(props.category==="schoolSupplies"){
    source ="https://img.freepik.com/premium-vector/school-supplies-backpack-pencils-brushes-paints-ruler-sharpener-stickers-calculator-books_647843-6.jpg"

  }
  else if(props.category==="electronics"){
    source ="https://cdn.refurb.eu//files/refurb.eu/BareboneProductFile/239-apple-ipad-pro-105.jpg"

  }else{
    source ="https://media.istockphoto.com/id/520619396/photo/isolated-shot-of-opened-blank-cardboard-box-on-white-background.jpg?s=612x612&w=0&k=20&c=SEWCBNgOWaQH-sBqq5UnmXXFxhpMPdS9btt6MqX-85c="

  }
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-3">
        <div className="pro-card">
          <div style={{ display: "flex" }}>
            <img
              src={source}
              alt="Item"
              height="200px"
              style={{ margin: "0 auto" }}
            />
          </div>
          <div className="info">
            <div className="px-3">
              <div className="price">
                <b
                  style={{
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {props.name}
                </b>
              </div>
              <div className="d-flex" style={{ justifyContent: "start" }}>
                <b>Item State : </b>
                <Rating name="read-only" value={Math.round(props.state)} readOnly />
              </div>
              <div className="d-flex" style={{ justifyContent: "start" }}>
                <b>Added On : </b>
                <span>{props.date}</span>
              </div>
              {showMore && (
                <div style={{ justifyContent: "start" }}>
                  <div>
                    <span> <b>Category:</b> <span>{props.category}</span></span>

                  </div>
                  <div>
                    <span> <b>Description:</b> <span>{props.description}</span></span>

                  </div>
                </div>
              )}

              <div style={{ textAlign: "center" }}>
                <ThemeButton
                  style={{
                    marginBottom: "10px",
                    backgroundColor: "#896cc9",
                    marginTop: "10px",
                    marginRight: "20px" // Added space to the right of the button
                  }}
                  size="medium"
                  onClick={() => handleDelete()}
                >
                  Delete
                </ThemeButton>

                <ThemeButton
                  style={{
                    marginBottom: "10px",
                    backgroundColor: "#896cc9",
                    marginTop: "10px",
                    marginLeft: "20px" // Added space to the left of the button
                  }}
                  size="medium"
                  onClick={toggleShowMore}
                >
                  {showMore ? (
                    <>
                      <ArrowForwardIcon style={{ marginRight: "5px" }} />
                      Less Details
                    </>
                  ) : (
                    <>
                      <ArrowForwardIcon style={{ marginRight: "5px" }} />
                      More Details
                    </>
                  )}
                </ThemeButton>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;