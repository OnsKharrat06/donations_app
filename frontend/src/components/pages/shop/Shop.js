import React, { useEffect, useState } from 'react'
import "./Shop.css";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import filterByCategory from '../../../filters/filterByCategory';
import filterByRating from '../../../filters/filterByRating';
import filterByText from '../../../filters/filterByText';
import environment from "../../../environments/environment.js";
import Card from "./card/Card";
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import ThemeButton from "../../buttons/ThemeButton";
import { setRate, setCategory, setSearchText } from "../../../redux/actions/filterAction";
import BasicModal from "./popup/Popup";
import axios from 'axios';
import { setProducts } from '../../../redux/actions/productsAction.js';
const url = "http://localhost:9000/api/donations";





const Shop = (props) => {
    const date = new Date();
    const day = date.toLocaleDateString('en-us', { day: "numeric" });
    const month = date.toLocaleDateString('en-us', { month: "long" });
    const year = date.toLocaleDateString('en-us', { year: "numeric" });

    const [donation, setdonation] = useState([]);
    const dispatch = useDispatch();
    var type="";
    if(props.type ==="provided"){
        type="provided donation";
    }else{
        type="saught donation";
    
    }

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                console.log(res.data, "get2.0");
                setdonation(res.data.donation)
            })
            .catch((error) => {
                alert(error.response.data.msg);
                console.error("There was an error!", error);
            });
    }, []);

    useEffect(() => {
        dispatch(setProducts(donation));
    }, [donation])

    document.title = ` ${props.title} | ${environment.app.name}`;
    const [filteredProducts, setFilteredProducts] = useState([]);
    const products = useSelector((state) => state.products);
    const filter = useSelector((state) => state.filter);


    useEffect(() => {
        console.log("Testin products from store")
        setFilteredProducts(products);
    }, [products]);


    useEffect(() => {
        let startFiltering = () => {
            let fc = filterByCategory(filter.categoryStatus, products);
            let fr = filterByRating(filter.rate, fc);
            let ft = filterByText(filter.searchText, fr);
            setFilteredProducts(ft);
        }
        startFiltering();
    }, [filter, products]);


    function valuetext(value) {
        return `${value}`;
    }




    return (
        <>
            <main>
                <aside>
                    <Divider />
                    <section className="filter-sec">
                        <h6>Filter Using State</h6>
                        <p> <Rating name="read-only" size="small" value={5} readOnly />
                        </p>
                        <Slider onChange={(e) => { dispatch(setRate(parseInt(e.target.value))); }}
                            size="small"
                            aria-label="Temperature"
                            value={filter.rate}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={0}
                            max={5}
                            style={{ color: "#636365" }}
                        />

                    </section>


                    <Divider />
                </aside>
                <main-content>
                    <h1 className='heading'>{props.title}</h1>
                    <div className="container-search-popup">
                        <input className="product-search-input" type="text" onChange={(e) => { dispatch(setSearchText(e.target.value)); }} value={filter.searchText} placeholder="Search donation here..." id="search" />
                        <BasicModal className="popup" name={props.title} type={props.type}></BasicModal>
                    </div>

                    <div className="filters">
                        <ThemeButton id="all" onClick={() => { dispatch(setCategory("all")); }} className={filter.categoryStatus === "all" ? "filter active" : "filter"} >ALL</ThemeButton>
                        <ThemeButton id="school" onClick={() => { dispatch(setCategory("schoolSupplies")); }} className={filter.categoryStatus === "schoolSupplies" ? "filter active" : "filter"}>SCHOOL SUPPLIES</ThemeButton>
                        <ThemeButton id="womens" onClick={() => { dispatch(setCategory("books")); }} className={filter.categoryStatus === "books" ? "filter active" : "filter"}>BOOKS</ThemeButton>
                        <ThemeButton id="electronics" onClick={() => { dispatch(setCategory("electronics")); }} className={filter.categoryStatus === "electronics" ? "filter active" : "filter"}>ELECTRONICS</ThemeButton>
                        <ThemeButton id="other" onClick={() => { dispatch(setCategory("other")); }} className={filter.categoryStatus === "other" ? "filter active" : "filter"}>OTHER</ThemeButton>
                    </div>
                    <section className={{ zIndex: "-1 important" }} id="product-items">
                        <div className="row">
                            {filteredProducts.filter(element => element.type === type).map((element) => {
                                return (
                                    <Card
                                        key={element.id}
                                        id={element.id}
                                        image={element.image}
                                        name={element.name}
                                        state={element.rate}
                                        date={`${day} ${month} ${year}`}
                                        category={element.category}
                                        description={element.description}
                                    />
                                );
                            })}
                        </div>

                    </section>
                </main-content>
            </main>
        </>
    )
}

export default Shop;