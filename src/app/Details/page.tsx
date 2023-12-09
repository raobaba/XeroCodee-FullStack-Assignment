"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/logo-1f6eb176.png";
import "../../styles/Details.scss";

function Details() {
  const [showInput, setShowInput] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("");
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (placeholder: any) => {
    setShowInput(true);
    setPlaceholderText(`Enter ${placeholder} Name`);
    setActiveButton(placeholder);
  };

  const handleInputChange = (e: any) => {
    // Handle input changes here
  };

  return (
    <div className="details-container p-4 flex flex-col items-center">
      <div className="details-content">
        <div className="logo-section flex items-center">
          <Image src={Logo} alt="logo" width={40} />
          <h3 className="xerocode-text">
            eroCodee.
          </h3>
        </div>
        <div className="text-description">
          <h3>Welcome Arya Soni !</h3>
          <div className="underline-text">
            <span className="underline"></span>
            <p>Choose from the following option</p>
            <span className="underline"></span>
          </div>
        </div>
        <div className="button-group mt-4">
          <button
            className={`developer font-bold py-2 px-4 rounded ${
              activeButton === "Developer" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Developer")}
          >
            Developer
          </button>
          <button
            className={`organization font-bold py-2 px-4 rounded ${
              activeButton === "Organization" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Organization")}
          >
            Organization
          </button>
          <button
            className={`company font-bold py-2 px-4 rounded ${
              activeButton === "Company" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Company")}
          >
            Company
          </button>
        </div>
        {showInput && (
          <div className="output mt-4">
            <input
              type="text"
              className="input-field border rounded-md"
              placeholder={placeholderText}
              onChange={handleInputChange}
            />
            <button className="submit-btn ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;
