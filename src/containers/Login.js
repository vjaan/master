import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import "../App.css";

function Login() {
const initialValues = { username: "", password: "" };
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

    if (!values.username) {
        errors.username = <span>Username is required</span>
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

const [auth, setAuth] = useState(false);
    if (auth) {
        return 
        <Navigate to="/ProductComponent" replace={true} />
    }

return (
    <div>
        {
            Object.keys(formErrors).length === 0 && isSubmit ? (
                <div>
                    <Navigate to="/" replace={true} />
                </div>
            ) :

            <form className="form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                    <div className="row">
                        <div>
                            <label htmlFor="username" id="username" className="form-label">UserName</label>
                            <input type="text" className="fields" name="username" placeholder="Username" value={formValues.username} onChange={handleChange} />
                            <p>{formErrors.username}</p>

                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="fields" name="password" placeholder="Password" value={formValues.password} onChange={handleChange} />
                            <p>{formErrors.password}</p><br></br>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button type="submit" className="btn1" onClick={() => setAuth(false)}>Login</button>&nbsp;&nbsp;
                            <Link to='/Registration'><button type="button" className="btn2">Signup</button></Link>&nbsp;
                            <Link to='/' className="">Back to Home</Link>
                        </div>
                    </div>
                </form>
        }
    </div>
);
}
export default Login;