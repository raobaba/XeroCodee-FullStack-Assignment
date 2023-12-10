"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "../../assets/logo-1f6eb176.png";
import "../../styles/Deployment.scss";

function Deployment() {
  const router = useRouter();
  const [buttonText, setButtonText] = useState("XeroCodee Hosting");
  const [activeButton, setActiveButton] = useState(false);

  const handleButtonClick = () => {
    setButtonText("Coming Soon");
    setActiveButton(true);
  };

  return (
    <div className="deployment-container">
      <div className="deployment-content">
        <div className="logo-section flex items-center">
          <Image src={Logo} alt="logo" width={40} />
          <h3 className="xerocode-text">eroCodee.</h3>
        </div>
        <div className="text-description">
          <h3>Welcome Arya Soni !</h3>
          <div className="underline-text">
            <span className="underline"></span>
            <p>Choose from the following Deployment options</p>
            <span className="underline"></span>
          </div>
        </div>
        <div className="button-container">
          <div className="button-group mt-4">
            <button
              onClick={() => router.push('/DashPage')}
              className="self-host"
            >
              Self Hosting
            </button>
            <button
              className={`xero-host ${
                activeButton ? "ring ring-blue-500" : ""
              }`}
              onClick={handleButtonClick}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deployment;
