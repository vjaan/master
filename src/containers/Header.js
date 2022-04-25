import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <><div class="right menu">
            <a class="ui item">
                Logout
            </a>
        </div>
        <div className="ui fixed menu">
            <div className="ui container center">
                <div class="ui secondary menu">
                    <Link to="/"><a class="active item" >Home</a></Link>
                    <Link to="/Login"><a class="item" >Login</a></Link>
                    <Link to="/Registration"><a class="item" >Registration</a></Link>
                    <Link to="/Cart"><a class="item" >Cart</a></Link>
                    
                </div>
            </div>
        </div></>
);
};
export default Header;