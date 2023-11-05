const intialState = [];

const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS":
      localStorage.setItem("products", JSON.stringify(payload));
      return payload;
    case "ADD_TO_CART_PRODUCT":
      let temp = [...state];  // important do not directly change the state, make a new copy first
      temp.forEach((elem) => {
        if (elem.id === payload) {
          elem.presentInCart = true;
        }
      });
      // console.log("add to cart", temp);
      localStorage.setItem("products", JSON.stringify(temp));
      return temp;
    case "REMOVE_FROM_CART_PRODUCT":
      let arrr = [...state];
      arrr.forEach((elem) => {
        if (elem.id === payload) {
          elem.presentInCart = false;
        }
      });
      // console.log("remove from cart", arrr);
      localStorage.setItem("products", JSON.stringify(arrr));
      return arrr;
      case "ADD_TO_WISHLIST_PRODUCT":
      let wisharr = [...state];
      wisharr.forEach((elem) => {
        if (elem.id === payload) {
          elem.presentInWishlist = true;
        }
      });
      // console.log("remove from cart", arrr);
      localStorage.setItem("products", JSON.stringify(wisharr));
      return wisharr;
      case "REMOVE_FROM_WISHLIST_PRODUCT":
      let wisharr2 = [...state];
      wisharr2.forEach((elem) => {
        if (elem.id === payload) {
          elem.presentInWishlist = false;
        }
      });
      // console.log("remove from cart", arrr);
      localStorage.setItem("products", JSON.stringify(wisharr2));
      return wisharr2;
    default:
      return state;
  }
};

export default productsReducer;