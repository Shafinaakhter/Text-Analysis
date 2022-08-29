import React from "react";
import './Navbar.css'
import { Link } from "react-scroll";

const Navbar = (props) => {
  return (
    <>
     <div className="navbar">
     <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="home">
            Logo
          </Link>

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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="nav-middle">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" syp={true} smooth={true} aria-current="page" to="home" style={{color:'#fff'}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" syp={true} smooth={true} to="about" style={{color:'#fff'}}>
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" syp={true} smooth={true} to="project" style={{color:'#fff'}}>
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" syp={true} smooth={true} to="contact" style={{color:'#fff'}}>
                    Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" syp={true} smooth={true} to="text" style={{color:'#fff'}}>
                    Text
                </Link>
              </li>
            </ul>

            </div>

            <div className="dark">
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label className="form-check-label"  style={{color:'#fff'}}htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
            </div>

          </div>
        </div>
      </nav>
     </div>
    </>
  );
};

export default Navbar;
