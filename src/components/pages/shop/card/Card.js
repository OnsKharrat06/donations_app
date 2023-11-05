import React from "react";
import { useNavigate } from 'react-router';
import "./Card.css";
import Rating from '@mui/material/Rating';

const Card = (props)=>{
    let navigate = useNavigate();
    return (
        <>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div className="pro-card" onClick={()=>{navigate(`/shop/${props.id}`);}} >
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

>{props.title}</h6></div>
                        <div className="d-flex" style={{justifyContent:"space-between"}}>
                            <h6>${props.price}</h6>
                            <div className="pb-3"><Rating name="read-only" value={Math.round(props.rate)} readOnly /></div>
               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
export default Card;