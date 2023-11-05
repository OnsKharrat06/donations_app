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

function App() {
  const dispatch = useDispatch();

  

  useEffect(() => {
    const fetchProducts = async () => {
      let data = localStorage.getItem("products");
      data = JSON.parse(data);
      if(data) {
        dispatch(setProducts(data));
        return;
      }
      
      let res = await axios.get(`https://fakestoreapi.com/products`);
      res = await res.data;
      // console.log(res);
      res.forEach((elem)=>{
          elem["presentInCart"] = false;
          elem["presentInWishlist"] = false;
          elem["price"] = Math.round(elem.price);
          elem.rating["rate"] = Math.round(elem.rating.rate);
      });
      dispatch(setProducts(res));
      localStorage.setItem("products", JSON.stringify(res));
    }
    fetchProducts();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Unauthorized Component= {Home}/>} />
        <Route path="/login" element={<Unauthorized Component= {Login}/>} />
        <Route path="/aboutus" element={<Unauthorized Component= {About}/>} />
        <Route path="/provided" element={<Unauthorized Component= {Shop}/>} />
        <Route path="/sought" element={<Unauthorized Component= {Sought}/>} />
        <Route path="/register" element={<Unauthorized Component= {Register}/>} />
        <Route path="/shop" element={<Global Component= {Shop}/>} />
        {/* <Route path="/shop" element={<Shop/>} /> */}
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
