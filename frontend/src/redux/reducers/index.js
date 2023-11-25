import { combineReducers } from "redux";
import loginReducer from "./loginReducer.js";
import productsReducer from "./productsReducer.js";
import filterReducer from "./filterReducer";

const reducers = combineReducers({
  products: productsReducer,
  login: loginReducer,
  filter: filterReducer
});

export default reducers;