import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/logo-1f6eb176.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Navbar() {
    const [show,setShow] = useState()
  return (
    <div className="Navbar">
      <div className="Logo">
        <img src={Logo} alt="logo" width={40} />
      </div>
      <div className="desk-navbar">
        <div className="Navbar-links">
          <Link to="/">Home</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/careers">Careers</Link>
        </div>
        <Link to="/signin" className="SignIn">
          Sign In
        </Link>
      </div>
      
    </div>
  );
}

export default Navbar;