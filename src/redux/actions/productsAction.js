const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};
const addToCartProduct = (id) => {
  return {
    type: "ADD_TO_CART_PRODUCT",
    payload: id,
  };
};
const removeFromCartProduct = (id) => {
  return {
    type: "REMOVE_FROM_CART_PRODUCT",
    payload: id,
  };
};
const addToWishlistProduct = (id) => {
  return {
    type: "ADD_TO_WISHLIST_PRODUCT",
    payload: id,
  };
};
const removeFromWishlistProduct = (id) => {
  return {
    type: "REMOVE_FROM_WISHLIST_PRODUCT",
    payload: id,
  };
};
export {setProducts, addToCartProduct, removeFromCartProduct, addToWishlistProduct, removeFromWishlistProduct};