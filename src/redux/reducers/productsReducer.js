import { ActionTypes } from "../constants/action-types";

const intialState = {
  products: [],
  cartProducts: [],
};


export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = intialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return state= state.filter((x) =>{
          return x.id!== ActionTypes.payload.id
        });
  default:
        return state;   
  }
};
export const addProductReducer =(state=intialState,{type,payload}) =>{
  console.log(type);
  switch(type){
    case ActionTypes.ADD_PRODUCT:
      console.log("hi")
      return { 
        ...state, 
        cartProducts: [...state.cartProducts, payload] 
        }
        default :
        return state;
  }
}