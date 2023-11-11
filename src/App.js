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
import React, { useEffect} from 'react'
import Product from "./components/pages/product/Product";

import Lost from "./components/pages/lost/Lost"
import Authorized from "./protect/Authorized";
import Unauthorized from "./protect/Unauthorized";
import Profile from "./components/pages/profile/Profile";
import Password from "./components/pages/password/Password";
import Global from "./protect/Global";
import myproducts from '../src/components/data/myproducts';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(myproducts));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Unauthorized Component= {Login}/>} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/provided" element={<Provided/>} />
        <Route path="/sought" element={<Sought/>} />
        <Route path="/register" element={<Unauthorized Component= {Register}/>} />
        <Route path="/shop" element={<Global Component= {Shop}/>} />
        <Route path="/shop/:id" element={<Authorized Component= {Product}/>} />
        <Route path="/profile" element={<Authorized Component= {Profile}/>} />
        <Route path="/change-password" element={<Authorized Component= {Password}/>} />
        <Route path="/*" element={<Global Component= {Lost}/>} />
        {/* <Route path="/*" element={<Lost />} /> */}
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
