import React from 'react'
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import environment from "../../../environments/environment.js";

const Lost = () => {
    document.title = `404 | ${environment.app.name}`;
  return (
    <div>
        <div className="pt-5 d-flex align-items-center justify-content-center">
            <div className="pt-5 text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                  <Link to="/"><Button variant="contained" size="medium">Home</Button></Link>
           
            </div>
        </div>
    </div>
  )
}

export default Lost;