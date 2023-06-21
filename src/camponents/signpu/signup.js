import React, {useState} from "react";
import "./signup.css";
import { NavLink , useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  // const history = useHistory()
    const [user, setUser] = useState({
      name:"",email:"",password:"",cpassword:"" 
    });

    let name,value;

    const handelInputs = (e) =>{
      name = e.target.name;
      value = e.target.value;
      setUser({...user, [name]:value});
    }
    // validation
    const validateForm = () => {
      const { name, email, password, cpassword } = user;
    
      // Validate password
      if (!password || password.trim() === "") {
        window.alert("Password cannot be empty");
        return false;
      }
    
      if (password.length < 8) {
        window.alert("Password must be at least 8 characters long");
        return false;
      }
    
      // Password validation regex
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    
      if (!passwordRegex.test(password)) {
        window.alert(
          "Password must contain at least one symbol, one lowercase letter, one uppercase letter, and one number"
        );
        return false;
      }
    
      // Validate password and confirm password match
      if (password !== cpassword) {
        window.alert("Passwords do not match");
        return false;
      }
    
      // Validate username (minimum length and lowercase requirement)
      if (name.length < 3 || name.toLowerCase() !== name) {
        window.alert("Username must be at least 3 characters long and lowercase");
        return false;
      }
    
      // Validate email (simple check for @ symbol)
      if (!email.includes("@")) {
        window.alert("Invalid email address");
        return false;
      }
    
      return true;
    };
  // send data on mongo 
    const sentData = async (e) => {
      e.preventDefault();
      const validate = validateForm();
      if(validate){
      const { name, email, password, cpassword } = user;
    
      const res = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpassword,
        }),
      });
    
      const data = await res.json();
    
      if (res.status === 422 || !data) {
        window.alert("Signup failed");
      } else if(res.status === 423){
        window.alert("User is already Registered");
        navigate("/login");
      } else{
        // window.alert("Signup success");
        navigate("/login");
      }
    }
    };


  return (
    <>
      <div className="main11">
        <div className="login">
          <h1 className="text-center">Sing up</h1>
          <form method="POST" className="needs-validation">
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Username
              </label>
              <input
                className="form-control inputs"
                type="text"
                id="name"
                name="name"
                required
                value={user.name}
                onChange={handelInputs}
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email address
              </label>
              <input
                className="form-control inputs"
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handelInputs}
                placeholder="Email address"
                required
              />
              <div className="invalid-feedback">
                Please enter your email address
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                className="form-control inputs"
                type="password"
                id="password"
                name="password"
                required
                value={user.password}
                onChange={handelInputs}
                placeholder="Password"
              />
              <div className="invalid-feedback">Please enter your password</div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Re-Password
              </label>
              <input
                className="form-control inputs"
                type="password"
                id="cpassword"
                name="cpassword"
                required
                value={user.cpassword}
                onChange={handelInputs}
                placeholder="Re-enter Password"
              />
              <div className="invalid-feedback">Please enter your password</div>
            </div>
            <input
              className="btn btn-success w-100"
              type="submit"
              value="SIGN UP"
              name="singup"
              onClick={sentData}
            />
          </form>
          <div className="form-group form-check">
            <h5 className="bottomtext1">Have Account?</h5>
            <NavLink className="bottomlink1" to="/login">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

