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
    const [product, setProduct] = useState({ rating: { rate: 0 } });
    let { id } = useParams();
    const dispatch = useDispatch();
    id = parseInt(id);
    document.title = `${product.title} | ${environment.app.name}`;

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



    return (<div>
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-4 p-3">
                    <div className="item-img">
                        <img src={product.image} alt={product.title} width="100%" />
                    </div>
                </div>
                <div className="col-md-8">
                    <div>
                        <h1>{product.title}</h1>
                        <h2>{product.category}</h2>
                        <Rating name="read-only" value={Math.round(product.rating.rate)} readOnly />

                        <p>{product.description}</p>
                        <h2>${product.price}</h2>
                        {!product.presentInCart
                            ?
                            <ThemeButton onClick={() => {
                                dispatch(addToCartProduct(product.id));
                            }} variant="contained" size="medium">Add to Cart</ThemeButton>
                            :
                            <Button onClick={() => {
                                dispatch(removeFromCartProduct(product.id));
                            }} variant="contained" color="error" size="medium">Remove from Cart</Button>

                        }
                        
                        <Link className='add-cart-button' to="/cart"><Button variant="contained" size="medium">Visit cart</Button></Link>
                        {!product.presentInWishlist
                            ?
                            <Tooltip title="Add to wishlist">
                            <Fab sx={{height:40, width:40}} aria-label="like" onClick={() => {
                                dispatch(addToWishlistProduct(product.id));}}>
                                <FavoriteIcon />
                            </Fab></Tooltip>
                            :
                            <Tooltip title="Remove from wishlist">
                            <Fab sx={{height:40, width:40}}  aria-label="like" onClick={() => {
                                dispatch(removeFromWishlistProduct(product.id));}}>
                                <FavoriteIcon color="error"  />
                            </Fab></Tooltip>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Product;