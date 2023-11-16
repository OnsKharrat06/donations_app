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
import {setRate, setCategory, setSearchText} from "../../../redux/actions/filterAction";
import BasicModal from "./popup/Popup";





const Shop = (props) => {
    document.title = ` ${props.title} | ${environment.app.name}`;
    const [filteredProducts, setFilteredProducts] = useState([]);
    const products=useSelector((state) => state.products);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
   

    useEffect(() => {
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
                           <p> <Rating  name="read-only" size="small" value={5} readOnly />
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
                            style={{color:"#636365"}}
                        />

                    </section>
                    <br />
                    <section className="filter-sec">
                        <h6 style={{fontWeight:"bold"}}>Advanced Filter</h6>
                        <ul style={{ paddingLeft: 0 }} >
                            <li>
                                <input id="alphabetically" value="Alphabetically" type="checkbox" />
                                <label htmlFor="alphabetically">Sort Alphabetically</label>
                            </li>
                            <li>
                                <input id="date" value="date" type="checkbox"/>
                                <label htmlFor="date">Sort by Date</label>
                            </li>
                            
                        </ul>
                    </section>
                    <section className='popup'>
                        
                    </section>
                    <Divider />
                </aside>
                <main-content>
                    <h1 className='heading'>{props.title}</h1>
                    <div className="container-search-popup">
                        <input className="product-search-input" type="text" onChange={(e) => { dispatch(setSearchText(e.target.value));}} value={filter.searchText} placeholder="Search donation here..." id="search" />
                        <BasicModal className="popup" name={props.title}></BasicModal>
                    </div>
                       
                    <div className="filters">
                        <ThemeButton id="all" onClick={() => { dispatch(setCategory("all")); }}  className={filter.categoryStatus === "all" ? "filter active" :"filter" } >ALL</ThemeButton>
                        <ThemeButton id="school" onClick={() => { dispatch(setCategory("school supplies")); }} className={filter.categoryStatus === "school supplies" ? "filter active" :"filter" }>SCHOOL SUPPLIES</ThemeButton>
                        <ThemeButton id="womens" onClick={() => { dispatch(setCategory("books")); }} className={filter.categoryStatus === "books" ? "filter active" :"filter" }>BOOKS</ThemeButton>
                        <ThemeButton id="electronics" onClick={() => { dispatch(setCategory("electronics")); }} className={filter.categoryStatus === "electronics" ? "filter active" :"filter" }>ELECTRONICS</ThemeButton>
                        <ThemeButton id="other" onClick={() => { dispatch(setCategory("other")); }} className={filter.categoryStatus === "other" ? "filter active" :"filter" }>OTHER</ThemeButton>
                    </div>
                    <section className={{ zIndex: "-1 important" }} id="product-items">
                        <div className="row">
                            {filteredProducts.map((element) => {

                                return (<Card
                                    key={element.id}
                                    id={element.id}
                                    image={element.image}
                                    name={element.name}
                                    state={element.rate}
                                    date={element.addedOn}
                                />);

                            })}
                        </div>

                    </section>
                </main-content>
            </main>
        </>
    )
}

export default Shop;