import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Swal from "sweetalert2";
import "../App.css";

function Registration() {
const initialValues = { username: "", email: "", password: "" };
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

const handleChange = (e) => {
const { name, value } = e.target;
setFormValues({ ...formValues, [name]: value });
};

const handleSubmit = (e) => {
e.preventDefault();
setFormErrors(validate(formValues));
setIsSubmit(true);
};



useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
    }
}, [formErrors]);
const validate = (values) => {
const errors = {};
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
        errors.name = <span>Name Required</span>
    }
    if (!values.username) {
        errors.username = <span>Username is required</span>
    }
    if (!values.email) {
        errors.email = <span>Email is required!</span>
    } else if (!regex.test(values.email)) {
        errors.email = <span>This is not a valid email format!</span>
    }
    if (!values.password) {
        errors.password = <span>Password is required</span>
    } else if (values.password.length < 4) {
        errors.password = <span>Password must be more than 4 characters</span>
    } else if (values.password.length > 10) {
        errors.password = <span>Password cannot exceed more than 10 characters</span>
    }
return errors;
};

const [auth,setAuth] = useState(false);
    if (auth) {
        return 
        <Navigate to="/Addcart" replace={true} />
    }

return (
    <div className="container">
        {
            Object.keys(formErrors).length === 0 && isSubmit ? (
                <div>Signed in successfully<br></br>
                    <Navigate to="/login" replace={true} />
                </div>) :

                <form className="form" onSubmit={handleSubmit}>
                    <h2>Registration</h2>
                    <div className="row">
                        <div>
                            <label htmlFor="email" >Name</label>
                            <input type="text" className="fields" name="name" placeholder="Enter your name" value={formValues.name} onChange={handleChange} />
                            <p>{formErrors.name}</p>

                            <label htmlFor="email">Email</label>
                            <input type="text" className="fields" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} />
                            <p>{formErrors.email}</p>

                            <label htmlFor="username" >UserName</label>
                            <input type="text" className="fields" name="username" placeholder="Username" value={formValues.username} onChange={handleChange} />
                            <p>{formErrors.username}</p>

                            <label htmlFor="password" >Password</label>
                            <input type="password" className="fields" name="password" placeholder="Password" value={formValues.password} onChange={handleChange} />
                            <p>{formErrors.password}</p>
                        </div><br></br>
                    </div>
                        <div><br></br>
                             <div>
                                <button type="submit" className="btn2" onClick={()=> {
                                     Swal.fire({
                                        icon:"success",
                                        title:" Alert!!!Product Items added Successfully.. ",
                                        iconColor:"green",
                                       showCloseButton:true,
                                       confirmButtonColor:"red",
                                    }
                                    );
                                    setAuth(false)} }>Sign Up</button>&nbsp;
                            </div>
                        </div><br></br>
                </form>
        }
    </div>
);
}
export default Registration;