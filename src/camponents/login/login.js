import React,{useContext, useState} from "react";
import { NavLink , useNavigate} from "react-router-dom";
import "./login.css";
import { UserContext } from "../../App";

const Login = () => {

    const { dispatch} = useContext(UserContext);

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async(e) => {
      e.preventDefault();

      const res = await fetch('http://localhost:3001/login', {
        method:"POST",
        headers:{
          "Content-type": "application/json" },
          body:JSON.stringify({
            email,password
          }),
          credentials: 'include'
      });
      const data = await res.json();

      if(res.status === 400 || !data){
        window.alert("invalid credentials");
      }else
      {
        dispatch({ type:'USER', payload:true });
        navigate("/");
      }
    }
  
  return (
    <>
      <div className="main11">
        <div className="login">
          <h1 className="text-center">Login</h1>
          <form method="POST" className="needs-validation">
            <div className="form-group">
              <label className="form-label" for="email">
                Email address
              </label>
              <input
                className="form-control inputs"
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" for="password">
                Password
              </label>
              <input
                className="form-control inputs"
                type="password"
                id="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="invalid-feedback">Please enter your password</div>
            </div>
            <div className="form-group form-check">
              <NavLink className="navlink">Forgot Password</NavLink>
            </div>
            <input
              className="btn btn-success w-100"
              type="submit"
              value="Login"
              onClick={login}
            />
          </form>
          <div className="form-group form-check">
            <h5 className="bottomtext">Not have Account?</h5>
            <NavLink className="bottomlink" to="/signup">
              SignUp
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
