import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../redux/store';


const Cart = () => {
  const productsCart = useSelector((state) => state.cartProducts)
  console.log(productsCart.cartProducts);

  const [itemCount, setItemCount] = useState(1);
  const [price, setPrice] = useState(1);
  const [cartProducts,setCartProduct]=useState([]);
  const increment =() =>{
      setItemCount(itemCount + 1)
  }
  const decrement=()=>{
      if(itemCount>0){
          setItemCount((itemCount - 1))
      }        
  }
  
  
    
  const handlePrice = () => {
      var ans = 0;
      productsCart.cartProducts.map((product) => (ans += itemCount * product.price));
      setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  }); 
  
    return (

        <div style={{color:'#000',marginTop:'3em'}}>
        
            {productsCart.cartProducts.map((product)=>{
                return (
                    <><div>
                        <div className="ui link cards" key={product.id}>
                            <div className="card">
                                <div className="image">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="content">
                                    <div className="header">{product.title}</div>
                                    <div className="meta price">$ {product.price}</div>
                                    <div className="meta">{product.category}</div>
                                </div>
                            </div>
                        </div>
                    </div><br></br>
                    <div className='price'>Totalprice $ {price}</div>
                    <button class="ui negative basic button" onClick={decrement}>-</button>
                    <button>{itemCount}</button>
                    <button class="ui secondary basic button" onClick=  {increment}>+</button>&nbsp;
                    
                    <Link to="/placeorder"><button type="submit" className='btn1'>Placeorder</button></Link></>
                             
                );
                
            })}
        </div>
    );
}
export default Cart;
