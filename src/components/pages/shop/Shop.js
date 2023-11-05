import React, { useEffect, useState } from 'react'
import "./Shop.css";
import { useDispatch, useSelector } from "react-redux";
import filterByCategory from '../../../filters/filterByCategory';
import filterByRating from '../../../filters/filterByRating';
import filterByText from '../../../filters/filterByText';
import filterByRange from '../../../filters/filterByRange';
import environment from "../../../environments/environment.js";
import Card from "./card/Card";
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import ThemeButton from "../../buttons/ThemeButton";
import {setRate, setCategory, setSearchText, setRange} from "../../../redux/actions/filterAction";
const Shop = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const products = useSelector((state) => state.products);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    // const [categoryStatus, setCategoryStatus] = useState("all");
    // const [rate, setRate] = useState(0);
    // const [searchText, setSearchText] = useState("");

    document.title = `Shop | ${environment.app.name}`;

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);


    useEffect(() => {
        let startFiltering = () => {
            let fc = filterByCategory(filter.categoryStatus, products);
            let fr = filterByRating(filter.rate, fc);
            let ft = filterByText(filter.searchText, fr);
            let frange = filterByRange(filter.range, ft);
            setFilteredProducts(frange);
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
                        <h6>Filter using rating</h6>
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
                        />

                    </section>
                    <br />
                    <section className="filter-sec">
                        <h6>Filter using range</h6>
                        <ul style={{ paddingLeft: 0 }} >
                            <li>
                                <input id="0-25" value="0-25" type="checkbox" onChange={()=>{dispatch(setRange("range_0_25", !filter.range.range_0_25));}}  checked={filter.range.range_0_25} name="prange" />
                                <label htmlFor="0-25">Between $0 to $25</label>
                            </li>
                            <li>
                                <input id="25-50" value="25-50" type="checkbox" onChange={()=>{dispatch(setRange("range_25_50", !filter.range.range_25_50));}} checked={filter.range.range_25_50}  name="prange" />
                                <label htmlFor="25-50">Between $25 to $50</label>
                            </li>
                            <li>
                                <input id="50-100" value="50-100" type="checkbox" onChange={()=>{dispatch(setRange("range_50_100", !filter.range.range_50_100));}} checked={filter.range.range_50_100}  name="prange" />
                                <label htmlFor="50-100">Between $50 to $100</label>
                            </li>
                            <li>
                                <input id="100on" value="100on" type="checkbox" onChange={()=>{dispatch(setRange("range_100", !filter.range.range_100));}} checked={filter.range.range_100}  name="prange" />
                                <label htmlFor="100on">$100 Onwards</label>
                            </li>
                        </ul>
                    </section>
                    <Divider />
                </aside>
                <main-content>

                    <input className="product-search-input" type="text" onChange={(e) => { dispatch(setSearchText(e.target.value));}} value={filter.searchText} placeholder="Search product here..." id="search" />

                    <div className="filters">
                        <ThemeButton id="all" onClick={() => { dispatch(setCategory("all")); }}  className={filter.categoryStatus === "all" ? "filter active" :"filter" } >ALL</ThemeButton>
                        <ThemeButton id="mens" onClick={() => { dispatch(setCategory("men's clothing")); }} className={filter.categoryStatus === "men's clothing" ? "filter active" :"filter" }>MENS</ThemeButton>
                        <ThemeButton id="womens" onClick={() => { dispatch(setCategory("women's clothing")); }} className={filter.categoryStatus === "women's clothing" ? "filter active" :"filter" }>WOMENS</ThemeButton>
                        <ThemeButton id="jewellery" onClick={() => { dispatch(setCategory("jewelery")); }} className={filter.categoryStatus === "jewelery" ? "filter active" :"filter" }>JEWELLERY</ThemeButton>
                        <ThemeButton id="electronics" onClick={() => { dispatch(setCategory("electronics")); }} className={filter.categoryStatus === "electronics" ? "filter active" :"filter" }>ELECTRONICS</ThemeButton>
                    </div>
                    <section className={{ zIndex: "-1 important" }} id="product-items">
                        <div className="row">
                            {filteredProducts.map((element) => {

                                return (<Card
                                    key={element.id}
                                    id={element.id}
                                    image={element.image}
                                    title={element.title}
                                    price={element.price}
                                    rate={element.rating.rate}
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