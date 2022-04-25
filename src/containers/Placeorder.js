import React from 'react'
import { Link } from 'react-router-dom';

const Placeorder = () => {

  return (

      <div className="container">
          <h3>Place Order</h3>
            <div className="row">
              <><form className="form">
                <h2>Place Order</h2>
                  <label htmlFor='name'>Name</label>
                  <input type="text" className="fields" />
                
                
                  <label htmlFor='address'>Address</label>
                  <input type="text" className="fields" />
                
                
                  <label htmlFor='phonenumber'>Phone Number</label>
                  <input type="tel" className="fields" /><br></br>
                
                
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label" for="exampleCheck1">Are you sure you want to place your order</label><br></br>&nbsp;
                

                <Link to="/successmessage"><button type="submit" className="btn2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Submit
                </button></Link>&nbsp;
                
              </form></>
            </div>

          </div>
);
}
export default Placeorder;