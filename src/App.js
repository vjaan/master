import React from "react";
import { BrowserRouter , Routes,Route} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import Login from "./containers/Login";
import Registration from "./containers/Registration";
import Placeorder from "./containers/Placeorder";
import Successmessage from "./containers/Successmessage";
import Cart from '../src/containers/Cart'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
         
          <Route path ="/successmessage" element={<Successmessage/>}/>
          <Route path="/placeorder" element={<Placeorder/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" exact element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetails/>} />
          <Route path="/Cart" element={<Cart/>} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;