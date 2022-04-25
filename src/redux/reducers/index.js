import { combineReducers } from "redux";
import { addProductReducer, productsReducer, selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cartProducts:addProductReducer,
});
export default reducers;