"use client";
import React, { useState } from "react";
import "../../styles/NavPage.scss";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs"; 

function NavPage() {
  const [isTestMode, setIsTestMode] = useState(true); 

  const handleToggle = () => {
    setIsTestMode(prevMode => !prevMode); 
  };

  return (
    <div className="NavPage">
      <div className="NavPage-Content">
        <div className="greet">
          <h1>Hi Arya!</h1>
          <p>Welcome to XeroCodee Ecosystem 😎</p>
        </div>
        <div className="toggle">
          <span>Test Mode</span>
          {isTestMode ? (
            <BsToggle2Off size={28} onClick={handleToggle} />
          ) : (
            <BsToggle2On size={28} onClick={handleToggle} />
          )}
          <span>Production Mode</span>
        </div>
      </div>
    </div>
  );
}

export default NavPage;