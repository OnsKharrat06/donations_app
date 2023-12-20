import { combineReducers } from "redux";
import productsReducer from "./productsReducer.js";
import filterReducer from "./filterReducer";

const reducers = combineReducers({
  products: productsReducer,
  filter: filterReducer
});

export default reducers;