import React from 'react'

import { Link } from 'react-router-dom';



function Successmessage() {

    return(

               

        <div className='form'>

            <h3>Your Order Placed Succesfully</h3>

            <Link to="/">Back</Link>

        </div>

    )



}

export default Successmessage;