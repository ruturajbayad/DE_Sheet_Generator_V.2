import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <section className="navbar-bg">
      <nav class="navbar navbar-expand-lg body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">
            Sheets
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Sheets
                </a>
              </li>
              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Sheets
                </a>
                 <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      AEIOU
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      LNM
                    </a>
                  </li>
                </ul> 
              </li> */} 
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Contect
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li> 
            </ul>
            <form class="d-flex" role="search">
              <button class="btn btn-style btn-style-border" type="submit">
                Login
              </button>
              <button class="btn btn-style " type="submit">
                SignUp
              </button>
            </form>
          </div>
        </div>
      </nav>
      </section>
    </>
  );
};

export default Navbar;
