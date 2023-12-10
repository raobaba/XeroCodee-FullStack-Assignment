import React from "react";
import Logo from "../../assets/logo-1f6eb176.png";
import digitalTransformation from "../../assets/digital-transformation-animate.svg";
import buttomBlue from "../../assets/bottomBlueWave-fc128c22.svg";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import "../../styles/SignIn.scss";

const SignUp: React.FC = () => {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signin-header">
          <div className="signup-logo-section">
            <div style={{ display: "flex" }}>
              <Image src={Logo} alt="logo" width={40} />
              <h3
                style={{
                  marginTop: "13px",
                  marginLeft: "-10px",
                  color: "black",
                  fontWeight: "900",
                }}
              >
                eroCodee.
              </h3>
            </div>
            <h2>Hello!</h2>
          </div>
          <div className="signup-section">
            <div className="underlined-text">
              <span className="underline"></span>
              <span className="content">Create your Account</span>{" "}
              <span className="underline"></span>
            </div>
            <div className="singup-input-group">
              <input
                className="sign-input-field"
                type="text"
                placeholder="First Name"
              />
              <input
                className="sign-input-field"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="sign-input-field"
                type="email"
                placeholder="Email"
              />
              <input
                className="sign-input-field"
                type="password"
                placeholder="Password"
              />
              <input
                className="sign-input-field"
                type="password"
                placeholder="Confirm password"
              />
              <button className="signup-button">SIGN UP</button>
            </div>
          </div>
          <p style={{ color: "grey", marginTop: "10px", marginBottom: "10px" }}>
            Or
          </p>
          <div className="social-login-section">
            <div className="button-group">
              <div className="social-button ">
                {" "}
                <button>
                  {" "}
                  <FcGoogle size={27} />{" "}
                </button>{" "}
                <button className="google">Google SignUp</button>
              </div>
              <div className="social-button">
                {" "}
                <button>
                  {" "}
                  <IoLogoGithub size={27} />{" "}
                </button>{" "}
                <button className="github">Github SignUp</button>
              </div>
            </div>

            <div>
              <p className="redirection-link">
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
