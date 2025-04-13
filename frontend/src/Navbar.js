import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom "
    >
      <div class="container p-2">
       
        <Link class="navbar-brand" to ="/">
        <img src ="../media/कृषि सूत्र.png" id="logo"></img>
        </Link>
       
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
          <form class="d-flex" role="search">
            <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active"  to="/signup" aria-current="page" style={{color:"#ebd1c8" ,fontSize:"1.5rem"}}>
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active"   to ="/about" style={{color:"#ebd1c8" ,fontSize:"1.5rem"}}>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/product" style={{color:"#ebd1c8" ,fontSize:"1.5rem"}}>
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to ="/support" style={{color:"#ebd1c8" ,fontSize:"1.5rem"}}>
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;