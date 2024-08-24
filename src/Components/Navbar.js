import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [pvalue, setpvalue] = useState("Home");
  const setpvalues = (e) => {
    setpvalue(e);
  };
  return (
    <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand logo_h" href="index.html">
              <img src="img/logor.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav menu_nav justify-content-end">
                <li className={ `nav-item ${pvalue=="Home"?"active": ""}`}  onClick={()=>setpvalues("Home")}>
                  {" "}
                  <Link to="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className={ `nav-item ${pvalue=="About"?"active": ""}`}  onClick={()=>setpvalues("About")}> 
                  {" "}
                  <Link to="/About">
                    <a className="nav-link">About</a>
                  </Link>
                </li>
                <li className={ `nav-item ${pvalue=="Services"?"active": ""}`}  onClick={()=>setpvalues("Services")}> 
                  <Link to="/Services">
                    <a className="nav-link">Services</a>
                  </Link>
                </li>
                <li className={ `nav-item ${pvalue=="Portfolio"?"active": ""}`}   onClick={()=>setpvalues("Portfolio")}> 
                  <Link to="/Portfolio">
                    <a className="nav-link">Portfolio</a>
                  </Link>
                </li>
                <li className={ `nav-item ${pvalue=="Contact"?"active": ""}`}  onClick={()=>setpvalues("Contact")}>
                  <Link to="/Contact">
                    <a className="nav-link">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
