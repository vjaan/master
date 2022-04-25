import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {selectedProduct,removeSelectedProduct,addProduct,} from "../redux/actions/productsActions";
import store from "../redux/store";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

    const ProductDetails = () => {
    const { productId } = useParams();
    let product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();
    const fetchProductDetail = async (id) => {
    const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .catch((err) => {
        console.log("Err: ", err);
    });
    dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail(productId);
            return () => {
                 //dispatch(removeSelectedProduct());
            };
    }, [productId]);

    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
        <div></div>
    ) : (
        <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
                <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                        <div className="column lp">
                            <img className="ui fluid image" src={image} />
                        </div>
                        <div className="column rp">
                            <h1>{title}</h1>
                            <h2><div className="ui vertical animated button" tabIndex="0">${price}</div></h2>
                            <h3 className="ui brown block header">{category}</h3>
                            <p>{description}</p>

                            <button class="ui primary button" onClick={()=> {
                            Swal.fire({
                                icon:"success",
                                title:" Alert!!!Product Items added Successfully.. ",
                                iconColor:"green",
                                showCloseButton:true,
                                confirmButtonColor:"red",
                            }
                            )
                            let cart=JSON.stringify(product); dispatch(addProduct(product));console.log(store.getState())}} >Add Cart</button>&nbsp;

                            <Link to="/login"><button class="ui primary button" onClick={()=> {let cart=JSON.stringify(product); dispatch(addProduct(product));console.log(store.getState())}} >Buy Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>

)}
        </div>
);
};
export default ProductDetails;