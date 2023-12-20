import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./components/pages/home/Home.js";
import About from "./components/pages/about/About";
import Provided from "./components/pages/provided/Provided";
import Sought from "./components/pages/sought/Sought";
import Login from "./components/pages/login/Login.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer";
import Register from "./components/pages/register/Register.js";
import Shop from "./components/pages/shop/Shop.js";
import Card from "./components/pages/shop/card/Card";
import { useDispatch} from "react-redux";
import { setProducts } from "./redux/actions/productsAction";
import axios from 'axios';
import React, { useEffect, useState} from 'react'

import Lost from "./components/pages/lost/Lost"
import Profile from "./components/pages/profile/Profile";
import Password from "./components/pages/password/Password";
import MyItems from './components/pages/profile/MyItems';



function App() {

  const url="http://localhost:9000/api/users";
  const url2="http://localhost:9000/api/donations"
  const [donation,setDonation]=useState([]);
  const dispatch = useDispatch();



  return (
    <>
      <Header />
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={ <Login/>} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/provided" element={<Provided/>} />
        <Route path="/sought" element={<Sought/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/change-password" element={<Password/>} />
        <Route path="/mydonations" element={<MyItems/>} />
        <Route path="/*" element={<Lost/>} />
        {/* <Route path="/*" element={<Lost />} /> */}
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
