const intialState = [];

const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS":
      localStorage.setItem("products", JSON.stringify(payload));
      return payload;
    
    default:
      return state;
  }
};

export default productsReducer;