"use client";
import React from "react";
import Logo from "../../assets/logo-1f6eb176.png";
import { useRouter } from "next/navigation";
import digitalTransformation from "../../assets/digital-transformation-animate.svg";
import buttomBlue from "../../assets/bottomBlueWave-fc128c22.svg";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import "../../styles/SignIn.scss";
import { signIn, signOut, useSession } from "next-auth/react";


const SignIn: React.FC = () => {

  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }

  const router = useRouter();
  return (
    <div className="signin-container">
      <div className="signin-content">
        <div className="signin-header">
          <div className="logo-section">
            <div style={{ display: "flex" }}>
              <Image src={Logo} alt="logo" width={40} />
              <h1
                style={{
                  marginTop: "50px",
                  marginLeft: "-18px",
                  fontSize: "23px",
                  color: "black",
                  fontWeight: "900",
                }}
              >
                eroCodee.
              </h1>
            </div>
            <h2>Welcome Arya Soni!</h2>
          </div>
          <div className="login-section">
            <div className="underlined-text">
              <span className="underline"></span>
              <span className="content">Login to your Account</span>{" "}
              <span className="underline"></span>
            </div>
            <div className="input-group">
              <input
                className="input-field"
                type="email"
                placeholder="Email ID"
              />
              <input
                className="input-field"
                type="password"
                placeholder="Password"
              />
              <button
                onClick={() => router.push("/Details")}
                className="login-button"
              >
                LOGIN
              </button>
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
                <button onClick={() => signIn('google')} className="google">Google SignIn</button>
              </div>
              <div className="social-button">
                {" "}
                <button>
                  {" "}
                  <IoLogoGithub size={27} />{" "}
                </button>{" "}
                <button onClick={() => signIn('github')}  className="github">Github SignIn</button>
              </div>
            </div>
            <div>
              <p className="redirection-link">
                Don't have an account ?{" "}
                <Link href="/SignUp" className="signup-link">
                  SIGN UP
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

export default SignIn;
