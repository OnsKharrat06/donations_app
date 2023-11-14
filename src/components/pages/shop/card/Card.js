import React from "react";
import { useNavigate } from 'react-router';
import "./Card.css";
import Rating from '@mui/material/Rating';
import ThemeButton from "../../../buttons/ThemeButton";
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardTwoTone';

const Card = (props)=>{
    let navigate = useNavigate();
    const moreDetails=()=>{
        navigate(`/shop/${props.id}`);

    }
    return (
        <>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div className="pro-card">
                <div style={{display:"flex"}} >
                    <img src={props.image} alt="Item" height="200px" style={{margin:"0 auto"}} />
                </div>
                <div className="info">
                    <div className="px-3">
                        <div className="price"><h6 style={{
                            textOverflow:"ellipsis",
                            whiteSpace:"nowrap",
                            overflow:"hidden"
                        }} 

                        >{props.name}</h6></div>
                        <div className="d-flex" style={{justifyContent:"start"}}>
                            <h6>Item State :   </h6>
                            
                            <Rating   name="read-only" value={Math.round(props.state)} readOnly />
                        </div>
                        <div className="d-flex" style={{justifyContent:"start"}}>
                            <h6>Added On : </h6>
                            <span>{props.date}</span>
                        </div>
                        <div style={{textAlign:"center"}}>
                        <ThemeButton style={{marginBottom:"10px", backgroundColor:"#896cc9"}} size="medium" onClick={moreDetails}><ArrowForwardIcon style={{marginRight:"5px"}}></ArrowForwardIcon>More Details</ThemeButton>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
export default Card;