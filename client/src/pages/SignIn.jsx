import React from "react";
import Logo from "../assets/logo-1f6eb176.png";
import digitalTransformation from "../assets/digital-transformation-animate.svg";
import buttomBlue from "../assets/bottomBlueWave-fc128c22.svg";
import { Link } from "react-router-dom";
import "../styles/SignIn.css";

function SignIn() {
  return (
    <div className="signin-container">
      <div className="signin-content">
        <div className="signin-header">
          <div className="logo-section">
            <img src={Logo} alt="logo" width={40} />
            <h2>Welcome Arya Soni!</h2>
          </div>
          <div className="login-section">
            <div class="underlined-text">
              {" "}
              <span className="underline"></span>
              Login to your Account <span className="underline"></span>{" "}
            </div>
            <input className="input-field" type="email" name="Email" />
            <input className="input-field" type="password" name="Password" />
            <button className="login-button">LOGIN</button>
          </div>
          <p>Or</p>
          <div className="social-login-section">
            <div>
              <button className="social-button">Google Login</button>
              <button className="social-button">Github Login</button>
            </div>
            <div>
              <p>
                Don't have an account ?{" "}
                <Link className="signup-link">SIGN UP</Link>{" "}
              </p>
            </div>
          </div>
          <div className="bottom-img-container">
            <img src={buttomBlue} alt="bottomImage" className="bottom-img" />
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="image-section">
          <img
            src={digitalTransformation}
            alt="digital"
            className="digital-image"
          />
          <img src={buttomBlue} alt="buttom" className="bottom-blue-image" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
