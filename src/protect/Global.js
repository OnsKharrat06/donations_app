import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {setLogin} from '../redux/actions/loginAction';

const Global = (props) => {
    const {Component} = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
  useEffect(()=>{
    let user = localStorage.getItem("currentUser");
    user = JSON.parse(user); 
    if(!user){
        dispatch(setLogin(false));
    }
    else{
      dispatch(setLogin(true));
    }
  },[navigate, dispatch]);  
  return (
    <div>
        <Component/>
    </div>
  )
}

export default Global;