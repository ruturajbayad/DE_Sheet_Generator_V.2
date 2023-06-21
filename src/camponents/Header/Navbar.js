import React ,{useContext}from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../App";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
// scroll 
const scrollToTop = () => {
  scroll.scrollToTop();
};

  const {state} = useContext(UserContext);
  const RenderMenu = () =>{
    if(state){
      return(
            <>
              <li className="nav-item">
                  <NavLink
                    className="nav-link active btnlink"
                    aria-current="page"
                    to="/profile"
                  >
                    profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active btnlink"
                    aria-current="page"
                    to="/logout"
                  >
                    logout
                  </NavLink>
                </li>
            </>
      )

    }
  }
  const ToggleButton = () =>{
    if(!state){
      return (
        
        <>
        <form className="d-flex" role="search">
        <NavLink to="/login"><button
          className="btn btn-style btn-style-border"
          type="submit"
        >
          Login
        </button></NavLink>
        <NavLink to="/signup"><button className="btn btn-style " type="submit">
          SignUp
        </button></NavLink>
         </form>
        </>
      )
  }
}
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg body-tertiary">
          <div className="container">
            <NavLink className="navbar-brand btnlink" to="/home">
              <h2 className="btnl">Sheets</h2>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active btnlink"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active btnlink"
                    aria-current="page"
                    to="/sheets"
                  >
                    Sheets
                  </NavLink>
                </li>
                {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Sheets
                </a>
                 <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      AEIOU
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      LNM
                    </a>
                  </li>
                </ul> 
              </li> */}
                {/* <li className="nav-item">
                  <NavLink
                    className="nav-link active btnlink"
                    aria-current="page"
                    to="/contect"
                  >
                    Contact
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink
                    className="nav-link active btnlink"
                    aria-current="page"
                    to="/about"
                  >
                    About Us
                  </NavLink>
                </li>
                <RenderMenu></RenderMenu>
              </ul>
              <ToggleButton></ToggleButton>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
