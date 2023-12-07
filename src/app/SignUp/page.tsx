"use-client"
import React from "react";
import Logo from "../../assets/logo-1f6eb176.png";
import digitalTransformation from "../../assets/digital-transformation-animate.svg";
import buttomBlue from "../../assets/bottomBlueWave-fc128c22.svg";
import Link from "next/link";
import Image from "next/image";
import "../../styles/SignIn.scss";

const SignUp: React.FC = () => {
  return (
    <div className="signup-container">
      <div className="signin-content">
        <div className="signin-header">
          <div className="logo-section">
            <Image src={Logo} alt="logo" width={40} />
            <h2>Welcome Arya Soni!</h2>
          </div>
          <div className="login-section">
            <div className="underlined-text">
              <span className="underline"></span>
              <span className="content">Create your Account</span>{" "}
              <span className="underline"></span>
            </div>
            <input className="input-field" type="email" name="Email" />
            <input className="input-field" type="password" name="Password" />
            <input className="input-field" type="email" name="Email" />
            <input className="input-field" type="password" name="Password" />
            <input className="input-field" type="email" name="Email" />
            <button className="login-button">SIGN UP</button>
          </div>
          <p>Or</p>
          <div className="social-login-section">
            <div>
              <button className="social-button">Google SigUp</button>
              <button className="social-button">Github SigUp</button>
            </div>
            <div>
              <p>
                Already have an account ?{" "}
                <Link href="/SignIn" className="signup-link">
                  LOG IN
                </Link>
              </p>
            </div>
          </div>
          <div className="bottom-img-container">
            <Image src={buttomBlue} alt="bottomImage" className="bottom-img" />
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="image-section">
          <Image
            src={digitalTransformation}
            alt="digital"
            className="digital-image"
          />
          <Image src={buttomBlue} alt="buttom" className="bottom-blue-image" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;