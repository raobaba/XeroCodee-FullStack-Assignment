import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/logo-1f6eb176.png";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setShowDrawer(false); 
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="MainNavbar">
      <div className={`Logo ${showDrawer ? "hide-logo" : ""}`}>
        <img src={Logo} alt="logo" width={40} />
      </div>
      <div className="desk-navbar">
        <div className="Navbar-links">
          <Link to="/">Home</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/careers">Careers</Link>
        </div>
        <Link to="/signin" className="SignInButton">
          Sign In
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleDrawer}>
        {showDrawer ? " " : <HiOutlineMenuAlt3 size={35} />}
      </div>
      <div className={`drawer ${showDrawer ? "show" : ""}`}>
        <div className="drawered">
        <HiOutlineX size={35} onClick={toggleDrawer} />
        <div className={`Logo ${showDrawer ? "logo" : ""}`}>
          <img src={Logo} alt="logo" width={40} />
        </div>
        <Link to="/">Home</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/careers">Careers</Link>
        <Link className="SignInButton" to="/signin">
          Sign In
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
