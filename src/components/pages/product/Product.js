import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { addToCartProduct, removeFromCartProduct, addToWishlistProduct, removeFromWishlistProduct } from '../../../redux/actions/productsAction'
import Rating from '@mui/material/Rating';
import "./Product.css";
import ThemeButton from "../../buttons/ThemeButton";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import environment from "../../../environments/environment.js";

const Product = () => {
    
    const products = useSelector((state) => state.products);
    const [product, setProduct] = useState({rate:0});
    let { id } = useParams();
    id = parseInt(id);
    

    useEffect(() => {
        const extractFromProducts = () => {
            products.forEach(elem => {
                if (elem.id === id) {
                    setProduct({ ...elem });
                }
            });
        }
        extractFromProducts();
    }, [products, id]);

    document.title = ` Details: | ${product.name}`;

    return (<div>
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-4 p-3">
                    <div className="item-img">
                        <img src={product.image}  width="100%" />
                    </div>
                </div>
                <div className="col-md-8">
                    <div>
                        <h1>{product.name}</h1>
                        <h2>{product.category}</h2>
                        <Rating name="read-only" value={Math.round(product.rate)} readOnly />

                        <p>{product.description}</p>
                        <p>Provider Contact Information:</p>
                        <p>{product.submittedBy}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Product;