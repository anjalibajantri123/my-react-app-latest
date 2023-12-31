import React from 'react'
import PropTypes from 'prop-types';
// import { Outlet, Link } from "react-router-dom";

// we can pass any parameter name like props or nav
export default function Navbar(props) {
  return (
    
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
       {/* <nav className="navbar navbar-expand-lg bg-dark"></nav> */}
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.mainTitle}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{props.homeText}</a>
            {/* <Link className="nav-link active" aria-current="page" to="/">{props.homeText}</Link> */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{props.aboutText}</a>
            {/* <Link className="nav-link active" aria-current="page" to="/about">{props.aboutText}</Link> */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{props.textformText}</a>
            {/* <Link className="nav-link active" aria-current="page" to="/textform">{props.textformText}</Link> */}
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
        {/* <div className="form-check form-switch text-light"> */}
          <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
          <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
          {/* <label className="form-check-label text-light"   htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label> */}

        </div>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-primary text-white" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
  )
}

//define the props datatypes using objects
Navbar.propTypes = {navtitle: PropTypes.string.isRequired, 
                    homeText: PropTypes.string.isRequired,
                    aboutText : PropTypes.string.isRequired,
                    textformText : PropTypes.string.isRequired}

    Navbar.defaultProps = {
        navtitle: 'Stranger',
        homeText: 'Home',
        aboutText: 'About',
        textformText: 'Textform'
    };

        

